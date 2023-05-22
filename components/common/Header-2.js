import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { SiBlogger } from "react-icons/si";
import { BsWallet } from "react-icons/bs";
import styles from "./Header-2.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const openMobileNav = () => {
    setOpen(true);
  };
  const closeMobileNav = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className={`${styles.header} `}>
      <div className={open ? `${styles.overlay}` : ""}></div>
      <nav className={styles.navbar}>
        <div className={`section ${styles.navSection} `}>
          <Link className={styles.logo} href="/">
            <span className={styles.logoIcon}>
              <BsRocketTakeoff size={30} />
            </span>
            <span className={styles.logoText}>CryptoGalaxy</span>
          </Link>
          <div className={styles.navContainer}>
            <div className={styles.linksContainer}>
              <Link className={styles.link} href="/">
                Home
              </Link>
              <Link className={styles.link} href="/explore">
                Explore
              </Link>
              <Link className={styles.link} href="/wallet">
                Wallet
              </Link>
            </div>
            <div className={styles.user}>
              <button className={styles.login}>Login</button>
              <button className={styles.signUp}>Sign Up</button>
              <button onClick={openMobileNav} className={styles.navToggle}>
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile navbar */}
      <div
        ref={menuRef}
        className={
          open
            ? `${styles.mobileNavSection} ${styles.showMobileNavSection}`
            : `${styles.mobileNavSection}`
        }
      >
        <div className={styles.mobileNavContainer}>
          <nav>
            <div>
              <div className={styles.mobileLogoContainer}>
                <Link className={styles.logo} href="/">
                  <span className={styles.logoIcon}>
                    <BsRocketTakeoff size={30} />
                  </span>
                  <span className={styles.logoText}>CryptoGalaxy</span>
                </Link>
                <button
                  onClick={closeMobileNav}
                  className={styles.mobileNavClose}
                >
                  <FaTimes />
                </button>
              </div>
              <div>
                <div className={styles.MobileLinksContainer}>
                  <Link
                    onClick={closeMobileNav}
                    className={styles.MobileLink}
                    href="/"
                  >
                    <MdOutlineFeaturedPlayList />
                    Home
                  </Link>

                  <Link
                    onClick={closeMobileNav}
                    className={styles.MobileLink}
                    href="/explore"
                  >
                    <MdTravelExplore />
                    Explore
                  </Link>

                  {/* <Link
                    onClick={closeMobileNav}
                    className={styles.MobileLink}
                    href="/blog"
                  >
                    <SiBlogger />
                    Blog
                  </Link> */}

                  <Link
                    onClick={closeMobileNav}
                    className={styles.MobileLink}
                    href="/wallet"
                  >
                    <BsWallet />
                    Wallet
                  </Link>
                </div>
                <div className={styles.MobileUser}>
                  <button className={styles.MobileLogin}>Login</button>
                  <button className={styles.MobileSignUp}>Sign Up</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
