import DecodeIntBreak from './DecodeIntBreak.mjs';
import DecodeIntIgnore from './DecodeIntIgnore.mjs';
import DecodeIntStrict from './DecodeIntStrict.mjs';

const DecodeInt = (string, errorMode, allowedCase) => {
  const decodeInt = (
    errorMode === 'strict' ? DecodeIntStrict :
    errorMode === 'ignore' ? DecodeIntIgnore : DecodeIntBreak
  );
  return decodeInt(string, allowedCase);
}

export default DecodeInt;
