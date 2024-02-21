import { FC } from "react";
import style from "./MainScreen.module.scss";
import { MainButton } from "../../UI/MainButton";
import { MainBackground } from "./MainBackground/MainBackground";
import { getVars } from "@utils/URL/getVars";

export const MainScreen: FC = () => {
  const vars = getVars();
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
          <MainButton
            href={
              vars.from === "kaspersky"
                ? "https://forms.yandex.ru/u/65ba63fbeb61460b91183250/?utm_source=kaspersky"
                : "https://forms.yandex.ru/u/65ba63fbeb61460b91183250/"
            }
            target="_blank"
          >
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
