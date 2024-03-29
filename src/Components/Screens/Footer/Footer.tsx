import { FC } from "react";
import style from "./Footer.module.scss";
import { MainButton } from "../../UI/MainButton";
import { getVars } from "@utils/URL/getVars";
import { setVars } from "@utils/URL/setVars";

export const Footer: FC = () => {
  const urlTgBor =
    typeof window.config?.URL_TG_BOT === "string"
      ? window.config?.URL_TG_BOT
      : "https://t.me/RBPO_bot/?start=start";

  const urlForms =
    typeof window.config?.URL_YA_FORM === "string"
      ? window.config?.URL_YA_FORM
      : "https://forms.yandex.ru/u/65ba63fbeb61460b91183250/";
  return (
    <footer id="contacts" className={style.footer}>
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
          <div>Чат-бот мероприятия</div>
          <a href={urlTgBor} target="_blank">
            t.me/RBPO_bot
          </a>
        </div>
        <div className={style.link}>
          <div>Обратная связь</div>
          {/* <a href="https://t.me/bmstu1830" target="_blank">
            t.me/bmstu1830
          </a> */}
          <a href="mailto:sdl-school@bmstu.ru">sdl-school@bmstu.ru</a>
        </div>
        <MainButton href={setVars(urlForms, getVars())} target="_blank">
          Регистрация на курс
        </MainButton>
      </div>
    </footer>
  );
};
