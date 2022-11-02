// делаем функцию для определения случайного числам

// * @param {number} a,b — минимальное и максимальное число

// * @return {number} — случайное число


function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


// делаем функцию для определения элемента массива под случайным номером

// * @param {Array} elements — исходный массив

// * @return {*} — случайный элемент массива


const getElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getElement};

