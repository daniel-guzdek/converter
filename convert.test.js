const convert = require('./main');

test("Binary representation of decimal number 10 is 1010", () => {
  expect(convert(10)).toBe('1010');
});

test("Binary representation of decimal number 234 is 11101010", () => {
  expect(convert(234)).toBe('11101010');
});

test("Binary representation of decimal number 244545634 is 1110100100110111100001100010", () => {
  expect(convert(244545634)).toBe('1110100100110111100001100010');
});