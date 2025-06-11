import { Router } from "express";
import { body, param, query } from "express-validator";
import {
  getCard,
  moveCard,
  createCard,
  updateCard,
  deleteCard,
  getCardsByBoard,
} from "../controllers/card.controller";

const router = Router();

const validateCard = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").optional().trim(),
  body("status").optional().isIn(["todo", "in-progress", "done"]).withMessage("Invalid status value"),
  body("board").notEmpty().withMessage("Board ID is required").isMongoId().withMessage("Invalid board ID"),
];

router.post("/", validateCard, createCard);
router.get("/", query("boardId").isMongoId().withMessage("Invalid board ID"), getCardsByBoard);

router.get("/:id", param("id").isMongoId().withMessage("Invalid card ID"), getCard);
router.patch("/:id",
  [param("id").isMongoId().withMessage("Invalid card ID"), ...validateCard],
  updateCard,
);
router.delete("/:id",
  param("id").isMongoId().withMessage("Invalid card ID"),
  deleteCard,
);

router.post("/:id/move",
  [
    param("id").isMongoId().withMessage("Invalid card ID"),
    body("status")
      .isIn(["todo", "in-progress", "done"])
      .withMessage("Invalid status value"),
  ],
  moveCard,
);

export { router };
