import styles from './styles.module.css';
import { LoginModule } from './login-module';
import { ProfileModule } from './profile-module';
import { userApi } from '@/services';
import { FIXED_CACHE_KEY_USER } from '@/shared/config/api';

export const Profile = () => {
  const [_, { data }] = userApi.useUserLoginMutation({
    fixedCacheKey: FIXED_CACHE_KEY_USER,
  });

  return (
    <section className={styles.container}>
      {data ? <ProfileModule /> : <LoginModule />}
    </section>
  );
};
