import styles from './newsletterForm.module.scss';

const NewsletterForm = () => {
  return (
    <form className={styles.wrapper}>
      <input placeholder="Adres email" className={styles.input} />
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <span>Subskrybuj</span>
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
