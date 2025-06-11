import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { clearNotification } from '@/features/notify';
import { Alert } from '@/components/ui/alert';

const Notification = () => {
  const dispatch = useAppDispatch();
  const { message, source, type } = useAppSelector((state) => state.notify);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        dispatch(clearNotification());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, source, type, dispatch]);

  if (!isVisible || !message) {
    return null;
  }

  return (
    <Alert
      variant={type}
      style={{ position: 'fixed', top: '2rem', right: '2rem', width: '25rem' }}
    >
      {message}
    </Alert>
  );
};

export { Notification };
