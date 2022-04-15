'use strict';

const MathFloor = require('#primordials/MathFloor');
const GetAlphabet = require('#internal/GetAlphabet');

const EncodeInt = (integer, targetCase) => {
  const alphabet = GetAlphabet(targetCase);
  let string = '';
  let carry = integer < 0 ? -integer : integer;
  while (carry) {
    const charIndex = carry % 32;
    const char = alphabet[charIndex];
    string = `${char}${string}`;
    carry = MathFloor(carry / 32);
  }
  return string.length ? string : '0';
}

module.exports = EncodeInt;