export interface Board {
  _id: string;
  title: string;
}

export interface BoardState {
  currentBoard: Board | null;
  loading: boolean;
}
