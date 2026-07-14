export const calculatorData = {
  consumer: {
    title: "İstehlak Krediti",
    minAmount: 100,
    maxAmount: 40000,
    defaultAmount: 10000,
    minMonth: 1,
    maxMonth: 84,
    defaultMonth: 36,
    minRate: 22,
    maxRate: 36,
    defaultRate: 26,
  },

  gold: {
    title: "Qızıl Lombardı",
    minAmount: 100,
    maxAmount: 100000,
    defaultAmount: 5000,
    minMonth: 1,
    maxMonth: 48,
    defaultMonth: 12,
    minRate: 34,
    maxRate: 48,
    defaultRate: 38,

    karats: [
      { label: "585 əyar", value: 585, pricePerGram: 70 },
      { label: "750 əyar", value: 750, pricePerGram: 90 },
      { label: "999 əyar", value: 999, pricePerGram: 120 },
    ],

    defaultWeight: 20,
    defaultKarat: 585,
    loanToValue: 0.75,
  },

  auto: {
    title: "AvtoLizinq",
    minAmount: 1000,
    maxAmount: 100000,
    defaultAmount: 30000,
    minMonth: 6,
    maxMonth: 48,
    defaultMonth: 24,
    minRate: 25,
    maxRate: 28,
    defaultRate: 26,
    initialPaymentRate: 20,
  },
};