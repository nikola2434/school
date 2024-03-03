import { FC } from "react";
import style from "./Links.module.scss";
import IconTG from "./Tg.svg";

export const Links: FC<{ secondPage: boolean }> = ({ secondPage }) => {
  const urlTgBor =
    typeof window.config?.URL_TG_BOT === "string"
      ? window.config?.URL_TG_BOT
      : "https://t.me/RBPO_bot/?start=start";
  return secondPage ? (
    <div className={style.navBar_empty}></div>
  ) : (
    <nav className={style.navBar}>
      <a className={style.link} href="#speakers">
        Спикеры
      </a>
      <a className={style.link} href={"#programs"}>
        Программы
      </a>
      <a className={style.link} href={"#contacts"}>
        Контакты
      </a>
      <a href={urlTgBor} target="_blank" className={style.link_tg}>
        <IconTG />
      </a>
    </nav>
  );
};
