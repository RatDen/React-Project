import styles from './styles.module.css';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Qr, Device } from '@/app/assets/images';
import { ActionButton } from '@/shared/ui';
import { ModalLogin } from '@/widgets/modal-login';

export const LoginBlock = () => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setModal(true);
  };

  const handleCloseModal = () => {
    document.body.style.overflow = '';
    setModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.qr}>
        <div className={styles.qr__phone}>
          <img src={Qr} alt='qr код' className={styles.qr__code} />
        </div>
        <div className={styles.qr__description}>
          <h2 className={styles.qr__title}>Наведи камеру телефона на QR</h2>
          <p className={styles.qr__text}>Для бастрого входа через приложение</p>
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.buttons}>
        <ActionButton accent onClick={handleOpenModal}>
          <p>Войти через email или телефон</p>
        </ActionButton>
        <ActionButton>
          <div className={styles.button__add_devices}>
            <img src={Device} alt='Экран' />
            <p>Подключить устройство</p>
          </div>
        </ActionButton>
      </div>

      {modal &&
        createPortal(
          <ModalLogin close={handleCloseModal} />,
          document.getElementById('modal')!
        )}
    </div>
  );
};
