import styles from './styles.module.css';
import { Avatar, Uid } from '@/widgets';
import { PromoBlock } from './promo-block';
import { Exit } from '@/app/assets/images';
import { userApi } from '@/services';
import { FIXED_CACHE_KEY_USER } from '@/shared/config/api';
import { deleteLocalUser } from '@/shared/libs/utils';
import { useNavigate } from 'react-router-dom';

export const ProfileModule = () => {
  const navigate = useNavigate();
  const [_, { data, reset }] = userApi.useUserLoginMutation({
    fixedCacheKey: FIXED_CACHE_KEY_USER,
  });

  const handleExit = () => {
    deleteLocalUser();
    reset();
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile__info}>
        <div className={styles.profile__wrap}>
          <Avatar name={data?.FullName} />
          <p className={styles.profile__name}>{data?.FullName}</p>
        </div>
      </div>
      <PromoBlock />
      <div className={styles.profile__info}>
        <button className={styles.button__exit} onClick={handleExit}>
          <img src={Exit} alt='Выход' />
          <p>Выйти</p>
        </button>
        <Uid />
      </div>
    </div>
  );
};
