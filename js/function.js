
/* Функция для проверки длины строки */
function checkTheLine(theLine, lengthLine) {
  if (theLine.length <= lengthLine) {
    return true;
  }
  return false;
}
checkTheLine();

/* Функция для проверки, является ли строка палиндромом */

let isPalindrome = function () {
  let line = prompt('title', 'inter a line here');
  let smallLine = line
    .toLowerCase()
    .replaceAll(' ', '');
  for (let i = 0; i < smallLine.length / 2; i++) {
    if (smallLine[i] !== smallLine[smallLine.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
isPalindrome();

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN: */

let myNumber = function () {
  let line = prompt('title', 'Inter string');
  let lineParser = /[0-9]/g;
  let findedNumber = line.match(lineParser);
  if (findedNumber === null) {
    return NaN;
  }
  console.log(findedNumber.join(''));
}
myNumber();

/* Функция, которая принимает три параметра: исходную строку,
минимальную длину и строку с добавочными символами — и возвращает исходную строку,
дополненную указанными символами до заданной длины. Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.
*/

const getLine = (string, minLength, addLength) => {
  let line = minLength - string.length;
  if(line <= 0){
    return string;
  }
  return addLength.slice(0, line % addLength.length) + addLength.repeat(line
    / addLength.length) + string;
}
getLine();
