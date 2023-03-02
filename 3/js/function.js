
/* Функция для проверки длины строки */
function checkStringLength(theLine, lengthLine) {
  return theLine.length <= lengthLine;
}
console.log(checkStringLength('проверяемая строка', 18));

/* Функция для проверки, является ли строка палиндромом */

const isPalindrome = function (line) {
  const smallLine = line.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < smallLine.length / 2; i++) {
    if (smallLine[i] !== smallLine[smallLine.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome('Лёша на полке клопа нашёл '));

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN: */

const myNumber = function (line) {
  const lineParser = /[0-9]/g;
  const findedNumber = line
  .toString(10)
  .match(lineParser);
  if (findedNumber === null) {
    return NaN;
  }
  return findedNumber.join('');
};
console.log(myNumber('1 кефир, 0.5 батона'));

/* Функция, которая принимает три параметра: исходную строку,
минимальную длину и строку с добавочными символами — и возвращает исходную строку,
дополненную указанными символами до заданной длины. Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.
*/

const addSymbolsToString = (string, minLength, addLength) => {
  const line = minLength - string.length;
  if(line <= 0){
    return string;
  }
  return addLength.slice(0, line % addLength.length) + addLength.repeat(line
    / addLength.length) + string;
};
console.log(addSymbolsToString('qwerty', 4, '0'));
