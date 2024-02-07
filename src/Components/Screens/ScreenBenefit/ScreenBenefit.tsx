import style from "./ScreenBenefit.module.scss";

export const ScreenBenefit = () => {
  return (
    <section className={style.screen}>
      <h1>КОМУ БУДУТ ПОЛЕЗНЫ ЛЕКЦИИ?</h1>
      <ul>
        <li>
          <span className={style.ellipse} /> Студентам, желающим развиваться в
          IT-сфере
        </li>
        <li>
          <span className={style.ellipse} /> Специалистам, которые уже работают
          в IT-сфере, и хотят лучше понять, по каким законам живет этот мир или,
          что там происходит «на уровень ниже»
        </li>
        <li>
          <span className={style.ellipse} /> Разработчикам ПО, желающим повысить
          уровень безопасности своего кода
        </li>
        <li>
          <span className={style.ellipse} />
          Специалистам в области информационной безопасности
        </li>
        <li>
          <span className={style.ellipse} /> Всем, кто хочет понимать, как
          работают информационные технологии, которые нас окружают
        </li>
      </ul>
    </section>
  );
};
