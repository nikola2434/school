import { FC } from "react";
import style from "./ScreenPrograms.module.scss";
import { Collapse } from "../../UI/Collapse/Collapse";

export const ScreenPrograms: FC = () => {
  return (
    <section id="programs" className={style.screen}>
      <h1>программа</h1>
      <h2>
        Блок 1. Системное программное обеспечение. Фундаментальные технологии
        сквозь призму безопасной разработки
      </h2>
      <div>
        <Collapse
          label={
            <>
              <div className={style.subtitle}>март, 2-ая неделя</div>
              <div className={style.title}>Операционные системы</div>
            </>
          }
          open={false}
          typeFigure={1}
        >
          <>
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    ООО «Базальт СПО» / Георгий Владимирович Курячий, ведущий
                    разработчик
                  </div>
                  <div className={style.title_lecture}>
                    Операционные системы на основе ядра Linux: сообщество,
                    дистрибутив, жизненный цикл
                    {/* <strong> / 12:00 — 15:00</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>
                История участия российских разработчиков в сообществах Linux.
                Подходы к построению ОС, дистрибутивы Альт, обеспечение
                практической безопасности ПО
              </div>
            </Collapse>
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    АО «Лаборатория Касперского» / Сергей Викторович Рогачев,
                    руководитель отдела разработки безопасной платформы
                  </div>
                  <div className={style.title_lecture}>
                    Микроядерные операционные системы. Summa Technologiae
                    {/* <strong> / 15:30 — 18:30</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>
                Микроядерная архитектура имеет ряд неоспоримых преимуществ перед
                системами с монолитным ядром. Все больше игроков анонсируют
                выпуск своих продуктов, основанных на микроядерных ОС. Лекция
                осветит историю возникновения микроядерной архитектуры, основные
                этапы ее становления, отличительные особенности, механизмы
                предлагаемые для решения задач кибербезопасности, обратит
                внимание на наиболее ярких представителей, как микроядерные ОС
                встраиваются в процесс безопасной разработки ПО и какое
                отношение имеют к конструктивной безопасности и shift-left
              </div>
            </Collapse>
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
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    Postgres Professional / Иван Евгеньевич Панченко,
                    заместитель генерального директора
                  </div>
                  <div className={style.title_lecture}>
                    Уточняется
                    {/* <strong> / 12:00 - 15:00 </strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>Уточняется</div>
            </Collapse>
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    ООО «Ред Софт» / Роман Александрович Симаков, директор
                    департамента развития системных продуктов
                  </div>
                  <div className={style.title_lecture}>
                    Реляционные БД и их роль при построении безопасных ИС
                    {/* <strong> / 15:30 — 18:30</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>
                Реляционные БД предоставляют множество проверенных и
                сертифицированных механизмов для обеспечения защиты хранимых
                данных, которые могут быть использованы при построении
                Информационных Систем. Это избавляет разработчиков от
                необходимости самостоятельной реализации и значительно снижает
                стоимость и сроки проектов. В лекции будут рассмотрены базовые
                механизмы защиты данных, предоставляемые СУБД и особенности их
                реализации и применения
              </div>
            </Collapse>
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
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    «YADRO» / Александр Александрович Дубинин, эксперт по
                    информационной безопасности
                  </div>
                  <div className={style.title_lecture}>
                    Контейнеризация и виртуализация - вчера, сегодня, завтра
                    {/* <strong> / 12:00 — 15:00</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>Уточняется</div>
            </Collapse>
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    <div>ООО «Базис» /</div>
                    <div>
                      Сорокин Дмитрий Анатольевич, технический директор <br />
                      Сорокин Дмитрий Игоревич, рководитель блока разработки
                      ядра платформы
                    </div>
                  </div>
                  <div className={style.title_lecture}>
                    Построение высоконагруженных сред с применением виртуальной
                    инфраструктуры
                    {/* <strong> / 15:30 — 18:30</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>
                Проблемы и пути их решения при разработки облачной платформы с
                учетом современных требований
              </div>
            </Collapse>
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
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    «Axiom JDK» / Александр Дроздов, руководитель проектов
                    (содокладчик уточняется)
                  </div>
                  <div className={style.title_lecture}>
                    Java VM - внутренний мир виртуальной машины, проблемы JIT
                    компиляции и сборки мусора, организация процесса безопасной
                    разработки ПО
                    {/* <strong> / 12:00 — 15:00</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>
                Расскажем почему Java завоевала такую популярность, как
                сочетаются интерпретатор и компилятор, что такое JIT компиляция
                и какие в ней есть подводные камни, как происходит сборка мусора
                и почему в Java много разных коллекторов. Отдельно поговорим про
                мониторинг, отладку и безопасную разработку Java-приложений
              </div>
            </Collapse>
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    Независимый open-source разработчик / Никита Соболев
                  </div>
                  <div className={style.title_lecture}>
                    Python - история создания, основные идеи и механизмы
                    {/* <strong> / 15:30 — 18:30</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>
                Многие люди знают и любят Python, но не все знают, как он
                устроен внутри. Лекция кратко и полно раскроет основные моменты:
                <br />- Как из исходного кода получается абстрактное
                синтаксическое дерево (AST)
                <br />- Какие оптимизации можно сделать статически?
                <br />- Как из AST получается байткод? <br />- Какие оптимизации
                есть на шаге выполнения байткода (Tier1, Tier2, JIT) <br />- Что
                такое C-API, и почему он настолько важен для CPython? Лекция
                позволит получить представление о том, как работают современные
                языки программирования, а спикер поделиться интересными идеями
                для проектов в данной сфере
              </div>
            </Collapse>
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
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    ФСТЭК России / <strong>Виталий Сергеевич Лютиков,</strong>
                    заместитель директора
                  </div>
                  <div className={style.title_lecture}>
                    Уточняется
                    {/* <strong> / 12:00 — 15:30</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>Уточняется</div>
            </Collapse>
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    ИСП РАН / <strong>Арутюн Ишханович Аветисян,</strong>{" "}
                    директор, академик РАН
                  </div>
                  <div className={style.title_lecture}>
                    Уточняется
                    {/* <strong> / 15:30 — 18:30</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>Уточняется</div>
            </Collapse>
          </>
        </Collapse>
        <h2>
          Блок 2. Практическая безопасность программного обеспечения и
          информационных систем
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
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    ООО «Профископ» / «CodeScoring» / Алексей Алексеевич
                    Смирнов, генеральный директор
                  </div>
                  <div className={style.title_lecture}>
                    Безопасное использование Open Source
                    {/* <strong> / 12:00 — 15:00</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>
                В лекции будут раскрыты вопросы безопасносного использования
                Open Source компонентов: от постановки вопроса, до конкретных
                инструментальных возможностей и описаний процессов их
                применения.
              </div>
            </Collapse>
            <Collapse
              label={
                <div className={style.lecture_body}>
                  <div className={style.speaker}>
                    «Luntry» / Дмитрий Сергеевич Евдокимов, генеральный директор
                  </div>
                  <div className={style.title_lecture}>
                    Безопасность инфраструктур под управлением оркестратора
                    Kubernetes
                    {/* <strong> / 15:30 — 18:30</strong> */}
                  </div>
                </div>
              }
              typeFigure={null}
            >
              <div className={style.description}>Уточняется</div>
            </Collapse>
          </>
        </Collapse>
      </div>
    </section>
  );
};
