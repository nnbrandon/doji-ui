import { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";

import { addTicker } from "../../services/tickerService";
import { getMetaThemeColor } from "../../theme";
import themeContext from "../../themeContext";
import styles from "./AddTickerModal.module.scss";

function AddTickerModal({ onClose, refreshTickers }) {
  const { themeMode } = useContext(themeContext);
  const [ticker, setTicker] = useState("");
  const [error, setError] = useState("");

  function onChangeTicker(event) {
    setTicker(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!ticker) {
      setError("Enter a ticker symbol");
    } else {
      if (addTicker(ticker)) {
        setTicker(ticker);
        refreshTickers();
        onClose();
      } else {
        setError(`Unable to add ticker symbol ${ticker}`);
      }
    }
  }

  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="Add Ticker"
      aria-describedby="Add a ticker"
    >
      <form
        className={styles.layout}
        style={{ backgroundColor: getMetaThemeColor(themeMode) }}
        onSubmit={handleSubmit}
      >
        <FormControl className={styles.controlLayout} fullWidth>
          <span className={styles.closeButton}>
            <CloseIcon alt="Close" onClick={onClose} fontSize="medium" />
          </span>
          <div className={styles.subredditInput}>
            <TextField
              id="ticker-symbol"
              label="Ticker Symbol"
              variant="outlined"
              value={ticker}
              fullWidth
              onChange={onChangeTicker}
            />
          </div>
          {error}
          <div className={styles.addButton}>
            <Button type="submit" variant="contained" fullWidth>
              Add
            </Button>
          </div>
        </FormControl>
      </form>
    </Modal>
  );
}

export default AddTickerModal;
