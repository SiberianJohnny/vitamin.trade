import styles from "./asidecourse.module.scss";
const AsideCourse = () => {
  return (
    <aside className={styles.asideCourse}>
      <h1> Мой курс приёма</h1>
      <p>Выберите биодобавку, чтобы собрать свой персональный курс</p>
    </aside>
  );
};

export default AsideCourse;
