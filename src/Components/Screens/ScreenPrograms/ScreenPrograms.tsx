import { FC } from "react";
import style from "./ScreenPrograms.module.scss";
import { Collapse } from "../../UI/Collapse/Collapse";

export const ScreenPrograms: FC = () => {
  return (
    <div id="programs" className={style.screen}>
      <h1>программа</h1>
      <div>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>март, 2-ая неделя</h5>
              <h2 className={style.title}>Операционные системы</h2>
            </>
          }
          open={false}
          typeFigure={1}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «Базальт СПО» / Евгений Синельников
              </h6>
              <h4>
                Ядро операционной системы «Linux»
                <strong> / 18:00 — 18:30</strong>
              </h4>
              <h6 className={style.speaker}>
                АО «Лаборатория Касперского» / Андрей Духвалов
              </h6>
              <h4>
                Микроядерная операционная система KasperskyOS / 18:00 — 18:30
                <strong> / 18:00 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>март, 4-ая неделя</h5>
              <h2 className={style.title}>Система управления базами данных</h2>
            </>
          }
          open={false}
          typeFigure={2}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «Базальт СПО» / Евгений Синельников
              </h6>
              <h4>
                Ядро операционной системы «Linux»
                <strong> / 18:00 — 18:30</strong>
              </h4>
              <h6 className={style.speaker}>
                АО «Лаборатория Касперского» / Андрей Духвалов
              </h6>
              <h4>
                Микроядерная операционная система KasperskyOS / 18:00 — 18:30
                <strong> / 18:00 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>апрель, 2-ая неделя</h5>
              <h2 className={style.title}>Виртуализация и контейнеризация</h2>
            </>
          }
          open={false}
          typeFigure={3}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «Базальт СПО» / Евгений Синельников
              </h6>
              <h4>
                Ядро операционной системы «Linux»
                <strong> / 18:00 — 18:30</strong>
              </h4>
              <h6 className={style.speaker}>
                АО «Лаборатория Касперского» / Андрей Духвалов
              </h6>
              <h4>
                Микроядерная операционная система KasperskyOS / 18:00 — 18:30
                <strong> / 18:00 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>апрель, 4-ая неделя</h5>
              <h2 className={style.title}>Интерпретаторы</h2>
            </>
          }
          open={false}
          typeFigure={4}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «Базальт СПО» / Евгений Синельников
              </h6>
              <h4>
                Ядро операционной системы «Linux»
                <strong> / 18:00 — 18:30</strong>
              </h4>
              <h6 className={style.speaker}>
                АО «Лаборатория Касперского» / Андрей Духвалов
              </h6>
              <h4>
                Микроядерная операционная система KasperskyOS / 18:00 — 18:30
                <strong> / 18:00 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>май, 2-ая неделя</h5>
              <h2 className={style.title}>
                Разработка безопасного программного обеспечения
              </h2>
            </>
          }
          open={false}
          typeFigure={5}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «Базальт СПО» / Евгений Синельников
              </h6>
              <h4>
                Ядро операционной системы «Linux»
                <strong> / 18:00 — 18:30</strong>
              </h4>
              <h6 className={style.speaker}>
                АО «Лаборатория Касперского» / Андрей Духвалов
              </h6>
              <h4>
                Микроядерная операционная система KasperskyOS / 18:00 — 18:30
                <strong> / 18:00 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>май, 4-ая неделя</h5>
              <h2 className={style.title}>
                Композиционный и компонентный анализ
              </h2>
            </>
          }
          open={false}
          typeFigure={6}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «Базальт СПО» / Евгений Синельников
              </h6>
              <h4>
                Ядро операционной системы «Linux»
                <strong> / 18:00 — 18:30</strong>
              </h4>
              <h6 className={style.speaker}>
                АО «Лаборатория Касперского» / Андрей Духвалов
              </h6>
              <h4>
                Микроядерная операционная система KasperskyOS / 18:00 — 18:30
                <strong> / 18:00 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
      </div>
    </div>
  );
};
