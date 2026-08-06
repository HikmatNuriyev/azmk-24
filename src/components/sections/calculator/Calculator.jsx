"use client";

import { useMemo, useState } from "react";

import style from "./calculator.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

import RangeInput from "./components/RangeInput";
import ResultCard from "./components/ResultCard";

import { calculatorData } from "./calculatorData";
import { calculateLoan } from "./utils/calculateLoan";
import { formatCurrency } from "./utils/formatCurrency";

export default function Calculator() {
  const [activeType, setActiveType] = useState("consumer");

  const activeData = calculatorData[activeType];

  const [amount, setAmount] = useState(calculatorData.consumer.defaultAmount);
  const [months, setMonths] = useState(calculatorData.consumer.defaultMonth);
  const [rate, setRate] = useState(calculatorData.consumer.defaultRate);

  const [goldWeight, setGoldWeight] = useState(
    calculatorData.gold.defaultWeight,
  );
  const [goldKarat, setGoldKarat] = useState(calculatorData.gold.defaultKarat);

  const [carType, setCarType] = useState("new");
  const [carModel, setCarModel] = useState("");

  const changeType = (type) => {
    const data = calculatorData[type];

    setActiveType(type);
    setAmount(data.defaultAmount);
    setMonths(data.defaultMonth);
    setRate(data.defaultRate);
  };

  const estimatedGoldAmount = useMemo(() => {
    const selectedKarat = calculatorData.gold.karats.find(
      (item) => item.value === Number(goldKarat),
    );

    if (!selectedKarat) return 0;

    return Math.round(
      goldWeight * selectedKarat.pricePerGram * calculatorData.gold.loanToValue,
    );
  }, [goldWeight, goldKarat]);

  const finalAmount = activeType === "gold" ? estimatedGoldAmount : amount;

  const principal =
    activeType === "auto"
      ? amount - amount * (calculatorData.auto.initialPaymentRate / 100)
      : finalAmount;

  const result = useMemo(() => {
    return calculateLoan(principal, months, rate);
  }, [principal, months, rate]);

  return (
    <section className={style.calculator}>
      <Container>
        <div className={style.heading}>
       

          <Title as="h2" size="lg">
            Kredit Kalkulyatoru
          </Title>

          <p>
            Məhsulu seçin, şərtləri daxil edin və təxmini aylıq ödənişi
            hesablayın.
          </p>
        </div>

        <div className={style.panel}>
          <div className={style.tabs}>
            {Object.entries(calculatorData).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => changeType(key)}
                className={activeType === key ? style.activeTab : ""}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className={style.wrapper}>
            <div className={style.controls}>
              {activeType === "gold" ? (
                <>
                  <div className={style.field}>
                    <label>Qızılın əyarı</label>

                    <select
                      value={goldKarat}
                      onChange={(e) => setGoldKarat(Number(e.target.value))}
                    >
                      {calculatorData.gold.karats.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <RangeInput
                    label="Qızılın çəkisi"
                    value={goldWeight}
                    min={1}
                    max={500}
                    step={0.1}
                    suffix="qram"
                    onChange={setGoldWeight}
                  />

                  <div className={style.estimatedBox}>
                    <span>Təxmini kredit məbləği</span>
                    <strong>{formatCurrency(estimatedGoldAmount)} ₼</strong>
                  </div>
                </>
              ) : (
                <RangeInput
                  key={activeType}
                  label={activeType === "auto" ? "Avtomobil dəyəri" : "Məbləğ"}
                  value={amount}
                  min={activeData.minAmount}
                  max={activeData.maxAmount}
                  step={100}
                  suffix="₼"
                  editable
                  onChange={setAmount}
                />
              )}

              {activeType === "auto" && (
                <>
                  <div className={style.field}>
                    <label>Avtomobil tipi</label>

                    <select
                      value={carType}
                      onChange={(e) => setCarType(e.target.value)}
                    >
                      <option value="new">Yeni avtomobil</option>
                      <option value="used">İkinci əl avtomobil</option>
                    </select>
                  </div>

                  <div className={style.field}>
                    <label>Avtomobil modeli</label>

                    <input
                      type="text"
                      placeholder="Məsələn: Toyota Camry"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                    />
                  </div>

                  <div className={style.estimatedBox}>
                    <span>İlkin ödəniş</span>
                    <strong>
                      {formatCurrency(
                        Math.round(
                          amount *
                            (calculatorData.auto.initialPaymentRate / 100),
                        ),
                      )} ₼
                    </strong>
                  </div>
                </>
              )}

              <RangeInput
                label="Müddət"
                value={months}
                min={activeData.minMonth}
                max={activeData.maxMonth}
                step={1}
                suffix="ay"
                onChange={setMonths}
              />

              <RangeInput
                label="Faiz dərəcəsi"
                value={rate}
                min={activeData.minRate}
                max={activeData.maxRate}
                step={0.1}
                suffix="%"
                onChange={setRate}
              />
            </div>

            <ResultCard
              monthlyPayment={result.monthlyPayment}
              totalPayment={result.totalPayment}
              totalInterest={result.totalInterest}
              activeType={activeType}
              amount={finalAmount}
              principal={principal}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
