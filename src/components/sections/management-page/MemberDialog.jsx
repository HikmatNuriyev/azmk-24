"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import style from "./managementPage.module.scss";

export default function MemberDialog({ person, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    if (person && !el.open) el.showModal();
    if (!person && el.open) el.close();
  }, [person]);

  useEffect(() => {
    document.body.style.overflow = person ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [person]);

  return (
    <dialog
      ref={dialogRef}
      className={style.dialog}
      aria-labelledby="member-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      {person && (
        <div className={style.dialogInner}>
          <button
            type="button"
            className={style.close}
            onClick={onClose}
            aria-label="Bağla"
          >
            <X aria-hidden="true" />
          </button>

          <div className={style.dialogPhoto}>
            <Image
              src={person.image}
              alt=""
              width={640}
              height={800}
              sizes="(max-width: 720px) 100vw, 300px"
            />
          </div>

          <div className={style.dialogBody}>
            <h2 id="member-dialog-title" className={style.dialogName}>
              {person.name}
            </h2>

            <p className={style.dialogPosition}>{person.position}</p>

            {person.bio && <p className={style.dialogBio}>{person.bio}</p>}

            <dl className={style.dialogMeta}>
              {person.education && (
                <div>
                  <dt>Təhsil</dt>
                  <dd>{person.education}</dd>
                </div>
              )}

            
            </dl>
          </div>
        </div>
      )}
    </dialog>
  );
}
