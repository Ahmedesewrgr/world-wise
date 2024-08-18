import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import Appnav from "./Appnav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Appnav />

      <Outlet/>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy: Copyright
          {new Date().getFullYear()}
          by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
