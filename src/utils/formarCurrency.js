const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US');

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
