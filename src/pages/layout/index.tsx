import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/widgets';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main__content}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
