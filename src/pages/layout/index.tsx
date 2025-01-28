import styles from './styles.module.css';
import { Header, Footer } from '@/widgets';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main__content}></div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
