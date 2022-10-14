function getRandom (min, max) {
  if (min > max || min < 0 || max < 0) {return NaN;}
  return Math.floor(Math.random() * (max - min) + min);
}

getRandom(4,8);

function checkLenghtString (checkString, lenghtString) {
  return (checkString < lenghtString);
}

checkLenghtString('hello', 5);

