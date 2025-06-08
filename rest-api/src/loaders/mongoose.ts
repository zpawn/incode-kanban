import mongoose from 'mongoose';
import { config } from "../config";

const mongooseLoader = () => mongoose.connect(config.db);

export { mongooseLoader };
