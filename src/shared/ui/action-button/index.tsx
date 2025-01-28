import styles from './styles.module.css';
import { ReactElement } from 'react';
import clsx from 'clsx';

type TActionButtonProps = {
  children?: ReactElement | ReactElement[];
  onClick?: () => void;
  round?: boolean;
  square?: boolean;
  promo?: boolean;
};

const ActionButton = ({
  children,
  onClick,
  round = false,
  square = false,
  promo = false,
}: TActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        round ? styles.round : '',
        square ? styles.square : '',
        promo ? 'special_button' : ''
      )}
    >
      {children}
    </button>
  );
};

export default ActionButton;
