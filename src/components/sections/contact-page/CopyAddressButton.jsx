"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import style from "./contactPage.module.scss";

export default function CopyAddressButton({ address }) {
  const [status, setStatus] = useState("idle");

  const copyAddress = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API is not available");
      }

      await navigator.clipboard.writeText(address);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const buttonLabel =
    status === "success"
      ? "Kopyalandı"
      : status === "error"
        ? "Yenidən cəhd et"
        : "Ünvanı kopyala";

  return (
    <>
      <button
        type="button"
        className={`${style.action} ${style.secondaryAction}`}
        onClick={copyAddress}
      >
        {status === "success" ? (
          <Check aria-hidden="true" />
        ) : (
          <Copy aria-hidden="true" />
        )}
        {buttonLabel}
      </button>

      <span className={style.srOnly} aria-live="polite" aria-atomic="true">
        {status === "success"
          ? "Ofis ünvanı mübadilə buferinə kopyalandı."
          : status === "error"
            ? "Ünvanı kopyalamaq mümkün olmadı."
            : ""}
      </span>
    </>
  );
}
