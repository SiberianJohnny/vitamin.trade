import styles from "./supplementslistitem.module.scss";

const SupplementListItem = ({ props }) => {
  return (
    <>
      <li className={styles.listItem}>
        <img
          src={props.Picture}
          alt={props.GoodsCommercialName}
          className={styles.image}
        />
        <h5 className={styles.title}>{props.GoodsCommercialName}</h5>
        <p className={styles.description}>{props.CommercialDescription}</p>
        <p className={styles.price}>{props.CurrentPrices}</p>
        <button className={styles.button}>Добавить</button>
      </li>
    </>
  );
};

export default SupplementListItem;
