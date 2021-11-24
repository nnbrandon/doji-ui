import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

import { addTicker } from "../../services/tickerService";
import styles from "./AddTickerModal.module.scss";
import Button from "../../shared/Button/Button";
import TextInput from "../../shared/TextInput/TextInput";
import Modal from "../../shared/Modal/Modal";

function AddTickerModal({ onClose, refreshTickers }) {
  const [ticker, setTicker] = useState("");
  const [error, setError] = useState("");

  function onChangeTicker(id, value) {
    setTicker(value);
  }

  function onClick(event) {
    event.preventDefault();

    if (!ticker) {
      setError("Enter a ticker symbol");
    } else {
      addTicker(ticker);
      refreshTickers();
      onClose();
    }
  }

  return (
    <Modal onClose={onClose} size="small">
      <form className={styles.layout}>
        <span className={styles.closeButton}>
          <IoIosClose alt="Close" onClick={onClose} size="40px" />
        </span>
        <div className={styles.subredditInput}>
          <TextInput
            label="Ticker Symbol"
            error={error}
            onChange={onChangeTicker}
          />
        </div>
        <div className={styles.addButton}>
          <Button type="submit" label="Add" onClickEvent={onClick} />
        </div>
      </form>
    </Modal>
  );
}

export default AddTickerModal;
