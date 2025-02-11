import styles from './styles.module.css';
import clsx from 'clsx';

export type AvatarProps = {
  avatar?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large';
};

export const Avatar = ({ avatar, name, size = 'medium' }: AvatarProps) => {
  return (
    <div className={clsx(styles.avatar, styles[size])}>
      {avatar ? (
        <img src={avatar} alt='avatar' />
      ) : (
        <p>{name ? name[0] : ''}</p>
      )}
    </div>
  );
};
