import styles from "./supplementformheader.module.scss";

const SupplementFormHeader = ({ frequencyData, image, title }) => {
  return (
    <>
      <div className={styles.left_part}>
        <img src={image} alt={title} className={styles.image} />
        <h5 className={styles.left_part__text}>{title}</h5>
      </div>
      <div className={styles.right_part}>
        {frequencyData.numberOfTimes} приём: {frequencyData.time}{" "}
        {frequencyData.dosage} шт.
      </div>
    </>
  );
};

export default SupplementFormHeader;
