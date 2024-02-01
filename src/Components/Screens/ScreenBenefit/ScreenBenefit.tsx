import style from "./ScreenBenefit.module.scss";

export const ScreenBenefit = () => {
  return (
    <div className={style.screen}>
      <h1>КОМУ БУДУТ ПОЛЕЗНЫ ЛЕКЦИИ?</h1>
      <div>
        <span className={style.ellipse} /> Студентам, желающим развиваться в
        IT-сфере
      </div>
      <div>
        <span className={style.ellipse} /> Специалистам, которые уже работают в
        IT-сфере, и хотят лучше понять, по каким законам живет этот мир или, что
        там происходит «на уровень ниже»
      </div>
      <div>
        <span className={style.ellipse} /> Разработчикам ПО, желающим повысить
        уровень безопасности своего кода
      </div>
      <div>
        <span className={style.ellipse} />
        Специалистам в области информационной безопасности
      </div>
      <div>
        <span className={style.ellipse} /> Всем, кто хочет понимать, как
        работают информационные технологии, которые нас окружают.
      </div>
    </div>
  );
};
