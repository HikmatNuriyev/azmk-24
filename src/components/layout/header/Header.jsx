import style from "./header.module.scss";

import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <TopBar />
        <Navbar />
      </div>
    </header>
  );
}

