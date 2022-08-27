function getOnlyNumbers(value) {
  value = value
    .replace(',', '.')
    // eslint-disable-next-line
    .replace(/[^\d\.]/g, '')
    .replace(/\./, 'x')
    .replace(/\./g, '')
    .replace(/x/, '.');

  if (value === '' || value === '.') {
    return '';
  }

  return value;
}

export default getOnlyNumbers;
