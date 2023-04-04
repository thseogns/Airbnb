/** @format */

import CheckIn from "./navgation/CheckIn";
import InfoNav from "./navgation/InfoNav";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.underLine}>
      <div className={styles.header}>
        <div className={styles.icon_cover}>
          <img src="img/airbnb_icon.png" alt="icon" className={styles.icon} />
        </div>
        <CheckIn />
        <InfoNav />
      </div>
    </div>
  );
}

export default Header;
