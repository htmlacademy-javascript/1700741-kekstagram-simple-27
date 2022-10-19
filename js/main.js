function getRandom (min, max) {
  if (min > max || min < 0 || max < 0) {return NaN;}
  return Math.floor(Math.random() * (max - min) + min);
}

getRandom(5,8);

function getRandomVariant (min, max) {
  if (min < 0 || max < 0) {return NaN;}

  if (min > max) {const a = min; min = max; max = a;}

  return Math.floor(Math.random() * (max - min) + min);
}

getRandomVariant(5,8);


function checkLenghtString (checkString, lenghtString) {
  if (checkString || lenghtString) {return NaN;}
  return (checkString < lenghtString);
}

checkLenghtString('hello', 5);

function getCoordinate (min, max, numberDecimalePlaces) {
  if (min > max || min < 0 || max < 0) {return NaN;}
  const random = Math.random() * (max - min) + min;
  return +random.toFixed(numberDecimalePlaces);
}

getCoordinate(1, 6, 7);
