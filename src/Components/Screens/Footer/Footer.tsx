import { FC } from "react";
import style from "./Footer.module.scss";
import { MainButton } from "../../UI/MainButton";

export const Footer: FC = () => {
  return (
    <div id="contacts" className={style.footer}>
      <div className={style.bg_container}>
        <div className={style.circle_first}></div>
        <div className={style.circle_first}></div>
        <div className={style.circle_first}>
          <div className={style.line}></div>
        </div>
      </div>
      <h1>контакты</h1>
      <div className={style.container}>
        <div className={style.link}>
          <h6>Чат-бот мероприятия</h6>
          <a href="https://t.me/RBPO_bot/?start=start" target="_blank">
            t.me/RBPO_bot
          </a>
        </div>
        <div className={style.link}>
          <h6>МГТУ им. Н.Э. Баумана</h6>
          <a href="https://t.me/bmstu1830" target="_blank">
            t.me/bmstu1830
          </a>
        </div>
        <MainButton
          href="https://forms.yandex.ru/u/65ba63fbeb61460b91183250/"
          target="_blank"
        >
          Регистрация на курс
        </MainButton>
      </div>
    </div>
  );
};
