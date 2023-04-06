import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { SiBlogger } from "react-icons/si";
import { BsWallet } from "react-icons/bs";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={isSidebarOpen ? `${styles.overlay}` : ""}>
      <aside
        className={
          isSidebarOpen
            ? `${styles.sidebar} ${styles.showSidebar}`
            : `${styles.sidebar}`
        }
      >
        <div className={styles.sidebarHeader}>
          <Link className={styles.logo} href='/'>
            <span className={styles.logoIcon}>
              <BsRocketTakeoff size={30} />
            </span>
            <span className={styles.logoText}>CryptoGalaxy</span>
          </Link>
          <button onClick={closeSidebar} className={styles.closeBtn}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li>
              <Link className={styles.link} href='/features'>
                <MdOutlineFeaturedPlayList />
                Features
              </Link>
            </li>
            <li>
              <Link className={styles.link} href='/explore'>
                <MdTravelExplore />
                Explore
              </Link>
            </li>
            <li>
              <Link className={styles.link} href='/blog'>
                <SiBlogger />
                Blog
              </Link>
            </li>
            <li>
              <Link className={styles.link} href='/wallet'>
                <BsWallet />
                Wallet
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.user}>
          <button className={styles.login}>Login</button>
          <button className={styles.signUp}>Sign Up</button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
