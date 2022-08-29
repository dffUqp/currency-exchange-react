function getOnlyNumbers(value) {
  value = value
    .replace(',', '.')
    // eslint-disable-next-line
    .replace(/[^\d\.]/g, '')
    .replace(/\./, 'x')
    .replace(/\./g, '')
    .replace(/x/, '.');

  if (value === '' || value === '.' || value.length >= 16) {
    return '';
  }

  return value;
}

export default getOnlyNumbers;
