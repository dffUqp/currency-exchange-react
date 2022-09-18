function getOnlyNumbers(value) {
  value = value
    .replace(',', '.')
    // eslint-disable-next-line
    .replace(/[^\d\.]/g, '')
    .replace(/\./, 'x')
    .replace(/\./g, '')
    .replace(/x/, '.');

  if (value === '' || value === '.' || value.length >= 16) {
    return value.substring(0, value.length - 1);;
  }

  return value;
}

export default getOnlyNumbers;
