import { FC } from "react";
import style from "./Tbar.module.scss";
import { Logo } from "./Logo/Logo";
import { Links } from "./Links/Links";

export const Tbar: FC = () => {
  return (
    <div className={style.tbar}>
      <Logo />
      <Links />
    </div>
  );
};
