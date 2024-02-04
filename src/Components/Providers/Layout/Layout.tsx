import { FC, PropsWithChildren } from "react";
import { Tbar } from "./Tbar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Tbar />
      {children}
    </main>
  );
};
