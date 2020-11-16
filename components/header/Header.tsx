import styles from './header.module.scss';
import GitHubIcon from '../../public/icons/github.svg';
import LinkedinIcon from '../../public/icons/linkedin.svg';
import TwitterIcon from '../../public/icons/twitter.svg';

const Header = () => {
  return (
    <>
      <div className={styles.backgroundGradient}></div>
      <section className={styles.wrapper}>
        <header>
          <img src="/images/logo.png" alt="" />
          <ul>
            <li>
              <a href="">Strona główna</a>
            </li>
            <li>
              <a href="">Artykuły</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">O mnie</a>
            </li>
          </ul>
        </header>
        <div className="main">
          <div className="headings">
            <h1>Cześć, tu Olaf 👋</h1>
            <div className="info">
              <p>
                Witaj na blogu! Piszę głównie o tematach związanych z frontendem, mam nadzieję, że
                znajdziesz tutaj coś dla siebie.
              </p>
              <form>
                <input placeholder="Adres email" />
                <div className="buttonWrapper">
                  <button>
                    <span>Subskrybuj</span>
                  </button>
                </div>
              </form>
              <div className="icons">
                <GitHubIcon />
                <LinkedinIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
          <img className="phone" src="/images/phone.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Header;
