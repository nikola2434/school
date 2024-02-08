import { FC } from "react";
import style from "./ScreenPrograms.module.scss";
import { Collapse } from "../../UI/Collapse/Collapse";

export const ScreenPrograms: FC = () => {
  return (
    <section id="programs" className={style.screen}>
      <h1>программа</h1>
      <h2>
        Системное программное обеспечение. Фундаментальные технологии сквозь
        призму безопасной разработки.
      </h2>
      <div>
        <Collapse
          label={
            <>
              <div className={style.subtitle}>2-ая неделя марта</div>
              <div className={style.title}>Операционные системы</div>
            </>
          }
          open={false}
          typeFigure={1}
        >
          <>
            <div className={style.lecture_body}>
              <div className={style.speaker}>
                ООО «Базальт СПО» / Георгий Курячий
              </div>
              <div className={style.title_lecture}>
                Операционные системы на основе ядра Linux: сообщество,
                дистрибутив, жизненный цикл
                {/* <strong> / 12:00 — 15:00</strong> */}
              </div>
              <div className={style.speaker}>
                АО «Лаборатория Касперского» / Сергей Викторович Рогачев,
                руководитель отдела разработки безопасной платформы
              </div>
              <div className={style.title_lecture}>
                Уточняется
                {/* <strong> / 15:30 — 18:30</strong> */}
              </div>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <div className={style.subtitle}>март, 4-ая неделя</div>
              <div className={style.title}>
                Система управления базами данных
              </div>
            </>
          }
          open={false}
          typeFigure={2}
        >
          <>
            <div className={style.lecture_body}>
              <div className={style.speaker}>
                ООО «Постгрес Профессиональный» / «Postgres Professional» / Иван
                Панченко
              </div>
              <div className={style.title_lecture}>
                Уточняется
                {/* <strong> / 12:00 - 15:00 </strong> */}
              </div>
              <div className={style.speaker}>
                ООО «Ред Софт» / Роман Симаков
              </div>
              <div className={style.title_lecture}>
                Уточняется
                {/* <strong> / 15:30 — 18:30</strong> */}
              </div>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <div className={style.subtitle}>апрель, 2-ая неделя</div>
              <div className={style.title}>Виртуализация и контейнеризация</div>
            </>
          }
          open={false}
          typeFigure={3}
        >
          <>
            <div className={style.lecture_body}>
              <div className={style.speaker}>
                «YADRO» / Александр Александрович Дубинин эксперт по
                информационной безопасности
              </div>
              <div className={style.title_lecture}>
                Контейнеризация и виртуализация - вчера, сегодня, завтра
                {/* <strong> / 12:00 — 15:00</strong> */}
              </div>
              <div className={style.speaker}>ООО «Базис» / Дмитрий Сорокин</div>
              <div className={style.title_lecture}>
                Построение высоконагруженных сред с применением виртуальной
                инфраструктуры
                {/* <strong> / 15:30 — 18:30</strong> */}
              </div>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <div className={style.subtitle}>апрель, 4-ая неделя</div>
              <div className={style.title}>Интерпретаторы</div>
            </>
          }
          open={false}
          typeFigure={4}
        >
          <>
            <div className={style.lecture_body}>
              <div className={style.speaker}>
                «Axiom JDK» / Дмитрий Самерсов
              </div>
              <div className={style.title_lecture}>
                Java VM - внутреннее устройство и принципы работы
                {/* <strong> / 12:00 — 15:00</strong> */}
              </div>
              <div className={style.speaker}>
                Независимый open-source разработчик / Никита Соболев
              </div>
              <div className={style.title_lecture}>
                Python - история создания, основные идеи и механизмы
                {/* <strong> / 15:30 — 18:30</strong> */}
              </div>
            </div>
          </>
        </Collapse>
        <Collapse
          label={
            <>
              <div className={style.subtitle}>май, 2-ая неделя</div>
              <div className={style.title}>
                Разработка безопасного программного обеспечения
              </div>
            </>
          }
          open={true}
          select={true}
          typeFigure={5}
        >
          <>
            <div className={style.lecture_body}>
              <div className={style.speaker}>
                ФСТЭК России / <strong>Виталий Сергеевич Лютиков</strong>
              </div>
              <div className={style.title_lecture}>
                Уточняется
                {/* <strong> / 12:00 — 15:30</strong> */}
              </div>
              <div className={style.speaker}>
                ИСП РАН / <strong>Арутюн Ишханович Аветисян</strong>
              </div>
              <div className={style.title_lecture}>
                Уточняется
                {/* <strong> / 15:30 — 18:30</strong> */}
              </div>
            </div>
          </>
        </Collapse>
        <h2>
          Практическая безопасность программного обеспечения и информационных
          систем.
        </h2>
        <Collapse
          label={
            <>
              <div className={style.subtitle}>май, 4-ая неделя</div>
              <div className={style.title}>
                Композиционный и компонентный анализ
              </div>
            </>
          }
          open={false}
          typeFigure={6}
        >
          <>
            <div className={style.lecture_body}>
              <div className={style.speaker}>
                ООО «Профископ» / «CodeScoring» / Алексей Смирнов
              </div>
              <div className={style.title_lecture}>
                Композиционный анализ сторонних компонентов
                {/* <strong> / 12:00 — 15:00</strong> */}
              </div>
              <div className={style.speaker}>
                ООО «КлаудРан» / «Luntry» / Дмитрий Евдокимов
              </div>
              <div className={style.title_lecture}>
                Безопасность инфраструктур под управлением оркестратора
                Kubernetes
                {/* <strong> / 15:30 — 18:30</strong> */}
              </div>
            </div>
          </>
        </Collapse>
      </div>
    </section>
  );
};
