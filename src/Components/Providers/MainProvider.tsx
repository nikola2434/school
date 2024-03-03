import { FC, PropsWithChildren } from "react";
import { Layout } from "./Layout";

export const MainProvider: FC<PropsWithChildren<{ secondPage?: boolean }>> = ({
  children,
  secondPage = false,
}) => {
  return <Layout secondPage={secondPage}>{children}</Layout>;
};
