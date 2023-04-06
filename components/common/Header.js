import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logos/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsRocketTakeoff } from "react-icons/bs";
import styles from "./Header.module.css";
import { useGlobalContext } from "@/context/context";

const Header = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link className={styles.logo} href='/'>
            <span className={styles.logoIcon}>
              <BsRocketTakeoff size={30} />
            </span>
            <span className={styles.logoText}>CryptoGalaxy</span>
          </Link>
        </div>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li>
              <Link className={styles.link} href='/features'>
                Features
              </Link>
            </li>
            <li>
              <Link className={styles.link} href='/explore'>
                Explore
              </Link>
            </li>
            <li>
              <Link className={styles.link} href='/blog'>
                Blog
              </Link>
            </li>
            <li>
              <Link className={styles.link} href='/wallet'>
                Wallet
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.user}>
          <button className={styles.login}>Login</button>
          <button className={styles.signUp}>Sign Up</button>
          <button onClick={openSidebar} className={styles.navToggle}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
