import { AnchorHTMLAttributes, FC } from "react";
import style from "./MainButton.module.scss";
import Arrow from "./Arrow.svg";

type HtmlProps = AnchorHTMLAttributes<HTMLElement>;

interface IButtonProps extends HtmlProps {
  icon?: boolean;
}

export const MainButton: FC<IButtonProps> = ({
  children,
  icon = true,
  ...rest
}) => {
  return (
    <a {...rest} className={style.button}>
      {children}
      {icon && (
        <span className={style.icon}>
          <Arrow />
        </span>
      )}
    </a>
  );
};
