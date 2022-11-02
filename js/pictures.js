import {galleryPhotos} from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureLink = pictureTemplate.querySelector('.picture');
const pictureImage = pictureTemplate.querySelector('.picture__img');
const pictureComments = pictureTemplate.querySelector('.picture__comments');
const pictureLikes = pictureTemplate.querySelector('.picture__likes');
const pictureDescription = pictureTemplate.querySelector('.picture__info');
const documentFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');


// Функция отрисовки картинки
// @param {Array} - массив из картинок
// @param {Array} - массив из узлов HTML


const createPictures = (photos) => {
  for (let i = 0; i < photos.length; i++) {
    const picture = pictureTemplate.cloneNode(true);
    pictureLink.textContent = photos[i].url;
    pictureImage.src = photos[i].url;
    pictureComments.textContent = photos[i].comments;
    pictureLikes.textContent = photos[i].likes;
    pictureDescription.textContent = photos[i].description;
    documentFragment.push(picture);
  }
  pictures.push(documentFragment);
};

createPictures(galleryPhotos);
