import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplements } from "../../store/reducers/ActionCreators";
import { sortByName, sortByPrice } from "../../store/reducers/SupplementsSlice";
import SupplementListItem from "../SupplementsListItem/SupplementListItem";
import styles from "./supplementslist.module.scss";

const SupplementsList = () => {
  const dispatch = useDispatch();

  const { supplements, isLoading, error } = useSelector(
    (state) => state.supplementsReducer
  );

  const sortByNameHandler = () => {
    dispatch(sortByName());
  };

  const sortByPriceHandler = () => {
    dispatch(sortByPrice());
  };

  return (
    <div className={styles.list__wrapper}>
      <div className={styles.list__header}>
        <h5 className={styles.list__heading} onClick={sortByNameHandler}>
          Биодобавка
        </h5>
        <h5 className={styles.list__heading}>Описание</h5>
        <h5 className={styles.list__heading} onClick={sortByPriceHandler}>
          Цена за шт. ₽
        </h5>
      </div>
      <ul className={styles.supplements_list}>
        {supplements?.map((item) => (
          <SupplementListItem props={item} key={item.Article} />
        ))}
      </ul>
    </div>
  );
};

export default SupplementsList;
