import styles from "./shortliheading.module.scss";

const ShortLiHeading = ({ courseItem, div }) => {
  return (
    <div className={styles.list_item}>
      <img
        src={courseItem.image}
        alt={courseItem.title}
        className={styles.list_item__image}
      />
      <p className={styles.list_item__description}>{courseItem.title}</p>
    </div>
  );
};

export default ShortLiHeading;
