import { MouseEvent, FormEvent, useState, ChangeEvent } from 'react';
import styles from './newsletterForm.module.scss';
import cn from 'classnames';

const NewsletterForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('normal');
  const [title, setTitle] = useState('Subskrybuj');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement, MouseEvent> | FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

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
      return;
    }

    setTitle('Sukces!');
    setStatus('success');
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <label htmlFor="email" className="visually-hidden">
        Twój adres email
      </label>
      <input
        type="email"
        required
        id="email"
        placeholder="Adres email"
        value={inputValue}
        className={styles.input}
        onChange={handleInputChange}
        aria-invalid={status === 'error'}
      />
      <div className={styles.buttonWrapper}>
        <button className={cn(styles.button, styles[status])}>
          <span>{title}</span>
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
