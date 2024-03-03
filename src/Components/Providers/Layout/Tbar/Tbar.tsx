import { FC } from "react";
import style from "./Tbar.module.scss";
import { Logo } from "./Logo/Logo";
import { Links } from "./Links/Links";

export const Tbar: FC<{ secondPage: boolean }> = ({ secondPage }) => {
  return (
    <header className={style.tbar}>
      <Logo secondPage={secondPage} />
      <Links secondPage={secondPage} />
    </header>
  );
};
