import { MouseEvent, FormEvent, useState, ChangeEvent } from 'react';
import styles from './newsletterForm.module.scss';
import cn from 'classnames';
import Loader from './loader/Loader';

type NewsletterFormProps = {
  id: string;
};

const NewsletterForm = ({ id = 'email' }: NewsletterFormProps) => {
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

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputValue,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

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
      <label htmlFor={id} className="visually-hidden">
        Twój adres email
      </label>
      <input
        type="email"
        required
        id={id}
        placeholder="Adres email"
        value={inputValue}
        className={styles.input}
        onChange={handleInputChange}
        aria-invalid={status === 'error'}
      />
      <div className={styles.buttonWrapper}>
        <button disabled={isLoading} className={cn(styles.button, styles[status])}>
          {isLoading ? <Loader /> : <span>{title}</span>}
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
