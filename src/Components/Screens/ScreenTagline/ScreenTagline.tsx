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
        В МГТУ им. Н.Э. Баумана в период с марта по май состоится уникальный цикл лекций от российских IT компаний - лидеров своих направлений, посвященный фундаментальным информационным технологиям, их развитию в России и в мире.
        </p>
      </div>
    </div>
  );
};
