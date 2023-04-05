import { useGlobalContext } from "@/context/context";
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
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>
            <BsRocketTakeoff size={30} />
          </span>
          <span className={styles.logoText}>CryptoGalaxy</span>
        </div>
        <button onClick={closeSidebar} className={styles.closeBtn}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          <li>
            <MdOutlineFeaturedPlayList />
            Features
          </li>
          <li>
            <MdTravelExplore />
            Explore
          </li>
          <li>
            <SiBlogger />
            Blog
          </li>
          <li>
            <BsWallet />
            Wallet
          </li>
        </ul>
      </div>
      <div className={styles.user}>
        <button className={styles.login}>Login</button>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </aside>
  );
};

export default Sidebar;
