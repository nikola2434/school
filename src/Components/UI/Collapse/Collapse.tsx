import { FC, PropsWithChildren, ReactNode, useState } from "react";
import style from "./Collapse.module.scss";
import cn from "classnames";

// супер в падлу был0 делать что-то стоящее поэтому это

type TypeFigure = 1 | 2 | 3 | 4 | 5 | 6;

interface CollapseProps {
  label: ReactNode;
  open?: boolean;
  typeFigure?: TypeFigure;
}

export const Collapse: FC<PropsWithChildren<CollapseProps>> = ({
  label,
  children,
  typeFigure = 1,
  open = false,
}) => {
  const [isActive, setIsActive] = useState(open);
  return (
    <div className={style.collapse}>
      <div className={style.label}>
        {label} <span className={style.closeIcon} />
      </div>
      <div className={style.content}>{children}</div>
    </div>
  );
};
