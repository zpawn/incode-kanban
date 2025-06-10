import { api } from '@/api';
import { type Board } from './types';

const getBoard = (id: Board['_id']) => api.get(`/boards/${id}`);

export { getBoard };
