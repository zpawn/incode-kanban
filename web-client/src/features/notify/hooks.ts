import { useCallback } from 'react';
import { useAppDispatch } from '@/store';
import { notify as notifyAction, clearNotification, type NotificationType } from './notify.slice';

export const useNotification = () => {
  const dispatch = useAppDispatch();

  const showNotification = useCallback((
    message: string,
    source: string,
    type: NotificationType = 'primary',
  ) => {
    dispatch(notifyAction({ message, source, type }));
  }, [dispatch]);

  const onClearNotification = useCallback(() => {
    dispatch(clearNotification());
  }, [dispatch]);

  const createNotifier = (type: NotificationType) => {
    return (message: string, source?: string) => {
      showNotification(message, source || 'app', type);
    };
  };

  return {
    show: showNotification,
    clear: onClearNotification,
    primary: createNotifier('primary'),
    secondary: createNotifier('secondary'),
    success: createNotifier('success'),
    warning: createNotifier('warning'),
    danger: createNotifier('danger'),
  };
};
