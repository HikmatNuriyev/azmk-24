"use client";

import style from "./not-found.module.scss";

export default function Error({ reset }) {
  return (
    <main className={style.page}>
      <div className={style.inner}>
        <h1 className={style.title}>Xəta baş verdi</h1>
        <p className={style.text}>
          Səhifə yüklənərkən problem yarandı. Yenidən cəhd edin.
        </p>
        <button onClick={reset} className={style.btn}>
          Yenidən cəhd et
        </button>
      </div>
    </main>
  );
}