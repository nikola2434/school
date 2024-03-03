import { FC, useEffect } from "react";
import { MainProvider } from "../../Providers/MainProvider";
import "../../../style/index.scss";
import { MainBackground } from "@screens/MainScreen/MainBackground/MainBackground";
import { getVars } from "@utils/URL/getVars";
import style from "./style.module.scss";

export const ConfirmMain: FC = () => {
  const vars = getVars();
  useEffect(() => {
    const url: string =
      typeof window.config?.URL_BACK === "string"
        ? window.config.URL_BACK
        : location.host;

    fetch(
      `${url}/confirm/${vars.register !== "remote" ? "real" : "remote"}/?uid=${
        vars.uid
      }`
    ).catch((rejected) => {
      console.error(rejected);
    });
  }, []);
  return (
    <MainProvider secondPage={true}>
      <MainBackground>
        {vars.register !== "remote" ? (
          <h1 className={style.title}>
            спасибо! будем <strong>вас</strong> ждать<strong>:)</strong>
          </h1>
        ) : (
          <h1 className={style.title}>
            спасибо! приятного <strong>вам</strong> просмотра
            <strong>:)</strong>
          </h1>
        )}
      </MainBackground>
    </MainProvider>
  );
};
