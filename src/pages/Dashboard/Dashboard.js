import React, { useCallback, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DashboardRouter from "./DashboardRouter";
import styles from "./Dashboard.module.scss";

import { AddTickerModal, Navbar } from "../../components";
import { fetchTickers as grabTickers } from "../../services/tickerService";

function Dashboard({ match }) {
  const { url } = match;
  const [tickers, setTickers] = useState([]);
  const [showNavBar, setShowNavBar] = useState(true);
  const [showAddTickerModal, setShowAddTickerModal] = useState(false);

  const fetchTickers = useCallback(() => {
    const tickers = grabTickers();
    setTickers(tickers);
  }, []);

  const onCloseNav = useCallback(() => {
    setShowNavBar(!showNavBar);
  }, [showNavBar, setShowNavBar]);

  const onClickAddTickerModal = useCallback(() => {
    setShowAddTickerModal(!showAddTickerModal);
  }, [showAddTickerModal]);

  useEffect(() => {
    fetchTickers();
  }, [fetchTickers]);

  return (
    <main className={styles.container}>
      {showAddTickerModal && (
        <AddTickerModal
          onClose={onClickAddTickerModal}
          refreshTickers={fetchTickers}
        />
      )}
      {showNavBar && (
        <Navbar
          navData={tickers}
          path={url}
          onCloseNav={onCloseNav}
          onClickAddTickerModal={onClickAddTickerModal}
        />
      )}
      {!showNavBar && (
        <div className={styles.hamburger}>
          <GiHamburgerMenu alt="menu" onClick={onCloseNav} size="30px" />
        </div>
      )}
      <div className={styles.view}>
        <DashboardRouter />
      </div>
    </main>
  );
}

export default Dashboard;
