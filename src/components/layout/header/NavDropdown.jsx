"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import style from "./header.module.scss";

export default function NavDropdown({ item, isActive = false }) {
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute("open");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <details ref={detailsRef} className={style.dropdown}>
      <summary
        className={`${style.navLink} ${style.dropdownTrigger} ${
          isActive ? style.active : ""
        }`}
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
            onClick={() => detailsRef.current?.removeAttribute("open")}
          >
            {sub.title}
          </Link>
        ))}
      </div>
    </details>
  );
}
