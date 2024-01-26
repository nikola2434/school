import { FC } from "react";
import "./style/index.scss";
import { MainScreen } from "./Components/Screens";
import { MainProvider } from "./Components/Providers/MainProvider";

export const Main: FC = () => {
  return (
    <MainProvider>
      <MainScreen />
    </MainProvider>
  );
};
