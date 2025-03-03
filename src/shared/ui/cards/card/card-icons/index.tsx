import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { toggleFavorite } from '@/services/favoriteSlice';
import { FaRegBookmark, FaRegEyeSlash, FaBookmark } from 'react-icons/fa6';
import { RiShareForwardLine } from 'react-icons/ri';
import { PiMagicWand } from 'react-icons/pi';
import { FaRegStar } from 'react-icons/fa';
import styles from './styles.module.css';
import { useShareToTelegram } from '@/shared/hooks/useShareToTelegram'; 

interface CardIconsProps {
  id: string;
  url: string;
  className?: string;
}

export const CardIcons: React.FC<CardIconsProps> = ({ id, url, className }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite.favorites);

  const isFavorite = favorites.includes(id);
  const IconComponent = isFavorite ? FaBookmark : FaRegBookmark;

  const handleToggle = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
    dispatch(toggleFavorite(id));
  };
      
  const shareText = 'Посмотри этот фильм: ';
	const handleShare = useShareToTelegram(url, shareText);

  return (
    <div className={`${styles.icons} ${className || ''}`}>
      <IconComponent
        title={isFavorite ? 'В избранном' : 'Буду смотреть'}
        className={!isFavorite ? styles.icon : undefined}
        onClick={handleToggle}
      />

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
