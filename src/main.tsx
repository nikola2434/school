import { FC } from "react";
import "./style/index.scss";
import { MainScreen } from "./Components/Screens";
import { MainProvider } from "./Components/Providers/MainProvider";
import { ScreenInfo } from "./Components/Screens/ScreenInfo/ScreenInfo";
import { ScreenTagline } from "@screens//ScreenTagline/ScreenTagline";
import { ScreenBenefit } from "@screens//ScreenBenefit/ScreenBenefit";
import { SpeakersScreen } from "@screens//SpeakersScreen/SpeakersScreen";
import { ScreenPrograms } from "@screens//ScreenPrograms/ScreenPrograms";
import { Footer } from "@screens//Footer/Footer";

export const Main: FC = () => {
  return (
    <MainProvider>
      <MainScreen />
      <ScreenInfo />
      <ScreenTagline />
      <ScreenBenefit />
      <SpeakersScreen />
      <ScreenPrograms />
      <Footer />
    </MainProvider>
  );
};
