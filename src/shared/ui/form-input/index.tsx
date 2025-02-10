import styles from './styles.module.css';
import clsx from 'clsx';
import { forwardRef, useRef, useState, useEffect, FocusEvent } from 'react';
import { ChangeHandler } from 'react-hook-form';

export type FormInputProps = {
  placeholder: string;
  name: string;
  icon?: string;
  type?: 'text' | 'email' | 'password' | 'tel';
  error?: string;
  onBlur?: ChangeHandler;
  onChange?: ChangeHandler;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    { placeholder, name, icon, type = 'text', error, onBlur, onChange },
    forwardedRef
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (forwardedRef instanceof Function) {
        forwardedRef(inputRef.current);
      } else {
        forwardedRef = inputRef;
      }
    }, []);

    const handleFocus = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const handleOnFocus = () => {
      setIsFocused(true);
    };

    const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(event);
      }
    };

    return (
      <div
        className={clsx(
          styles.input__container,
          isFocused ? styles.focused : ''
        )}
        onClick={handleFocus}
      >
        {icon && <img src={icon} alt='icon' className={styles.input__icon} />}
        <input
          type={type}
          name={name}
          className={styles.input_field}
          ref={inputRef}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={onChange}
        />
        <div className={styles.input__overlay}>
          <p
            className={clsx(
              styles.input__placeholder,
              isFocused ? styles.focused : '',
              error ? styles.error : '',
              inputRef.current?.value === '' || !inputRef.current?.value
                ? styles.empty
                : ''
            )}
          >
            {error ? error : placeholder}
          </p>
        </div>
      </div>
    );
  }
);
