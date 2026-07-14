export function calculateLoan(amount, months, annualRate) {
  const monthlyRate = annualRate / 100 / 12;

  if (!amount || !months || !annualRate) {
    return {
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
    };
  }

  const monthlyPayment =
    amount *
    (monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - amount;

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
  };
}