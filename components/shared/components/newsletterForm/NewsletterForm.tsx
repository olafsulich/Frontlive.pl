import { MouseEvent, FormEvent, useState, ChangeEvent, memo } from 'react';
import styles from './newsletterForm.module.scss';
import cn from 'classnames';
import { Loader } from './loader/Loader';
import { subscribeToNewsletter } from './utils/api';

type NewsletterFormProps = {
  id: string;
};

export const NewsletterForm = memo(({ id = 'email' }: NewsletterFormProps) => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('normal');
  const [title, setTitle] = useState('Subskrybuj');
  const [isLoading, setLoadingState] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement, MouseEvent> | FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setLoadingState(true);

    const res = await subscribeToNewsletter(inputValue);
    const { error } = await res.json();

    if (error) {
      setTitle('Wystąpił błąd');
      setStatus('error');
      setLoadingState(false);
      return;
    }

    setLoadingState(false);
    setTitle('Sukces!');
    setStatus('success');
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.inputLabelWrapper}>
        <input
          type="email"
          required
          autoComplete="email"
          id={id}
          value={inputValue}
          className={styles.input}
          onChange={handleInputChange}
          aria-invalid={status === 'error'}
        />
        <label htmlFor={id} className={styles.label}>
          Adres email
        </label>
      </div>
      <div className={styles.buttonWrapper}>
        <button disabled={isLoading} className={cn(styles.button, styles[status])}>
          {isLoading ? <Loader /> : <span>{title}</span>}
        </button>
      </div>
    </form>
  );
});
