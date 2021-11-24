import React from "react";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

import styles from "./Navbar.module.scss";

import Button from "../../shared/Button/Button";

function Navbar({ path, navData, onCloseNav, onClickAddTickerModal }) {
  console.log(path);
  const renderNavData = navData.map((data, index) => {
    let selectedStyle;
    if (path === data.path) {
      selectedStyle = styles.selected;
    }
    return (
      <li key={index}>
        <Link className={selectedStyle} to={data.path}>
          {data.text}
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.sidebar}>
      <span>
        <IoIosClose alt="Close" onClick={onCloseNav} size="50px" />
      </span>
      <nav className={styles.nav}>
        <li key="Home">
          <Link className={path === "/" ? styles.selected : ""} to="/">
            Home
          </Link>
        </li>
        <ul>{renderNavData}</ul>
      </nav>
      <div className={styles.buttons}>
        <span className={styles.buttonLayout}>
          <Button onClickEvent={onClickAddTickerModal} label="Add Ticker" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
