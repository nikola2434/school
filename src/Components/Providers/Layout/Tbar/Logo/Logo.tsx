import { FC } from "react";
import style from "./Logo.module.scss";
import LogoBMSTU from "../../../../../../public/Images/logo-bmstu.svg";
import LogoRBPO from "../../../../../../public/Images/logo-rbpo.svg";
import Spikers from "../../../../../../public/Images/Spikers.svg";

export const Logo: FC = () => {
  return (
    <a className={style.logo} href="#main">
      <LogoBMSTU />
      <Spikers />
      <LogoRBPO />
    </a>
  );
};
