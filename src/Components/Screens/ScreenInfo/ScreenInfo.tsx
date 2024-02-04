import { FC } from "react";
import style from "./ScreenInfo.module.scss";

export const ScreenInfo: FC = () => {
  return (
    <section className={style.info}>
      <h1>
        СТРОЙКА НАЧИНАЕТСЯ С ФУНДАМЕНТА, А <strong>IT</strong> С ФУНДАМЕНТАЛЬНЫХ
        <strong> ТЕХНОЛОГИЙ</strong>
      </h1>
      <p>
        Цель программы — ознакомить студентов и участников сообщества РБПО с
        актуальными IT-технологиями, создаваемыми в России.
      </p>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.block_1}>
            <div className={style.number}>/01</div>
            <div className={style.content}>Цикл из 12 лекций</div>
          </div>
          <div className={style.block_2}>
            <div className={style.number}>/02</div>
            <div className={style.content}>Бесплатное участие</div>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.block_3}>
            <div className={style.number}>/03</div>
            <div className={style.content}>
              Спикеры — ведущие эксперты крупнейших IT-компаний
            </div>
          </div>
          <div className={style.block_4}>
            <div className={style.number}>/04</div>
            <div className={style.content}>
              Цикл лекций организован при поддержке ФСТЭК России
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
