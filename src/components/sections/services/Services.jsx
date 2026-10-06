




import Image from "next/image";


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