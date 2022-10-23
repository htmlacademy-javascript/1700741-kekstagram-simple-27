//  В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива
// из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

// Структура каждого объекта должна быть следующей:

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.

// определяем константы и переменные
const numberLikesLower = 15;
const numberLikesUpper = 200;
const numberCommentsLower = 0;
const numberCommentsUpper = 200;

// заводим массив из фотографий с описанием, пока пустой

const galleryPhotos = [];

// делаем массив описания

const description = [
  'В одном селе',
  'Возле Блудова болота',
  'В районе города Переславля-Залесского',
  'осиротели двое',
  'Их мать',
  'Отец',
  'Мы жили в этом селе',
  'Через один дом',
  'Мы тоже вместе с другими',
  'Они были очень милые',
  'Настя',
  'Золотая Курочка',
  'Волосы',
  'веснушки по всему лицу',
  'золотые монетки',
  'Митраша',
  'десять лет с хвостиком',
  'Он был коротенький, но очень плотный',
  'Лобастый',
  'Мальчик упрямый и сильный',
  'Мужичок в мешочке',
  'Учителя в школе',
  'В золотых веснушках',
  'Крестьянское хозяйство',
  'Изба пятистенная'
];

// делаем функцию  для определения случайного числа

// можно ли эту функцию сделать стрелочной?

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

const getElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// делаем функцию для генерации массива фото с описанием

const generateGalleryPhotos = (numberPhotos) => {
  for (let i = 1; i <= numberPhotos; i++) {
    const photosWithDescription = {
      id: +i,
      url: `photos/${i}.jpg`,
      description: getElement(description),
      likes: +getRandomPositiveInteger(numberLikesLower, numberLikesUpper),
      comments: +getRandomPositiveInteger(numberCommentsLower, numberCommentsUpper)
    };
    galleryPhotos.push(photosWithDescription);
  }
  return galleryPhotos;
};

generateGalleryPhotos(25);
console.log(generateGalleryPhotos(25));
