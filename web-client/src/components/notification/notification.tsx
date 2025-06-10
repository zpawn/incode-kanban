import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectError, clearError } from '@/features/error';
import { Alert } from '@/components/ui/alert';

const Notification = () => {
  const dispatch = useAppDispatch();
  const { message, source } = useAppSelector(selectError);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        dispatch(clearError());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, source, dispatch]);

  if (!isVisible || !message) {
    return null;
  }

  return (
    <Alert variant="danger" style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 1000, width: '25rem' }}>
      {message}
    </Alert>
  );
};

export { Notification };
