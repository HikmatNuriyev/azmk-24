import style from "./mobileApp.module.scss";

export default function FloatingCard({ icon: Icon, title, className }) {
  return (
    <div className={`${style.floatingCard} ${style[className]}`}>
      <div className={style.floatingIcon}>
        <Icon />
      </div>

      <span>{title}</span>
    </div>
  );
}