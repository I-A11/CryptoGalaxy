import Image from "next/image";
import Logo from "@/assets/logos/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsRocketTakeoff } from "react-icons/bs";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>
              <BsRocketTakeoff size={30} />
            </span>
            <span className={styles.logoText}>CryptoGalaxy</span>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li>Features</li>
            <li>Explore</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
        <div className={styles.user}>
          <button className={styles.login}>Login</button>
          <button className={styles.login}>Sign Up</button>
          <button className={styles.navToggle}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
