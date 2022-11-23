import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { addCourseItem } from "../../store/reducers/MyCourseSlice";
import styles from "./addsupplementmodal.module.scss";
import FrequencySelect from "../FrequencySelect/FrequencySelect";
import NumberOfTimesSelect from "../NumberOfTimesSelect/NumberOfTimesSelect";
import TimeSelect from "../TimeSelect/TimeSelect";
import DosageSelect from "../DosageSelect/DosageSelect";
import SupplementFormHeader from "../SupplementFormHeader/SupplementFormHeader";

const AddSupplementModal = ({
  show,
  onCloseModal,
  title,
  image,
  description,
  article,
}) => {
  const [frequencyData, setFrequencyData] = useState({
    frequency: "daily",
    numberOfTimes: "1",
    time: "11:00",
    dosage: "1",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFrequencyData({ ...frequencyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCourseItem({ frequencyData, title, image, description, article })
    );
  };

  useEffect(() => {
    if (show) {
      window.setTimeout(() => {
        document.querySelector("#root").setAttribute("inert", "true");
      }, 10);
    }

    return () => {
      document.querySelector("#root").removeAttribute("inert");
    };
  }, [show, onCloseModal]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal__window}>
      <div className={styles.modal__content}>
        <header className={styles.modal__header}>
          <SupplementFormHeader
            frequencyData={frequencyData}
            image={image}
            title={title}
          />
        </header>
        <main className={styles.modal__main}>
          <form className={styles.modal__form}>
            <FrequencySelect
              frequencyData={frequencyData}
              handleChange={handleChange}
            />
            <NumberOfTimesSelect
              frequencyData={frequencyData}
              handleChange={handleChange}
            />
            <TimeSelect
              frequencyData={frequencyData}
              handleChange={handleChange}
            />
            <DosageSelect
              frequencyData={frequencyData}
              handleChange={handleChange}
            />
            <button className={styles.modal__close_btn} onClick={onCloseModal}>
              X
            </button>
          </form>
        </main>
        <footer className={styles.modal__footer}>
          <input
            type="submit"
            value="Добавить в курс"
            className={styles.modal__submit_btn}
            onClick={handleSubmit}
          />
        </footer>
      </div>
    </div>,
    document.body
  );
};

export default AddSupplementModal;
