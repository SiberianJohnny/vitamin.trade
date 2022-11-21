import AsideNavigation from "../AsideNavigation/AsideNavigation";
import SupplementsList from "../SupplementsList/SupplementsList";
import AsideCourse from "../AsideCourse/AsideCourse";
import styles from "./mainpage.module.scss";

const MainPage = () => {
  return (
    <main>
      <AsideNavigation />
      <SupplementsList />
      <AsideCourse />
    </main>
  );
};

export default MainPage;
