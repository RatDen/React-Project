import styles from './styles.module.css';
import clsx from 'clsx';
import { ReactElement } from 'react';

export type ActionButtonProps = {
  children?: ReactElement | ReactElement[];
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  colors?: 'common' | 'accent' | 'promo';
  form?: 'common' | 'round' | 'square';
  disabled?: boolean;
};

export const ActionButton = ({
  children,
  onClick,
  type = 'button',
  colors = 'common',
  form = 'common',
  disabled = false,
}: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        styles.button,
        form === 'round' ? styles.round : '',
        form === 'square' ? styles.square : '',
        colors === 'accent' ? styles.accent : '',
        colors === 'promo' ? 'special_button' : ''
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
