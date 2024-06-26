import { FC } from "react";
import style from "./ScreenPrograms.module.scss";
import { Collapse } from "../../UI/Collapse/Collapse";

export const ScreenPrograms: FC = () => {
  return (
    <>
      <a id="programs"></a>
      <section className={style.screen}>
        <h1>программа</h1>
        <div>
          <Collapse
            label={
              <>
                <div className={style.subtitle}>5-го марта</div>
                <div className={style.title}>Операционные системы (прошел)</div>
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
                      <strong> / 11:00 — 13:00</strong>
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
                      <div>АО «Лаборатория Касперского» /</div>
                      <div>
                        Сергей Викторович Рогачев, руководитель отдела
                        разработки безопасной платформы <br />
                        Дмитрий Владимирович Шмойлов, руководитель отдела
                        безопасности программных продуктов
                      </div>
                    </div>
                    <div className={style.title_lecture}>
                      Микроядерные операционные системы. Summa Technologiae
                      <strong> / 13:30 — 15:30</strong>
                    </div>
                  </div>
                }
                typeFigure={null}
              >
                <div className={style.description}>
                  Микроядерная архитектура имеет ряд неоспоримых преимуществ
                  перед системами с монолитным ядром. Все больше игроков
                  анонсируют выпуск своих продуктов, основанных на микроядерных
                  ОС. Лекция осветит историю возникновения микроядерной
                  архитектуры, основные этапы ее становления, отличительные
                  особенности, механизмы предлагаемые для решения задач
                  кибербезопасности, обратит внимание на наиболее ярких
                  представителей, как микроядерные ОС встраиваются в процесс
                  безопасной разработки ПО и какое отношение имеют к
                  конструктивной безопасности и shift-left
                </div>
              </Collapse>
            </>
          </Collapse>
          <Collapse
            label={
              <>
                <div className={style.subtitle}>27 марта</div>
                <div className={style.title}>
                  Системы управления базами данных
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
                      История и технологии СУБД на примере Postgres
                      <strong> / 13:00 - 15:00</strong>
                    </div>
                  </div>
                }
                typeFigure={null}
              >
                <div className={style.description}>
                  Рассмотрим бурную историю развития СУБД от самого начала до
                  сегодняшних дней. В центре повествования будет Postgres -
                  наверное, самая российская из универсальных СУБД мирового
                  масштаба. Поймём, как зарождались или выбирались те или иные
                  технологические решения, как работает над СУБД международное
                  сообщество и корпорации, и какие факторы приводят к изменению
                  этих процессов и их результата.
                </div>
              </Collapse>

              <Collapse
                label={
                  <div className={style.lecture_body}>
                    <div className={style.speaker}>
                      <div>Ред Софт /</div>
                      <div>
                        Дмитрий Витальевич Еманов, архитектор СУБД; <br />
                        Роман Александрович Симаков, директор департамента
                        развития системных продуктов
                      </div>
                    </div>
                    <div className={style.title_lecture}>
                      Реляционные СУБД: технологическая эволюция, особенности
                      реализации и практические аспекты безопасности
                      <strong> / 15:30 — 17:30</strong>
                    </div>
                  </div>
                }
                typeFigure={null}
              >
                <div className={style.description}>
                  Реляционные базы данных имеют богатую историю развития и
                  иногда по-разному реализуют решения тех или иных задач. В
                  докладе будут рассмотрены некоторые из таких технологий,
                  особенности реализации в разных СУБД и аспекты безопасности,
                  связанные с ними. Доклад осветит практический опыт реализации
                  безопасной разработки СУБД, подходы к разработке безопасной
                  СУБД
                </div>
              </Collapse>
            </>
          </Collapse>
          <Collapse
            label={
              <>
                <div className={style.subtitle}>11 апреля</div>
                <div className={style.title}>
                  Виртуализация и контейнеризация
                </div>
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
                      <strong> / 14:00 — 16:00</strong>
                    </div>
                  </div>
                }
                typeFigure={null}
              >
                <div className={style.description}>
                  Основы контейнеризации и виртуализации как инструмента
                  обеспечения безопасности - история возникновения и развития,
                  области применения. Программные и аппаратные механизмы, на
                  которых построены обе технологии, плюсы и минусы, сценарии
                  использования для безопасной разработки ПО. Варианты
                  архитектуры средств виртуализации и контейнеризации, их
                  безопасность, MILS. Аппаратные механизмы поддержки
                  виртуализации в современных и будущих процессорах (x86, ARM,
                  RISC-V SoCs).
                </div>
              </Collapse>
              <Collapse
                label={
                  <div className={style.lecture_body}>
                    <div className={style.speaker}>
                      <div>ООО «Базис» /</div>
                      <div>
                        Дмитрий Анатольевич Сорокин, технический директор <br />
                        Александр Васильевич Иванин, руководитель отдела
                        архитектурных решений <br />
                        Натали Дмитриевна Дуботолкова, старший инженер по РБПО
                      </div>
                    </div>
                    <div className={style.title_lecture}>
                      Построение высоконагруженных сред с применением
                      виртуальной инфраструктуры
                      <strong> / 16:30 — 18:30</strong>
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
                <div className={style.subtitle}>22 апреля</div>
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
                      «Axiom JDK» / Александр Сергеевич Дроздов, инженер по РБПО
                      и информационной безопасности «Axiom JDK»
                    </div>
                    <div className={style.title_lecture}>
                      Java VM - внутренний мир виртуальной машины, проблемы
                      JIT-компиляции и сборки мусора, организация процесса
                      безопасной разработки ПО
                      <strong> / 14:00 — 16:00</strong>
                    </div>
                  </div>
                }
                typeFigure={null}
              >
                <div className={style.description}>
                  Расскажем почему Java завоевала такую популярность, как
                  сочетаются интерпретатор и компилятор, что такое
                  JIT-компиляция и какие в ней есть подводные камни, как
                  происходит сборка мусора и почему в Java много разных
                  коллекторов. Отдельно поговорим про мониторинг, отладку и
                  безопасную разработку Java-приложений
                </div>
              </Collapse>
              <Collapse
                label={
                  <div className={style.lecture_body}>
                    <div className={style.speaker}>
                      Независимый open-source разработчик / Никита Андреевич
                      Соболев
                    </div>
                    <div className={style.title_lecture}>
                      Python - история создания, основные идеи и механизмы
                      <strong> / 16:30 — 18:30</strong>
                    </div>
                  </div>
                }
                typeFigure={null}
              >
                <div className={style.description}>
                  Многие люди знают и любят Python, но не все знают, как он
                  устроен внутри. Лекция кратко и полно раскроет основные
                  моменты:
                  <br />- Как из исходного кода получается абстрактное
                  синтаксическое дерево (AST)
                  <br />- Какие оптимизации можно сделать статически?
                  <br />- Как из AST получается байткод? <br />- Какие
                  оптимизации есть на шаге выполнения байткода (Tier1, Tier2,
                  JIT) <br />- Что такое C-API, и почему он настолько важен для
                  CPython? Лекция позволит получить представление о том, как
                  работают современные языки программирования, а спикер
                  поделиться интересными идеями для проектов в данной сфере
                </div>
              </Collapse>
            </>
          </Collapse>
          <Collapse
            label={
              <>
                <div className={style.subtitle}>27 мая</div>
                <div className={style.title}>
                  Композиционный и компонентный анализ{" "}
                  <a
                    href="https://rutube.ru/channel/35564652/about/"
                    target="_blank"
                  >
                    (Смотреть)
                  </a>
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
                      <strong> / 11:30 — 13:30</strong>
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
                      «Luntry» / Дмитрий Сергеевич Евдокимов, генеральный
                      директор
                    </div>
                    <div className={style.title_lecture}>
                      Безопасность инфраструктур под управлением оркестратора
                      Kubernetes
                      <strong> / 14:00 — 16:00</strong>
                    </div>
                  </div>
                }
                typeFigure={null}
              >
                <div className={style.description}>
                  Лекция рассмотрит тему оркестрации контейнеров и оркестратор
                  Kubernetes, даст возможность посмотреть как на устрйство
                  данной системы, так и на ее безопасность и безопасность
                  контейнеров под ее управлением
                </div>
              </Collapse>
            </>
          </Collapse>
          <Collapse
            label={
              <>
                <div className={style.subtitle}>июнь</div>
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
                  ФСТЭК России / <strong>Виталий Сергеевич Лютиков,</strong>
                  заместитель директора
                </div>
                <div className={style.title_lecture}>
                  Уточняется
                  <strong> / 11:00 — 13:00</strong>
                </div>
              </div>

              <div className={style.lecture_body}>
                <div className={style.speaker}>
                  ИСП РАН / <strong>Арутюн Ишханович Аветисян,</strong>{" "}
                  директор, академик РАН
                </div>
                <div className={style.title_lecture}>
                  Уточняется
                  <strong> / 13:30 — 15:30</strong>
                </div>
              </div>
            </>
          </Collapse>
        </div>
      </section>
    </>
  );
};
