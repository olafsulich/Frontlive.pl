import { MouseEvent, FormEvent, useState, ChangeEvent, memo } from 'react';
import { useRouter } from 'next/router';
import { subscribeToNewsletter } from './utils/api';
import styles from './newsletterForm.module.scss';
import cn from 'classnames';
import CheckMarkIcon from '../../../../../public/icons/check-mark.svg';
import Link from 'next/link';

export const NewsletterForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState('normal');
  const [title, setTitle] = useState('Subskrybuj');
  const [isLoading, setLoadingState] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
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
    <form className={styles.container} onSubmit={handleSubmit}>
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          required
          checked={checked}
          className="visually-hidden"
          onChange={handleCheckboxChange}
          aria-invalid={status === 'error'}
        />
        <div
          className={cn(styles.checkbox, {
            [styles.checkboxActive]: checked,
          })}
        >
          {checked && <CheckMarkIcon />}
        </div>
        <span className={styles.privacy}>
          Rozumiem i akceptuję{' '}
          <Link href="/regulamin-newslettera">
            <a className="regulation-link">Regulamin Newslettera</a>
          </Link>{' '}
          oraz{' '}
          <Link href="/polityka-prywatnosci">
            <a className="regulation-link">Politykę Prywatności</a>
          </Link>
          . Wyrażam zgodę na otrzymywanie na podany adres e-mail informacji handlowych w rozumieniu
          ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.
        </span>
      </label>
      <div className={styles.wrapper}>
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
      </div>
    </form>
  );
};
