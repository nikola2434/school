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
        <span className={style.ellipse} /> Членам сообщества РБПО
      </div>
      <div>
        <span className={style.ellipse} /> Специалистам в области
        кибербезопасности
      </div>
      <div>
        <span className={style.ellipse} />
        Разработчикам ПО, желающим повысить уровень безопасности своего кода
      </div>
    </div>
  );
};
