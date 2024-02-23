import { FC } from "react";
import style from "./MainScreen.module.scss";
import { MainButton } from "../../UI/MainButton";
import { MainBackground } from "./MainBackground/MainBackground";
import { getVars } from "@utils/URL/getVars";
import { setVars } from "@utils/URL/setVars";

export const MainScreen: FC = () => {
  const urlForms =
    typeof window.config?.URL_YA_FORM === "string"
      ? window.config?.URL_YA_FORM
      : "https://forms.yandex.ru/u/65ba63fbeb61460b91183250/";
  return (
    <MainBackground>
      <div id="main" className={style.screen}>
        <div className={style.mute} />
        <h1 className={style.main_header}>школа фундаментальных технологий</h1>
        <div className={style.container_secondary_head}>
          <h1 className={style.secondary_header}>
            разработки <strong>безопасного ПО</strong>
          </h1>
          <span>от ведущих экспертов индустрии</span>
        </div>
        <div className={style.footer}>
          <MainButton href={setVars(urlForms, getVars())} target="_blank">
            Регистрация на курс
          </MainButton>
          <div className={style.container_info}>
            <div className={style.info}>старт цикла лекций</div>
            <div className={style.date}>март 2024</div>
          </div>
        </div>
      </div>
    </MainBackground>
  );
};
