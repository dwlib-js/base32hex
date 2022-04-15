import RangeError from '#primordials/RangeError';

const ThrowInvalidCharacterError = index => {
  throw new RangeError(`Invalid Base32Hex character at index ${index}`);
}

export default ThrowInvalidCharacterError;
