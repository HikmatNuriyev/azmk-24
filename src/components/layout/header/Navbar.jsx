

"use client";
import ThemeToggle from "@/components/ui/theme-toggle";
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
import Button from "@/components/ui/button";
import QRCodeBox from "@/components/ui/qr-code";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
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
                return <NavDropdown key={item.title} item={item} />;
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`
                    ${style.navLink}
                    ${pathname === item.href ? style.active : ""}
                  `}
                >
                  {item.title}
                </Link>
              );
            })}

            <div className={style.applicationDropdown}>
              <span className={style.navLink}>
                Onlayn Müraciət
              </span>

              <div className={style.applicationMenu}>
                <div className={style.applicationContent}>
                  <div className={style.applicationLeft}>
                    <h3>Onlayn Müraciət</h3>

                    <p>
                      Kredit və lizinq müraciətlərinizi bir neçə dəqiqəyə
                      göndərin. QR kodu skan edərək müraciət səhifəsinə keçə
                      bilərsiniz.
                    </p>

                    <Link href="/muraciet">
                      <Button>Müraciət Et</Button>
                    </Link>
                  </div>

                  <div className={style.applicationRight}>
                    <QRCodeBox value="https://apps.apple.com/az/app/kredit-evi/id1611922467" />
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className={style.actions}>
            <button
              className={style.menuBtn}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              aria-expanded={isOpen}
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