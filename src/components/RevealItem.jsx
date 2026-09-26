import { cloneElement, Children } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function RevealItem({ children, delay = 0 }) {
  const { ref, visible } = useScrollReveal();
  const child = Children.only(children);

  const claseOriginal = child.props.className || "";

  return cloneElement(child, {
    ref,
    className: `${claseOriginal} reveal-item ${visible ? "is-visible" : ""}`.trim(),
    style: {
      ...child.props.style,
      transitionDelay: visible ? `${delay}s` : "0s",
    },
  });
}

export default RevealItem;