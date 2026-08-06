import Link from "next/link";
import style from "./not-found.module.scss";

export const metadata = { title: "Səhifə tapılmadı" };

export default function NotFound() {
  return (
    <main className={style.page}>
      <div className={style.inner}>
        <span className={style.code}>404</span>
        <h1 className={style.title}>Səhifə tapılmadı</h1>
        <p className={style.text}>
          Axtardığınız səhifə silinmiş və ya ünvanı dəyişmiş ola bilər.
        </p>
        <Link href="/" className={style.btn}>
          Ana səhifəyə qayıt
        </Link>
      </div>
    </main>
  );
}