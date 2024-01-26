import { FC } from "react";
import style from "./Links.module.scss";
import IconTG from "./tg.svg";

export const Links: FC = () => {
  return (
    <nav className={style.navBar}>
      <a className={style.link} href="#">
        Спикеры
      </a>
      <a className={style.link} href="#">
        Программы
      </a>
      <a className={style.link} href="#">
        Контакты
      </a>
      <a href="#" className={style.link_tg}>
        <IconTG />
      </a>
    </nav>
  );
};
