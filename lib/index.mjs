import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import HasIntrinsic from '#intrinsics/HasIntrinsic';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import Base32HexDecode from './decode.mjs';
import Base32HexDecodeInt from './decodeInt.mjs';
import Base32HexDecodeInto from './decodeInto.mjs';
import Base32HexEncode from './encode.mjs';
import Base32HexEncodeInt from './encodeInt.mjs';
import Base32HexIsValid from './isValid.mjs';
import Base32HexNormalize from './normalize.mjs';
import Base32HexValidate from './validate.mjs';

const ImportFunction = async name => {
  const module = await import(`./${name}.mjs`);
  return module.default;
}

const hasBigInt = HasIntrinsic('BigInt');

const Base32HexDecodeBigInt = hasBigInt ? await ImportFunction('decodeBigInt') : undefined;
const Base32HexEncodeBigInt = hasBigInt ? await ImportFunction('encodeBigInt') : undefined;

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const Base32Hex = ObjectCreate(ObjectPrototype, {
  decode: {
    value: Base32HexDecode
  },
  decodeBigInt: {
    value: Base32HexDecodeBigInt
  },
  decodeInt: {
    value: Base32HexDecodeInt
  },
  decodeInto: {
    value: Base32HexDecodeInto
  },
  encode: {
    value: Base32HexEncode
  },
  encodeBigInt: {
    value: Base32HexEncodeBigInt
  },
  encodeInt: {
    value: Base32HexEncodeInt
  },
  isValid: {
    value: Base32HexIsValid
  },
  normalize: {
    value: Base32HexNormalize
  },
  validate: {
    value: Base32HexValidate
  }
});
ReflectDefineProperty(Base32Hex, SymbolToStringTag, {
  value: 'Base32Hex'
});

export default Base32Hex;
