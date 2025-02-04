import styles from './styles.module.css';
import { Header, Footer } from '@/widgets';
import { Cards } from '../../components/Cards';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}> 
        <Outlet />
        <Cards />
      </main>
      <Footer />
    </>
  );
};
