import styles from './styles.module.css';
import { Header, Footer } from '@/widgets';

export const Layout = () => {
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
