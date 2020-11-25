import styles from './newsletterForm.module.scss';

const NewsletterForm = () => {
  return (
    <form className={styles.wrapper}>
      <label htmlFor="email" className="visually-hidden">
        Twój adres email
      </label>
      <input id="email" placeholder="Adres email" className={styles.input} />
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <span>Subskrybuj</span>
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
