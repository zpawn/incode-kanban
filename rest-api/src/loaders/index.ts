import { Application } from "express";
import { Logger } from "./logger";
import { mongooseLoader } from "./mongoose";
import { expressLoader } from "./express";

export default async ({ app }: { app: Application }) => {
  await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  await expressLoader({ app });
  Logger.info("✌️ Express loaded");
};
