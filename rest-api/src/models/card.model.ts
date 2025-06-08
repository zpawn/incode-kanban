import mongoose, { Document, Schema, Types } from "mongoose";

export type CardStatus = "todo" | "in-progress" | "done";

export interface ICard extends Document {
  title: string;
  description?: string;
  status: CardStatus;
  board: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const CardSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo",
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
}, { timestamps: true });

const Card = mongoose.model<ICard>("Card", CardSchema);

export { Card };
