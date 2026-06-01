
"use client";

import Link from "next/link";

import style from "./header.module.scss";

export default function NavDropdown({
  item,
}) {
  return (
    <div className={style.dropdown}>
      <span className={style.navLink}>
        {item.title}
      </span>

      <div className={style.dropdownMenu}>
        {item.submenu.map((sub) => (
          <Link
            key={sub.title}
            href={sub.href}
            className={style.dropdownItem}
          >
            {sub.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

