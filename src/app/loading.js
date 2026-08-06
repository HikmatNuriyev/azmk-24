import style from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={style.wrap} role="status" aria-live="polite">
      <span className={style.spinner} aria-hidden="true" />
      <span className={style.srOnly}>Yüklənir</span>
    </div>
  );
}