export function formatCurrency(value) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}