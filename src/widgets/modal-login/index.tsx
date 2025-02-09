import styles from './styles.module.css';
import { ActionButton, FormInput } from '@/shared/ui';
import { Avatar, Close, Password } from '@/app/assets/images';
import { userApi } from '@/services';
import { FieldValues, useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';
import { FIXED_CACHE_KEY_USER } from '@/shared/config/api';

export type ModalLoginProps = {
  close: () => void;
};

export const ModalLogin = ({ close }: ModalLoginProps) => {
  const [login, { isLoading }] = userApi.useUserLoginMutation({
    fixedCacheKey: FIXED_CACHE_KEY_USER,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    login({
      email: data.email,
      password: data.password,
    }).then(() => close());
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Вход или регистрация</h2>
        <button onClick={close} className={styles.button_close}>
          <Close />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.content_container}>
          <form className={styles.form_login}>
            <FormInput
              type='email'
              placeholder='Введите email'
              icon={Avatar}
              error={errors.email?.message as string}
              {...register('email', {
                required: {
                  value: true,
                  message: 'Это обязательное поле',
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Введите корректный email',
                },
              })}
            />
            <FormInput
              type='password'
              placeholder='Введите пароль'
              icon={Password}
              error={errors.password?.message as string}
              {...register('password', {
                required: {
                  value: true,
                  message: 'Это обязательное поле',
                },
                minLength: {
                  value: 5,
                  message: 'Минимум 5 символов',
                },
              })}
            />
            <ActionButton
              accent
              disabled={!isValid}
              onClick={handleSubmit(onSubmit)}
            >
              <p>Продолжить</p>
            </ActionButton>
          </form>
          {isLoading && (
            <ReactLoading
              type='spin'
              color='#f30745'
              height='40px'
              width='40px'
            />
          )}
        </div>
      </div>
    </div>
  );
};
