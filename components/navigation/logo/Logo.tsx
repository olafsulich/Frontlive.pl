import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img src="/images/logo.png" alt="" />
        <span className="visually-hidden">Frontlive.pl</span>
      </a>
    </Link>
  );
};

export default Logo;
