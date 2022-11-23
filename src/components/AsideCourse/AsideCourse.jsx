import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editeCourseItem,
  removeCourseItem,
} from "../../store/reducers/MyCourseSlice";
import DosageSelect from "../DosageSelect/DosageSelect";
import FrequencySelect from "../FrequencySelect/FrequencySelect";
import NumberOfTimesSelect from "../NumberOfTimesSelect/NumberOfTimesSelect";
import ShortLiHeading from "../ShortLiHeading/ShortLiHeading";
import TimeSelect from "../TimeSelect/TimeSelect";
import styles from "./asidecourse.module.scss";

const AsideCourse = () => {
  const [showCourse, setShowCourse] = useState(false);

  const dispatch = useDispatch();

  const { myCourseItems } = useSelector((state) => state.myCourseReducer);

  const handleChange = (e, article) => {
    const target = e.target;
    const targetValue =
      target.type === "checkbox" ? target.checked : target.value;
    const targetKey = target.name;
    const targetArticle = article;

    const dataToChange = {
      key: targetKey,
      value: targetValue,
      article: targetArticle,
    };

    dispatch(editeCourseItem(dataToChange));
  };

  const openCourseHandler = () => {
    setShowCourse(!showCourse);
  };

  const handleDelete = (article) => {
    dispatch(removeCourseItem(article));
  };

  return (
    <aside
      className={`${styles.aside_course} ${
        showCourse ? styles.aside_open : ""
      }`}
    >
      <button className={styles.aside_course__btn} onClick={openCourseHandler}>
        {`< Мой курс приёма`}
      </button>
      {!myCourseItems.length > 0 ? (
        <p>Выберите биодобавку, чтобы собрать свой персональный курс</p>
      ) : (
        <>
          <ul className={styles.aside_course__list}>
            {!showCourse &&
              myCourseItems.map((courseItem) => (
                <li key={courseItem.article} style={{ marginBottom: "20px" }}>
                  <ShortLiHeading courseItem={courseItem} />
                </li>
              ))}
            {showCourse &&
              myCourseItems.map((courseItem) => (
                <li key={courseItem.article} className={styles.course_item}>
                  <header className={styles.course_item__header}>
                    <ShortLiHeading
                      courseItem={courseItem}
                      key={courseItem.article}
                    />
                    <div className={styles.course_item__header_text}>
                      {courseItem.frequencyData.numberOfTimes} приём:{" "}
                      {courseItem.frequencyData.time}{" "}
                      {courseItem.frequencyData.dosage} шт.
                    </div>
                    <button
                      className={styles.course_item__remove_btn}
                      onClick={() => handleDelete(courseItem.article)}
                    >
                      Remove item
                    </button>
                  </header>
                  <main className={styles.course_item__main}>
                    <FrequencySelect
                      frequencyData={courseItem.frequencyData}
                      handleChange={(e) => handleChange(e, courseItem.article)}
                    />
                    <NumberOfTimesSelect
                      frequencyData={courseItem.frequencyData}
                      handleChange={(e) => handleChange(e, courseItem.article)}
                    />
                    <TimeSelect
                      frequencyData={courseItem.frequencyData}
                      handleChange={(e) => handleChange(e, courseItem.article)}
                    />
                    <DosageSelect
                      frequencyData={courseItem.frequencyData}
                      handleChange={(e) => handleChange(e, courseItem.article)}
                    />
                  </main>
                </li>
              ))}
          </ul>
        </>
      )}
    </aside>
  );
};

export default AsideCourse;
