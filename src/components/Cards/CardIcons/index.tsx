import React from 'react';
import { FaRegBookmark } from 'react-icons/fa6';
import { RiShareForwardLine } from 'react-icons/ri';
import { PiMagicWand } from 'react-icons/pi';
import { FaRegStar } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa6';
import styles from './styles.module.css';

interface CardIconsProps {
  className?: string;
}

export const CardIcons: React.FC<CardIconsProps> = ({ className }) => {
  return (
    <div className={`${styles.icons} ${className || ''}`}>
      <FaRegBookmark title='Буду смотреть' className={styles.icon} />
      <RiShareForwardLine
        title='Поделиться с друзьями'
        className={styles.icon}
      />
      <PiMagicWand title='Похожее' className={styles.icon} />
      <FaRegStar title='Уже смотрел, оценить' className={styles.icon} />
      <FaRegEyeSlash title='Не нравится такое' className={styles.icon} />
    </div>
  );
};
