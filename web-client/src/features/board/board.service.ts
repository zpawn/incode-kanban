import { api } from '@/api';
import { type Board } from './types';

const getBoard = (id: Board['_id']) => api.get(`/boards/${id}`);

const getBoards = () => api.get('/boards');

export { getBoard, getBoards };
