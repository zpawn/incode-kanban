import mongoose, { Document, Schema } from "mongoose";

export interface IBoard extends Document {
  title: string;
}

const BoardSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "Title cannot be more than 100 characters"],
  },
});

const Board = mongoose.model<IBoard>("Board", BoardSchema);

export { Board };
