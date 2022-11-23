import styles from "./timeselect.module.scss";

const TimeSelect = ({ frequencyData, handleChange }) => {
  return (
    <div className={styles.select__wrapper}>
      <label htmlFor="time-select" className={styles.select__label}>
        Время
      </label>
      <input
        type="time"
        id="time"
        name="time"
        value={frequencyData.time}
        onChange={handleChange}
        className={styles.select}
      />
    </div>
  );
};

export default TimeSelect;
