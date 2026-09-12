
// "use client";

// import Link from "next/link";
// import style from "./header.module.scss";
// import { navLinks } from "./data";

// export default function MobileMenu({
//   isOpen,
//   setIsOpen,
//   menuButtonRef,
// }) {
//   const closeMenu = () => {
//     setIsOpen(false);

//     requestAnimationFrame(() => {
//       menuButtonRef?.current?.focus();
//     });
//   };

//   return (
//     <>
//       {isOpen && (
//         <div
//           className={style.overlay}
//           onClick={closeMenu}
//         />
//       )}

//       <div
//         id="mobile-navigation"
//         className={`
//           ${style.mobileMenu}
//           ${isOpen ? style.mobileOpen : ""}
//         `}
//         aria-hidden={!isOpen}
//         inert={!isOpen}
//       >
//         <nav
//           aria-label="Mobil naviqasiya"
//           className={style.mobileNav}
//         >
//           {navLinks.map((item) => {
//             if (item.submenu) {
//               return (
//                 <div key={item.title}>
//                   <span className={style.mobileTitle}>
//                     {item.title}
//                   </span>

//                   <div className={style.mobileSubmenu}>
//                     {item.submenu.map((sub) => (
//                       <Link
//                         key={sub.title}
//                         href={sub.href}
//                         className={style.mobileLink}
//                         onClick={closeMenu}
//                       >
//                         {sub.title}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               );
//             }

//             return (
//               <Link
//                 key={item.title}
//                 href={item.href}
//                 className={style.mobileLink}
//                 onClick={closeMenu}
//               >
//                 {item.title}
//               </Link>
//             );
//           })}

//           <Link
//             href="/muraciet"
//             className={style.mobileApplicationLink}
//             onClick={closeMenu}
//           >
//             Onlayn Müraciət
//           </Link>
//         </nav>
//       </div>
//     </>
//   );
// }
"use client";

import Link from "next/link";
import style from "./header.module.scss";
import { navLinks } from "./data";

export default function MobileMenu({
  isOpen,
  setIsOpen,
  menuButtonRef,
}) {
  const closeMenu = () => {
    setIsOpen(false);

    requestAnimationFrame(() => {
      menuButtonRef?.current?.focus();
    });
  };

  return (
    <>
      {isOpen && (
        <div
          className={style.overlay}
          onClick={closeMenu}
        />
      )}

      <div
        id="mobile-navigation"
        className={`
          ${style.mobileMenu}
          ${isOpen ? style.mobileOpen : ""}
        `}
        aria-hidden={!isOpen}
      inert={!isOpen}
      >
        <nav
          aria-label="Mobil naviqasiya"
          className={style.mobileNav}
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
                        onClick={closeMenu}
                        tabIndex={isOpen ? 0 : -1}
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
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.title}
              </Link>
            );
          })}

          <Link
            href="/muraciet"
            className={style.mobileApplicationLink}
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            Onlayn Müraciət
          </Link>
        </nav>
      </div>
    </>
  );
}