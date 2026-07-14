import Link from "next/link";

import style from "../calculator.module.scss";

import Button from "@/components/ui/button";
import { formatCurrency } from "../utils/formatCurrency";

export default function ResultCard({
  monthlyPayment,
  totalPayment,
  totalInterest,
}) {
  return (
    <div className={style.resultCard}>
      <span className={style.resultLabel}>
        Təxmini aylıq ödəniş
      </span>

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

      <Link href="/muraciet">
        <Button fullWidth size="lg">
          Onlayn Müraciət
        </Button>
      </Link>
    </div>
  );
}