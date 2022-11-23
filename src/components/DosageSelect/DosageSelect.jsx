import styles from "./dosageselect.module.scss";

const DosageSelect = ({ frequencyData, handleChange }) => {
  return (
    <div className={styles.select__wrapper}>
      <label htmlFor="dosage-select" className={styles.select__label}>
        Дозировка
      </label>
      <select
        name="dosage"
        id="dosage-select"
        value={frequencyData.dosage}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="1">1 таблетка</option>
        <option value="2">2 таблетки</option>
        <option value="3">3 таблетки</option>
      </select>
    </div>
  );
};

export default DosageSelect;
