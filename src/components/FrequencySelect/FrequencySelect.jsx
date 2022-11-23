import styles from "./frequencyselect.module.scss";

const FrequencySelect = ({ frequencyData, handleChange }) => {
  return (
    <div className={styles.select__wrapper}>
      <label htmlFor="frequency-select" className={styles.select__label}>
        Как принимать?
      </label>
      <select
        name="frequency"
        id="frequency-select"
        value={frequencyData.frequency}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="daily">Ежедневно</option>
        <option value="weekly">Еженедельно</option>
        <option value="monthly">Ежемесячно</option>
      </select>
    </div>
  );
};

export default FrequencySelect;
