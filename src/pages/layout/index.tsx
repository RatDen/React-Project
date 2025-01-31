import styles from './styles.module.css';
import { Header, Footer } from '@/widgets';
import { Outlet } from 'react-router-dom';
import CardInfo from '../../components/CardInfo';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
				<CardInfo/>
      </main>
      <Footer />
    </>
  );
};
