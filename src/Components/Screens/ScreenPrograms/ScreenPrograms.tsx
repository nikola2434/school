import { FC } from "react";
import style from "./ScreenPrograms.module.scss";
import { Collapse } from "../../UI/Collapse/Collapse";

export const ScreenPrograms: FC = () => {
  return (
    <section id="programs" className={style.screen}>
      <h1>программа</h1>
      <div>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>6 марта</h5>
              <h2 className={style.title}>Операционные системы</h2>
            </>
          }
          open={false}
          typeFigure={1}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «Базальт СПО» / Георгий Курячий
              </h6>
              <h4>
                Операционные системы на основе ядра Linux: сообщество,
                дистрибутив, жизненный цикл
                <strong> / 12:00 — 15:00</strong>
              </h4>
              <h6 className={style.speaker}>
                АО «Лаборатория Касперского» / Владимир Малыгин
              </h6>
              <h4>
                Уточняется
                <strong> / 15:30 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>20 марта</h5>
              <h2 className={style.title}>Система управления базами данных</h2>
            </>
          }
          open={false}
          typeFigure={2}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «Постгрес Профессиональный» / «Postgres Professional» / Иван
                Панченко
              </h6>
              <h4>
                Уточняется
                <strong> / 12:00 - 15:00 </strong>
              </h4>
              <h6 className={style.speaker}>ООО «Ред Софт» / Роман Симаков</h6>
              <h4>
                Уточняется
                <strong> / 15:30 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>9 апреля</h5>
              <h2 className={style.title}>Виртуализация и контейнеризация</h2>
            </>
          }
          open={false}
          typeFigure={3}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>«YADRO» / Александр Дубинин</h6>
              <h4>
                Уточняется
                <strong> / 12:00 — 15:00</strong>
              </h4>
              <h6 className={style.speaker}>ООО «Базис» / Дмитрий Сорокин</h6>
              <h4>
                Построение высоконагруженных сред с применением виртуальной
                инфраструктуры
                <strong> / 15:30 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>22 апреля</h5>
              <h2 className={style.title}>Интерпретаторы</h2>
            </>
          }
          open={false}
          typeFigure={4}
        >
          <>
            <div className={style.lecture_body}>
              <h6 className={style.speaker}>
                ООО «БЕЛЛСОФТ» / «Axiom JDK» / Дмитрий Самерсов
              </h6>
              <h4>
                JVM Internals (Внутреннее устройство виртуальной машины Java)
                <strong> / 12:00 — 15:00</strong>
              </h4>
              <h6 className={style.speaker}>
                Независимый open-source разработчик / Никита Соболев
              </h6>
              <h4>
                Python - история создания, основные идеи и механизмы
                <strong> / 15:30 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>15 мая</h5>
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
                ФСТЭК России / Виталий Сергеевич Лютиков
              </h6>
              <h4>
                Система сертификации средств защиты информации ФСТЭК России
                <strong> / 12:00 — 15:30</strong>
              </h4>
              <h6 className={style.speaker}>
                ИСП РАН / Арутюн Ишханович Аветисян
              </h6>
              <h4>
                Уточняется
                <strong> / 15:30 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <h5 className={style.subtitle}>28 мая</h5>
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
                ООО «Профископ» / «CodeScoring» / Алексей Смирнов
              </h6>
              <h4>
                Композиционный анализ сторонних компонентов
                <strong> / 12:00 — 15:00</strong>
              </h4>
              <h6 className={style.speaker}>
                ООО «КлаудРан» / «Luntry» / Дмитрий Евдокимов
              </h6>
              <h4>
                Безопасность инфраструктур под управлением оркестратора
                Kubernetes
                <strong> / 15:30 — 18:30</strong>
              </h4>
            </div>
          </>
        </Collapse>
      </div>
    </section>
  );
};
