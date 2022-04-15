'use strict';

const LOWERCASE_ALPHABET = '0123456789abcdefghijklmnopqrstuv';
const UPPERCASE_ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUV';

const GetAlphabet = targetCase => targetCase === 'lower' ? LOWERCASE_ALPHABET : UPPERCASE_ALPHABET;

module.exports = GetAlphabet;
