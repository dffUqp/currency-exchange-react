function roundCurrency(number) {
  if (number <= 0) {
    return '';
  }

  return Math.round(number * 100) / 100;
}

export default roundCurrency;
