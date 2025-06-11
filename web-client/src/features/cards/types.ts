export type CardStatus = 'todo' | 'in-progress' | 'done';

export interface Card {
  _id: string;
  title: string;
  description?: string;
  status: CardStatus;
  board: string;
  createdAt: string;
  updatedAt: string;
}

export interface CardDto {
  title: string;
  description?: string;
  status: CardStatus;
  board: string;
}

export interface CardsState {
  entities: Record<string, Card>;
  ids: string[];
}
