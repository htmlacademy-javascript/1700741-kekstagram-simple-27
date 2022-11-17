import {getRandomPositiveInteger} from './util.js';
import {getRandomElementArray} from './util.js';


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


const generateGalleryPhotos = (numberPhotos) => {
  for (let i = 1; i <= numberPhotos; i++) {
    const photosWithDescription = {
      id: +i,
      url: `photos/${i}.jpg`,
      description: getRandomElementArray(description),
      likes: +getRandomPositiveInteger(numberLikesLower, numberLikesUpper),
      comments: +getRandomPositiveInteger(numberCommentsLower, numberCommentsUpper)
    };
    galleryPhotos.push(photosWithDescription);
  }
  return galleryPhotos;
};
console.log(generateGalleryPhotos(25));
export {generateGalleryPhotos};
