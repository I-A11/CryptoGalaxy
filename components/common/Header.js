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
/*  <div className={styles.navCenter}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>
            <span className={styles.logoIcon}>
              <BsRocketTakeoff fill='#ea6b3d' size={30} />
            </span>
            CryptoGalaxy
          </span>
          <GiHamburgerMenu className={styles.bars} fill='#fff' size={30} />
        </div>
        <div className={styles.linksContainer}>
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
      </div> */
