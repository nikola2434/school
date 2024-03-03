import { FC, PropsWithChildren } from "react";
import { Tbar } from "./Tbar";

export const Layout: FC<PropsWithChildren<{ secondPage: boolean }>> = ({
  children,
  secondPage,
}) => {
  return (
    <main>
      <Tbar secondPage={secondPage} />
      {children}
    </main>
  );
};
