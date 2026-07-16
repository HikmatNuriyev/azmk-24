"use client";

import { useState } from "react";

import style from "./applicationPage.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";

export default function ApplicationPage() {

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    product: "",
    amount: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Müraciətiniz qəbul olundu.");
  };

  return (
    <section className={style.application}>
      <Container>

        <div className={style.hero}>


          <Title as="h1" size="hero">
            Müraciətinizi Göndərin
          </Title>

          <p>
            Sizə uyğun məhsulu seçin və müraciət
            formasını doldurun.
          </p>

        </div>

        <div className={style.wrapper}>

          {/* LEFT */}
          <div className={style.info}>

            <div className={style.infoCard}>
              <strong>
                Sürətli baxılma
              </strong>

              <span>
                Müraciətlər operativ şəkildə yoxlanılır.
              </span>
            </div>

            <div className={style.infoCard}>
              <strong>
                Rahat proses
              </strong>

              <span>
                Sadə və rahat müraciət forması.
              </span>
            </div>

            <div className={style.infoCard}>
              <strong>
                Etibarlı xidmət
              </strong>

              <span>
                Təhlükəsiz və şəffaf maliyyə xidməti.
              </span>
            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className={style.form}
          >

            <div className={style.field}>
              <label>
                Fin kod
              </label>

              <input
                type="text"
                name="fullname"
                placeholder="Fin kodu daxil edin"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.field}>
              <label>
                Telefon nömrəsi
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="+994"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.field}>
              <label>
                Məhsul seçin
              </label>

              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
              >
                <option value="">
                  Seçin
                </option>

                <option value="istehlak">
                  İstehlak Krediti
                </option>

                <option value="lombard">
                  Qızıl Lombardı
                </option>

                <option value="lizinq">
                  Maşın Lizinqi
                </option>
              </select>
            </div>

            {/* <div className={style.field}>
              <label>
                Məbləğ
              </label>

              <input
                type="number"
                name="amount"
                placeholder="AZN"
                value={formData.amount}
                onChange={handleChange}
              />
            </div> */}
{/* 
            <div className={style.field}>
              <label>
                Əlavə qeyd
              </label>

              <textarea
                name="note"
                rows="5"
                placeholder="Əlavə məlumat"
                value={formData.note}
                onChange={handleChange}
              />
            </div> */}

            <Button
              type="submit"
              size="lg"
              fullWidth
            >
              Müraciəti Göndər
            </Button>

          </form>

        </div>

      </Container>
    </section>
  );
}