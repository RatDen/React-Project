import { lazy, Suspense } from 'react';
import styles from './styles.module.css';
import { Header, Footer } from '@/widgets';
import { Outlet } from 'react-router-dom';

const LazyFooter = lazy(() =>
  import('@/widgets/footer').then((module) => ({ default: module.Footer }))
);

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main__content}>
          <Outlet />
        </div>
      </main>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};
