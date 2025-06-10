import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectError, clearError } from './error.slice';

export const useError = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);

  const handleClearError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    error,
    clearError: handleClearError,
  };
};
