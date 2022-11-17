const pictureTemplate = document.querySelector('#picture').content;
const documentFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');


// ** Функция отрисовки картинки
// * @param {Array} - массив из картинок
// * @return {Array} - массив из узлов HTML


const renderPictures = (photos) => {
  for (let i = 0; i < photos.length; i++) {
    const picture = pictureTemplate.cloneNode(true);
    const pictureLink = picture.querySelector('.picture');
    const pictureImage = picture.querySelector('.picture__img');
    const pictureComments = picture.querySelector('.picture__comments');
    const pictureLikes = picture.querySelector('.picture__likes');
    const pictureDescription = picture.querySelector('.picture__info');
    pictureLink.textContent = photos[i].url;
    pictureImage.src = photos[i].url;
    pictureImage.alt = photos[i].description;
    pictureComments.textContent = photos[i].comments;
    pictureLikes.textContent = photos[i].likes;
    pictureDescription.textContent = photos[i].description;

    documentFragment.append(picture);
  }
  pictures.append(documentFragment);
};

export {renderPictures};
