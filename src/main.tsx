import { FC } from "react";
import "./style/index.scss";
import { MainScreen } from "./Components/Screens";
import { MainProvider } from "./Components/Providers/MainProvider";
import { ScreenInfo } from "./Components/Screens/ScreenInfo/ScreenInfo";
import { ScreenTagline } from "@screens//ScreenTagline/ScreenTagline";

export const Main: FC = () => {
  return (
    <MainProvider>
      <MainScreen />
      <ScreenInfo />
      <ScreenTagline />
    </MainProvider>
  );
};
