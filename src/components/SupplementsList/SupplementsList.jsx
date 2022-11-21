import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplements } from "../../store/reducers/ActionCreators";
import SupplementListItem from "../SupplementsListItem/SupplementListItem";
import styles from "./supplementslist.module.scss";

const SupplementsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSupplements);
  }, []);

  const { supplements, isLoading, error } = useSelector(
    (state) => state.supplementsReducer
  );

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : null}
      {error ? <h1>{error}</h1> : null}
      <ul className={styles.supplementsList}>
        <li className={styles.column}>
          <h5 className={styles.columnHeading}>Биодобавка</h5>
        </li>
        <li className={styles.column}>
          <h5 className={styles.columnHeading}>Описание</h5>
        </li>
        <li className={styles.column}>
          <h5 className={styles.columnHeading}>Цена за шт ₽</h5>
        </li>
        {supplements?.map((item) => (
          <SupplementListItem props={item} key={item.Article} />
        ))}
      </ul>
    </>
  );
};

export default SupplementsList;
