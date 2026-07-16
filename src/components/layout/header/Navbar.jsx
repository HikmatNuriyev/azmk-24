"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import style from "./header.module.scss";

import logo from "../../../../public/images/Logonext.webp";
import { navLinks } from "./data";

import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";

import Container from "@/components/ui/container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <Container>
        <div className={style.navbar}>
          <Link href="/" className={style.logo}>
            <Image src={logo} alt="AZMK Logo" priority />
          </Link>

          <nav className={style.desktopNav}>
            {navLinks.map((item) => {
              if (item.submenu) {
                const isActive =
                  pathname === item.href ||
                  item.submenu.some((sub) => pathname === sub.href);

                return (
                  <NavDropdown
                    key={item.title}
                    item={item}
                    isActive={isActive}
                  />
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`
                    ${style.navLink}
                    ${pathname === item.href ? style.active : ""}
                  `}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.title}
                </Link>
              );
            })}

            {/* <Link href="/muraciet" className={style.applicationLink}>
              Onlayn Müraciət
            </Link> */}
          </nav>

          <div className={style.actions}>
            <button
              className={style.menuBtn}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Menyunu bağla" : "Menyunu aç"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
