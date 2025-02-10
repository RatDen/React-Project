import styles from './styles.module.css';
import { useRef, useState } from 'react';
import { Qr, Device } from '@/app/assets/images';
import { ActionButton } from '@/shared/ui';
import { ModalLogin } from '@/widgets/modal-login';
import { PortalModals } from '@/shared/ui';

export const LoginBlock = () => {
  const [modal, setModal] = useState(false);
  const root = useRef(document.body);

  const handleOpenModal = () => {
    root.current?.classList.add('overflow_hidden');
    setModal(true);
  };

  const handleCloseModal = () => {
    root.current?.classList.remove('overflow_hidden');
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

      {modal && (
        <PortalModals>
          <ModalLogin close={handleCloseModal} />
        </PortalModals>
      )}
    </div>
  );
};
