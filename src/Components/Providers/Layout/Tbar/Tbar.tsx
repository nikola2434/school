import { FC } from "react";
import style from "./Tbar.module.scss";
import { Logo } from "./Logo/Logo";
import { Links } from "./Links/Links";

export const Tbar: FC = () => {
  return (
    <header className={style.tbar}>
      <Logo />
      <Links />
    </header>
  );
};
