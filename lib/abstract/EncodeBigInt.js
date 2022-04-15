'use strict';

const BigInt = require('#primordials/BigInt');
const GetAlphabet = require('#internal/GetAlphabet');

const BASE = BigInt(32);
const ZERO = BigInt(0);

const EncodeBigInt = (bigint, targetCase) => {
  const alphabet = GetAlphabet(targetCase);
  let string = '';
  let carry = bigint < ZERO ? -bigint : bigint;
  while (carry) {
    const charIndex = carry % BASE;
    const char = alphabet[charIndex];
    string = `${char}${string}`;
    carry /= BASE;
  }
  return string.length ? string : '0';
}

module.exports = EncodeBigInt;
