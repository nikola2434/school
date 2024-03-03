import { FC } from "react";
import style from "./Logo.module.scss";
import LogoBMSTU from "@public/Images/logo-bmstu.svg";
import LogoRBPO from "@public/Images/logo-rbpo.svg";
import Spikers from "@public/Images/Spikers.svg";
import LogoIU10 from "@public/Images/logo-iu10.png";

export const Logo: FC<{ secondPage: boolean }> = ({ secondPage }) => {
  return (
    <a className={style.logo} href={secondPage ? "/#main" : "#main"}>
      <LogoBMSTU />
      <img src={LogoIU10} alt="Кафедра ИУ-10" draggable={false} height={40} />
      <Spikers />
      <LogoRBPO />
    </a>
  );
};
