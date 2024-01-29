import { FC, PropsWithChildren, useInsertionEffect } from "react";

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
const ScrollSmoother = window.ScrollSmoother;

console.log(ScrollTrigger);
console.log(ScrollSmoother);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Animation: FC<PropsWithChildren> = ({ children }) => {
  useInsertionEffect(() => {
    ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
      smooth: 1.5,
      effect: true,
    });
  }, []);
  return <div id=".wrapper">{children}</div>;
};
