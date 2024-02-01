import { FC } from "react";
import style from "./Links.module.scss";
import IconTG from "./Tg.svg";

export const Links: FC = () => {
  return (
    <nav className={style.navBar}>
      <a className={style.link} href="#speakers">
        Спикеры
      </a>
      <a className={style.link} href="#programs">
        Программы
      </a>
      <a className={style.link} href="#contacts">
        Контакты
      </a>
      <a
        href="https://t.me/RBPO_bot/?start=start"
        target="_blank"
        className={style.link_tg}
      >
        <IconTG />
      </a>
    </nav>
  );
};
