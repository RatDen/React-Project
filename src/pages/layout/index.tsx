import styles from './styles.module.css';
import { Header, Footer } from '@/widgets';
import { Outlet } from 'react-router-dom';
import { Home } from '../home';
import { Cards } from '@/components/Cards/Cards';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main__content}>
          <Outlet />
					<Cards/>
        </div>
      </main>
      <Footer />
    </>
  );
};
