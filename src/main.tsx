import { FC } from "react";
import "./style/index.scss";
import { MainScreen } from "./Components/Screens";
import { MainProvider } from "./Components/Providers/MainProvider";
import { ScreenInfo } from "./Components/Screens/ScreenInfo/ScreenInfo";

export const Main: FC = () => {
  return (
    <MainProvider>
      <MainScreen />
      <ScreenInfo />
    </MainProvider>
  );
};
