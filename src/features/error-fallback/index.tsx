import { useNavigate } from 'react-router-dom';
import { ActionButton } from '@/shared/ui';

export const ErrorFallback = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Упс!</p>
      <p>Что-то пошло не так...</p>
      <ActionButton
        onClick={() => {
          navigate(-1);
        }}
      >
        <p>Вернуться</p>
      </ActionButton>
    </div>
  );
};
