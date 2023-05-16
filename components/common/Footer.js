import Link from "next/link";
import styles from "./Footer.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsRocketTakeoff } from "react-icons/bs";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.footer}>
        <div className="section">
          <div className={styles.footerContainer}>
            <div>
              <div className={styles.footerHeader}>
                <Link className={styles.logo} href="/">
                  <span className={styles.logoIcon}>
                    <BsRocketTakeoff size={30} />
                  </span>
                  <span className={styles.logoText}>CryptoGalaxy</span>
                </Link>
              </div>
              <div className={styles.text}>© {date} CryptoGalaxy</div>
            </div>
            <div className={styles.footerCol}>
              <h3>Company</h3>
              <p>About</p>
              <p>Careers</p>
              <p>Investors</p>
            </div>
            <div className={styles.footerSecCol}>
              <h3>Learn</h3>
              <p>Newsletter</p>
              <p>Wallet</p>
            </div>
            <div className={styles.footerThirdCol}>
              <h3>Support</h3>
              <p>Help Center</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
