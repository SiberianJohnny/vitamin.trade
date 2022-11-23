import styles from "./numberoftimes.module.scss";

const NumberOfTimesSelect = ({ frequencyData, handleChange }) => {
  return (
    <div className={styles.select__wrapper}>
      <label htmlFor="numberOfTimes-select" className={styles.select__label}>
        Сколько раз в день?
      </label>
      <select
        name="numberOfTimes"
        id="numberOfTimes-select"
        value={frequencyData.numberOfTimes}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};

export default NumberOfTimesSelect;
