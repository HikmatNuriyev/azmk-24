
import style from "./title.module.scss";

export default function Title({
  children,
  as: Tag = "h2",
  size = "lg",
  center = false,
}) {
  return (
    <Tag
      className={`
        ${style.title}
        ${style[size]}
        ${center ? style.center : ""}
      `}
    >
      {children}
    </Tag>
  );
}

