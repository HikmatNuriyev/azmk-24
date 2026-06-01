import style from "./card.module.scss";

export default function Card({
  children,
  padding = "lg",
  hover = true,
}) {
  return (
    <div
      className={`
        ${style.card}
        ${style[padding]}
        ${hover ? style.hover : ""}
      `}
    >
      {children}
    </div>
  );
}

