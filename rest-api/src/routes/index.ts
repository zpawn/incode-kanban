import { Router } from 'express';
import { router as rootRouter } from "./root.routes";

const routes = () => {
  const app = Router();

  app.use(rootRouter);

  return app;
};

export { routes };
