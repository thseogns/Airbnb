/** @format */

import CheckIn from "./navgation/CheckIn";
import InfoNav from "./navgation/InfoNav";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.underLine}>
      <div className={styles.header}>
        <div>에어비앤비</div>
        <CheckIn />
        <InfoNav />
      </div>
    </div>
  );
}

export default Header;
