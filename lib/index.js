'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const HasIntrinsic = require('#intrinsics/HasIntrinsic');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const Base32HexDecode = require('./decode');
const Base32HexDecodeInt = require('./decodeInt');
const Base32HexDecodeInto = require('./decodeInto');
const Base32HexEncode = require('./encode');
const Base32HexEncodeInt = require('./encodeInt');
const Base32HexIsValid = require('./isValid');
const Base32HexNormalize = require('./normalize');
const Base32HexValidate = require('./validate');

const hasBigInt = HasIntrinsic('BigInt');

const Base32HexDecodeBigInt = hasBigInt ? require('./decodeBigInt') : undefined;
const Base32HexEncodeBigInt = hasBigInt ? require('./encodeBigInt') : undefined;

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

module.exports = Base32Hex;
