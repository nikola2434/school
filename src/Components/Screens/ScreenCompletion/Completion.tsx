import style from "../ScreenBenefit/ScreenBenefit.module.scss";

export const ScreenCompletion = () => {
  return (
    <section className={style.screen}>
      <h1>Что вы гарантированно приобретете по завершении цикла лекций?</h1>
      <ul>
        <li>
          <span className={style.ellipse} /> Понимание основных принципов
          построения информационных технологий, что позволит посмотреть на мир
          IT глазами людей, которые его создают
        </li>
        <li>
          <span className={style.ellipse} /> Возможность из первых уст узнать,
          как развиваются фундаментальные IT технологии в России и
          присоединиться к этому процессу
        </li>
        <li>
          <span className={style.ellipse} /> Повышение уровня
          конкурентоспособности на рынке труда
        </li>
        <li>
          <span className={style.ellipse} />
          Понимание принципов и методов ведения разработки безопасного
          программного обеспечения
        </li>
        <li>
          <span className={style.ellipse} /> Просто массу приятных впечатлений.
        </li>
      </ul>
    </section>
  );
};
