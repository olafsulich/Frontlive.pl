import { MouseEvent, FormEvent, useState, ChangeEvent, memo } from 'react';
import { useRouter } from 'next/router';
import { subscribeToNewsletter } from './utils/api';
import styles from './newsletterForm.module.scss';
import cn from 'classnames';

export const NewsletterForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('normal');
  const [title, setTitle] = useState('Subskrybuj');
  const [isLoading, setLoadingState] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement, MouseEvent> | FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setInputValue('');
    setLoadingState(true);

    const res = await subscribeToNewsletter(inputValue);
    const { error } = await res.json();

    if (error) {
      router.push('/newsletter/error');
      setLoadingState(false);
      return;
    }

    router.push('/newsletter/success');
    setLoadingState(false);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <label className={styles.inputLabelWrapper}>
        <input
          type="email"
          required
          autoComplete="email"
          value={inputValue}
          className={styles.input}
          onChange={handleInputChange}
          aria-invalid={status === 'error'}
          placeholder="Email"
        />
        <span className="visually-hidden">Email</span>
      </label>
      <button className={cn(styles.button, styles[status])}>
        <span>{isLoading ? 'Ładowanie...' : title}</span>
      </button>
    </form>
  );
};
