"use client";

import Link from "next/link";

import style from "./header.module.scss";
import { navLinks } from "./data";

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div
          className={style.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          ${style.mobileMenu}
          ${isOpen ? style.mobileOpen : ""}
        `}
      >
        {navLinks.map((item) => {
          if (item.submenu) {
            return (
              <div key={item.title}>
                <span className={style.mobileTitle}>
                  {item.title}
                </span>

                <div className={style.mobileSubmenu}>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className={style.mobileLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.title}
              href={item.href}
              className={style.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}