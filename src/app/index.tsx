import './assets/styles/index.css';
import { AppRoutes } from './routing';
import { useEffect } from 'react';
import { getLocalUser } from '@/shared/libs/utils';
import { userApi } from '@/services';
import { FIXED_CACHE_KEY_USER } from '@/shared/config/api';

function App() {
  const [login, _] = userApi.useUserLoginMutation({
    fixedCacheKey: FIXED_CACHE_KEY_USER,
  });

  useEffect(() => {
    const user = getLocalUser();

    if (user) {
      login({ email: user.Email, password: user.password });
    }
  }, []);

  return <AppRoutes />;
}

export default App;
