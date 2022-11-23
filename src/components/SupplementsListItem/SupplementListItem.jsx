import { useSelector } from "react-redux";
import useModal from "../../hooks/useModal";
import AddSupplementModal from "../AddSupplementModal/AddSupplementModal";
import styles from "./supplementslistitem.module.scss";

const SupplementListItem = ({ props }) => {
  const [isShowModal, toggleModal] = useModal();

  const { myCourseItems } = useSelector((state) => state.myCourseReducer);

  return (
    <li className={styles.list__item}>
      <img
        src={props.Picture}
        alt={props.GoodsCommercialName}
        className={styles.image}
      />
      <h5 className={styles.title}>{props.GoodsCommercialName}</h5>
      <p className={styles.description}>{props.CommercialDescription}</p>
      <p className={styles.price}>{props.CurrentPrices}</p>
      <button
        className={`${styles.button} ${
          myCourseItems.map((item) => item.article).includes(props.Article)
            ? styles.item__added
            : ""
        }`}
        onClick={toggleModal}
      >
        {myCourseItems.map((item) => item.article).includes(props.Article)
          ? "Добавлено"
          : "Добавить"}
      </button>
      <AddSupplementModal
        show={isShowModal}
        onCloseModal={toggleModal}
        image={props.Picture}
        title={props.GoodsCommercialName}
        description={props.CommercialDescription}
        article={props.Article}
      />
    </li>
  );
};

export default SupplementListItem;
