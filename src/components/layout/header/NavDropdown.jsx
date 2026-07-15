
"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import style from "./header.module.scss";

export default function NavDropdown({
  item,
  isActive = false,
}) {
  return (
    <details className={style.dropdown}>
      <summary
        className={`${style.navLink} ${style.dropdownTrigger} ${isActive ? style.active : ""}`}
      >
        {item.title}
        <ChevronDown aria-hidden="true" />
      </summary>

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
    </details>
  );
}

