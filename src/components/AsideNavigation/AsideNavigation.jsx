import styles from "./asidenavigation.module.scss";
import logo from "../../assets/SGLogo.svg";

const navLinks = [
  {
    link: "#",
    name: "Каталог",
    submenu: [
      {
        link: "#",
        name: "Anti-age",
      },
      {
        link: "#",
        name: "Антистресс",
      },
      {
        link: "#",
        name: "Антиоксиданты",
      },
      {
        link: "#",
        name: "Женское здоровье",
      },
      {
        link: "#",
        name: "Здоровый сон",
      },
      {
        link: "#",
        name: "Кожа, волосы, ногти",
      },
      {
        link: "#",
        name: "Крепкий иммунитет",
      },
      {
        link: "#",
        name: "Мужское здоровье",
      },
      {
        link: "#",
        name: "Омега, жирные кислоты",
      },
      {
        link: "#",
        name: "Память и внимание",
      },
      {
        link: "#",
        name: "Похудение и стройность",
      },
      {
        link: "#",
        name: "Спокойствие и фокус",
      },
      {
        link: "#",
        name: "Суставы и связки",
      },
    ],
  },
  {
    link: "#",
    name: "Нутрицилоги",
  },
  {
    link: "#",
    name: "Документы",
    submenu: ["item1", "item2"],
  },
];

const AsideNavigation = () => {
  return (
    <aside className={styles.asideNavigation}>
      <div className={styles.navHeader}>
        <img src={logo} alt="Supplement Group" />
        <button></button>
      </div>
      <nav>
        <ul>
          {navLinks.map((linkItem) => (
            <>
              <li key={linkItem.name} className={styles.linkItem}>
                <a href={linkItem.link} className={styles.link}>
                  {linkItem.name}
                </a>
              </li>
              {linkItem.submenu &&
                linkItem.submenu?.map((sublinkItem) => (
                  <li key={sublinkItem.name} className={styles.sublinkItem}>
                    <a href={sublinkItem.link} className={styles.sublink}>
                      {sublinkItem.name}
                    </a>
                  </li>
                ))}
            </>
          ))}
        </ul>
      </nav>
      <a href="#" className={styles.authBtn}>
        Войти
      </a>
    </aside>
  );
};

export default AsideNavigation;
