import style from "./MainBackground.module.scss";
import { FC, PropsWithChildren } from "react";

export const MainBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={style.bg}>
      <div className={style.container}>
        <div className={style.container_first}>
          <div className={style.circle_first} />
          <div className={style.line_first} />
        </div>
        <div className={style.container_second}>
          <div className={style.circle_second} />
        </div>
        <div className={style.container_third}>
          <div className={style.circle_third} />
          <div className={style.line_third} />
        </div>
      </div>
      {children}
    </section>
  );
};
