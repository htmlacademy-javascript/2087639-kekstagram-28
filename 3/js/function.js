
/* Функция для проверки длины строки */
function checkStringLength(theLine, lengthLine) {
  if (theLine.length <= lengthLine) {
    return theLine.length <= lengthLine;
  } return false;
}
console.log(checkStringLength());

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
console.log(isPalindrome());

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN: */

const myNumber = function (line) {
  const lineParser = /[0-9]/g;
  const findedNumber = line.match(lineParser);
  if (findedNumber === null) {
    return NaN;
  }
  console.log(findedNumber.join(''));
};
console.log(myNumber());

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
console.log(addSymbolsToString());
