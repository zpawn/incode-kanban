import { Request, Response } from "express";
import { Card } from "../models";
import { validationResult } from "express-validator";

export const createCard = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { title, description, status, board } = req.body;
    const card = new Card({
      title,
      description,
      status: status || "todo",
      board,
    });

    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: "Error creating card", error });
  }
};

export const getCard = async (req: Request, res: Response) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      res.status(404).json({ message: "Card not found" });
      return;
    }

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: "Error fetching card", error });
  }
};

export const getCardsByBoard = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { boardId } = req.query;
    const cards = await Card.find({ board: boardId });

    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cards", error });
  }
};

export const updateCard = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const card = await Card.findById(req.params.id);

    if (!card) {
      res.status(404).json({ message: "Card not found" });
      return;
    }

    const { title, description, status } = req.body;
    card.status = status || card.status;

    if (title !== undefined) card.title = title;

    if (description !== undefined) card.description = description;

    if (status) card.status = status;

    await card.save();

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: "Error updating card", error });
  }
};

export const moveCard = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const card = await Card.findById(req.params.id);

    if (!card) {
      res.status(404).json({ message: "Card not found" });
      return;
    }

    card.status = status || card.status;
    await card.save();

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: "Error moving card", error });
  }
};

export const deleteCard = async (req: Request, res: Response) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);

    if (!card) {
      res.status(404).json({ message: "Card not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting card", error });
  }
};
