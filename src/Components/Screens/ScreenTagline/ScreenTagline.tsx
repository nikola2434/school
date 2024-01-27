import { FC } from "react";
import style from "./ScreenTagline.module.scss";

export const ScreenTagline: FC = () => {
  return (
    <div className={style.tagline}>
      <div className={style.circle}></div>
      <div className={style.container}>
        <h1>
          ВСЁ <strong>СИСТЕМНОЕ ПО</strong>, КОТОРОЕ НАС ОКРУЖАЕТ, ПИШЕТСЯ
          ГОДАМИ И ЭТО НЕ ПРОСТО ТАК
        </h1>
        <p>
          Страна нуждается в высококвалифицированных инженерах — профессионалах
          своего дела. Качественное сервисное обслуживание стало камнем
          преткновения здравоохранения <br /> в последние годы. Мы предлагаем
          вывести сервис на новый уровень.
        </p>
      </div>
    </div>
  );
};
