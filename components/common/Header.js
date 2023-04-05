import Image from "next/image";
import Logo from "@/assets/logos/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsRocketTakeoff } from "react-icons/bs";
import styles from "./Header.module.css";
import { useGlobalContext } from "@/context/context";

const Header = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
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
            <li>Wallet</li>
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
