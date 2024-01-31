import { FC, PropsWithChildren, ReactNode, useRef, useState } from "react";
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
  const contentElem = useRef<null | HTMLDivElement>(null);

  function onClick() {
    if (!contentElem.current) return;

    if (isActive) {
      contentElem.current.style.height = null;
    } else {
      contentElem.current.style.height =
        contentElem.current.scrollHeight + "px";
    }
    setIsActive(!isActive);
  }
  return (
    <div className={style.bg_container}>
      <div className={style.container}>
        {typeFigure === 1 && <div className={style.type_1}></div>}
        {typeFigure === 2 && (
          <div className={style.type_2}>
            <div className={style.type_2_1}>
              <div></div>
            </div>
            <div className={style.type_2_1}>
              <div />
            </div>
            <div className={style.type_2_1}>
              <div />
            </div>
          </div>
        )}
        {typeFigure === 3 && (
          <div className={style.type_3}>
            <div className={style.type_3_1}>
              <div></div>
            </div>
            <div className={style.type_3_2}>
              <div />
            </div>
            <div className={style.type_3_3}>
              <div />
            </div>
          </div>
        )}
        {typeFigure === 4 && (
          <div className={style.type_4}>
            <div className={style.type_4_1}></div>
            <div className={style.type_4_2}>
              <div></div>
            </div>
          </div>
        )}
        {typeFigure === 5 && (
          <div className={style.type_5}>
            <div className={style.type_5_1}></div>
            <div className={style.type_5_2}></div>
          </div>
        )}
        {typeFigure === 6 && (
          <div className={style.type_6}>
            <div className={style.type_6_1}>
              <div />
            </div>
            <div className={style.type_6_2}>
              <div />
            </div>
          </div>
        )}
      </div>
      <div className={style.collapse}>
        <div className={style.label} onClick={onClick}>
          {label}
          <span
            className={cn(style.closeIcon, { [style.activeIcon]: isActive })}
          />
        </div>
        <div ref={contentElem} className={cn(style.content)}>
          {children}
        </div>
      </div>
    </div>
  );
};
