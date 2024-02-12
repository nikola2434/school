import {
  FC,
  PropsWithChildren,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import style from "./Collapse.module.scss";
import cn from "classnames";

// супер в падлу был0 делать что-то стоящее поэтому это

type TypeFigure = 1 | 2 | 3 | 4 | 5 | 6 | null;

interface CollapseProps {
  label: ReactNode;
  open?: boolean;
  typeFigure?: TypeFigure;
  select?: boolean;
}

export const Collapse: FC<PropsWithChildren<CollapseProps>> = ({
  label,
  children,
  typeFigure = 1,
  open = false,
  select = false,
}) => {
  const [isActive, setIsActive] = useState(open);
  const contentElem = useRef<HTMLDivElement | null>(null);
  const labelElem = useRef<HTMLDivElement | null>(null);
  const containerElem = useRef<HTMLDivElement | null>(null);

  function onClick() {
    setIsActive(!isActive);
  }

  useLayoutEffect(() => {
    if (!contentElem.current) return;

    let timer: null | ReturnType<typeof setTimeout> = null;

    if (!isActive) {
      if (typeof timer === "number") timer = null;
      contentElem.current.style.height =
        contentElem.current.scrollHeight + "px";
      setTimeout(() => {
        contentElem.current.style.height = null;
      }, 0);
    } else {
      contentElem.current.style.height =
        contentElem.current.scrollHeight + "px";

      timer = setTimeout(() => {
        if (!timer) return;
        contentElem.current.style.height = "auto";
      }, 350);
    }
  }, [isActive]);

  useLayoutEffect(() => {
    if (!labelElem.current) return;

    const resizeObserve = new ResizeObserver(([entry]) => {
      if (!entry || !containerElem.current) return;

      const heightLabel =
        entry.borderBoxSize[0]?.blockSize ??
        entry.target.getBoundingClientRect().height;

      containerElem.current.style.height = heightLabel + "px";

      if (!contentElem.current || !isActive) return;
      contentElem.current.style.height =
        contentElem.current.scrollHeight + "px";
    });

    resizeObserve.observe(labelElem.current);

    return () => resizeObserve.disconnect();
  }, [isActive]);

  return (
    <div className={style.bg_container}>
      {typeFigure && (
        <div className={style.container} ref={containerElem}>
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
      )}
      <div
        className={cn(style.collapse, {
          [style.collapse_select]: select,
          [style.hidden]: !typeFigure,
        })}
      >
        <div
          className={cn(style.label, { [style.label_children]: !typeFigure })}
          onClick={onClick}
          ref={labelElem}
        >
          {label}
          <span
            className={cn(style.closeIcon, {
              [style.activeIcon]: isActive,
              [style.icon]: !typeFigure,
            })}
          />
        </div>
        <div ref={contentElem} className={cn(style.content)}>
          {children}
        </div>
      </div>
    </div>
  );
};
