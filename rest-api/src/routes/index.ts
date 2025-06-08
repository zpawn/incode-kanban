import { Router } from "express";
import { router as rootRouter } from "./root.routes";
import { router as boardRouter } from "./board.routes";
import { router as cardRouter } from "./card.routes";

const routes = () => {
  const app = Router();

  app.use(rootRouter);
  app.use("/boards", boardRouter);
  app.use("/cards", cardRouter);

  return app;
};

export { routes };
