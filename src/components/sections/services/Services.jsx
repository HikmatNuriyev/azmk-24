
// Dizayn1

// import Image from "next/image";
// import Link from "next/link";

// import Container from "@/components/ui/container";

// import style from "./services.module.scss";
// import { servicesData } from "./servicesData";

// export default function Services() {
//   return (
//     <section
//       className={style.services}
//       aria-labelledby="services-title"
//     >
//       <Container>
//         <div className={style.heading}>
//           <h2 id="services-title">Məhsullarımız</h2>

//           <p>
//             AZMK-nın kredit və lizinq məhsulları ilə tanış olun.
//           </p>
//         </div>

//         <div className={style.grid}>
//           {servicesData.map((service) => (
//             <Link
//               key={service.title}
//               href={service.href}
//               className={style.card}
//             >
//               <div className={style.visual}>
//                 <Image
//                   src={service.image}
//                   alt={service.imageAlt}
//                   width={service.imageWidth}
//                   height={service.imageHeight}
//                   sizes="(max-width: 760px) 150px, (max-width: 1024px) 220px, 360px"
//                 />
//               </div>

//               <div className={style.cardContent}>
//                 <h3>{service.title}</h3>

//                 <p>{service.description}</p>

//                 <span className={style.more}>
//                   Məhsullara bax
//                   <span aria-hidden="true">→</span>
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
// =======================================================================================
// dizayn2
// import Link from "next/link";

// import Container from "@/components/ui/container";

// import style from "./services.module.scss";
// import { servicesData } from "./servicesData";

// export default function Services() {
//   return (
//     <section className={style.services} aria-labelledby="services-title">
//       <Container>
//         <div className={style.heading}>
//           <h2 id="services-title">Məhsullarımız</h2>
//           <p>AZMK-nın kredit və lizinq məhsulları ilə tanış olun.</p>
//         </div>

//         <ul className={style.rows}>
//           {servicesData.map((service, i) => (
//             <li key={service.title}>
//               <Link href={service.href} className={style.row}>
//                 <span className={style.index} aria-hidden="true">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>

//                 <span className={style.main}>
//                   <span className={style.title}>{service.title}</span>
//                   <span className={style.desc}>{service.description}</span>
//                 </span>

//                 {service.terms?.length > 0 && (
//                   <span className={style.terms}>
//                     {service.terms.map((t) => (
//                       <span key={t.label} className={style.term}>
//                         <span className={style.termLabel}>{t.label}</span>
//                         <span className={style.termValue}>{t.value}</span>
//                       </span>
//                     ))}
//                   </span>
//                 )}

//                 <span className={style.arrow} aria-hidden="true">
//                   →
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </section>
//   );
// }
// =======================================================================================







// Dizayn3
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/container";

import style from "./services.module.scss";
import { getCampaigns } from "./campaigns";

export default async function Campaigns() {
  const items = await getCampaigns();
  if (items.length === 0) return null;

  return (
    <section className={style.campaigns} aria-labelledby="campaigns-title">
      <Container>
        <div className={style.heading}>
          <h2 id="campaigns-title">Kampaniyalar</h2>
        
        </div>

        <ul className={style.grid}>
          {items.map((item) => (
            <li key={item.id}>
              <div href={item.href} className={style.card}>
                <span className={style.visual}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={1280}
                    height={1600}
                    sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  />
                </span>

                <span className={style.body}>
                  <span className={style.title}>{item.title}</span>
                  <span className={style.caption}>{item.caption}</span>
                  
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}