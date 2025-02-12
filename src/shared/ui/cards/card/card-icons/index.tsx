import React from 'react';
import { FaRegBookmark, FaRegEyeSlash } from 'react-icons/fa6';
import { RiShareForwardLine } from 'react-icons/ri';
import { PiMagicWand } from 'react-icons/pi';
import { FaRegStar } from 'react-icons/fa';
import styles from './styles.module.css';
import { useShareToTelegram } from '@/shared/hooks/useShareToTelegram'; 

interface CardIconsProps {
  url: string;
  className?: string;
}

export const CardIcons: React.FC<CardIconsProps> = ({ url, className }) => {
	const shareText = 'Посмотри этот фильм: ';
	const handleShare = useShareToTelegram(url, shareText);

  return (
    <div className={`${styles.icons} ${className || ''}`}>
      <FaRegBookmark title='Буду смотреть' className={styles.icon} />
      <RiShareForwardLine
        title='Поделиться с друзьями'
        className={styles.icon}
				onClick={handleShare}
      />
      <PiMagicWand title='Похожее' className={styles.icon} />
      <FaRegStar title='Уже смотрел, оценить' className={styles.icon} />
      <FaRegEyeSlash title='Не нравится такое' className={styles.icon} />
    </div>
  );
};
