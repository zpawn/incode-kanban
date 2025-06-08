import { Router } from "express";
import { body } from "express-validator";
import {
  getBoard,
  updateBoard,
  createBoard,
  deleteBoard,
  getAllBoards,
} from "../controllers/board.controller";

const router = Router();

const validateBoard = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),
];

router.get("/", getAllBoards)
router.post("/", validateBoard, createBoard);
router.get("/:id", getBoard);
router.put("/:id", validateBoard, updateBoard);
router.delete("/:id", deleteBoard);

export { router };
