export default (phoneNumber) => {
  const chunker = /^(1?)(.{0,3})(.{0,3})(.{0,4})(.*)$/;

  const number = phoneNumber.replace(/[^0-9]/g, '');
  const countryCodeExists = number[0] === '1';
  const chunkedNumber = number.match(chunker);
  let output = '';
  let index = countryCodeExists ? 1 : 2;
  // country code
  if (countryCodeExists) {
    output += '+1';
    index++;
  }
  // area code
  if (chunkedNumber[index].length > 0) {
    output += (countryCodeExists ? ' ' : '') + '(' + chunkedNumber[index++];
  }
  // first part
  if (chunkedNumber[index].length > 0) {
    output += ') ' + chunkedNumber[index++];
  }
  // second part
  if (chunkedNumber[index].length > 0) {
    output += '-' + chunkedNumber[index++];
  }
  // extension
  if (chunkedNumber[index].length > 0) {
    output += ' ext. ' + chunkedNumber[index];
  }
  return output;
};
