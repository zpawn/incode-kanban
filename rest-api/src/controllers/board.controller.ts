import { Request, Response } from "express";
import { Board } from "../models";
import { validationResult } from "express-validator";

export const createBoard = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { title } = req.body;
    const board = new Board({ title });
    await board.save();

    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ message: "Error creating board", error });
  }
};

export const getBoard = async (req: Request, res: Response) => {
  try {
    const board = await Board.findById(req.params.id);

    if (!board) {
      res.status(404).json({ message: "Board not found" });
      return;
    }

    res.json(board);
  } catch (error) {
    res.status(500).json({ message: "Error fetching board", error });
  }
};

export const getAllBoards = async (_req: Request, res: Response) => {
  try {
    const boards = await Board.find({});

    res.json(boards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching boards", error });
  }
};

export const updateBoard = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { title } = req.body;
    const board = await Board.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true, runValidators: true }
    );

    if (!board) {
      res.status(404).json({ message: "Board not found" });
      return;
    }

    res.json(board);
  } catch (error) {
    res.status(500).json({ message: "Error updating board", error });
  }
};

export const deleteBoard = async (req: Request, res: Response) => {
  try {
    const board = await Board.findByIdAndDelete(req.params.id);

    if (!board) {
      res.status(404).json({ message: "Board not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting board", error });
  }
};
