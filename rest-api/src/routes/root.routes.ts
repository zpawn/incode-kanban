import { Router } from "express";
import { ping } from "../controllers/root.controllers";

const router = Router();

router.get("/ping", ping);

export { router };
