import { FC, PropsWithChildren } from "react";
import { Layout } from "./Layout";
import { Animation } from "./Animation";

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Animation>{children}</Animation>
    </Layout>
  );
};
