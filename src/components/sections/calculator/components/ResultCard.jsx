// import Link from "next/link";

// import style from "../calculator.module.scss";

// import Button from "@/components/ui/button";
// import { formatCurrency } from "../utils/formatCurrency";

// export default function ResultCard({
//   monthlyPayment,
//   totalPayment,
//   totalInterest,
// }) {
//   return (
//     <div className={style.resultCard}>
//       <span className={style.resultLabel}>
//         Təxmini aylıq ödəniş
//       </span>

//       <strong className={style.monthly}>
//         {formatCurrency(monthlyPayment)} AZN
//       </strong>

//       <div className={style.resultList}>
//         <div>
//           <span>Ümumi ödəniş</span>
//           <strong>{formatCurrency(totalPayment)} AZN</strong>
//         </div>

//         <div>
//           <span>Ümumi faiz</span>
//           <strong>{formatCurrency(totalInterest)} AZN</strong>
//         </div>
//       </div>

//       <p className={style.note}>
//         Hesablamalar məlumat xarakterlidir. Yekun şərtlər müraciət
//         qiymətləndirildikdən sonra müəyyən edilir.
//       </p>

//       <Link href="/muraciet">
//         {/* <Button variant="third" fullWidth size="lg">
//           Onlayn Müraciət
//         </Button> */}
//       </Link>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import style from "../calculator.module.scss";
import { formatCurrency } from "../utils/formatCurrency";

export default function ResultCard({
  monthlyPayment,
  totalPayment,
  totalInterest,
  product,
  amount,
  term,
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const summary =
    `Məhsul: ${product}\n` +
    `Məbləğ: ${formatCurrency(amount)} AZN\n` +
    `Müddət: ${term} ay\n` +
    `Təxmini aylıq ödəniş: ${formatCurrency(monthlyPayment)} AZN`;

  return (
    <div className={style.resultCard}>
      <span className={style.resultLabel}>Təxmini aylıq ödəniş</span>

      <strong className={style.monthly}>
        {formatCurrency(monthlyPayment)} AZN
      </strong>

      <div className={style.resultList}>
        <div>
          <span>Ümumi ödəniş</span>
          <strong>{formatCurrency(totalPayment)} AZN</strong>
        </div>

        <div>
          <span>Ümumi faiz</span>
          <strong>{formatCurrency(totalInterest)} AZN</strong>
        </div>
      </div>

      <p className={style.note}>
        Hesablamalar məlumat xarakterlidir. Yekun şərtlər müraciət
        qiymətləndirildikdən sonra müəyyən edilir.
      </p>

      <div className={style.nextStep}>
        <p>
          Müraciət üçün sağ aşağıdakı söhbət pəncərəsindən bizə yazın.
        </p>

        

        
      </div>
    </div>
  );
}