import {isEscapeDown} from './util.js';

const body = document.querySelector('body');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const scaleControlSmaller = imgUploadOverlay.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadOverlay.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadOverlay.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadOverlay.querySelector('.img-upload__preview');
const changeImgUploadPreview = imgUploadPreview.querySelector('img');
const effectsRadio = imgUploadOverlay.querySelectorAll('.effects__radio');
// const textDescription = imgUploadOverlay.querySelector('.text__description');

const onPhotoEscKeyDown = (evt) => {
  if (isEscapeDown(evt)) {
    evt.preventDefault();
    closeEditPhoto();
  }
};

function openEditPhoto () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPhotoEscKeyDown);
}

function closeEditPhoto () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPhotoEscKeyDown);
}

uploadFile.addEventListener('click', () => {
  openEditPhoto();
});

uploadCancel.addEventListener('click', () => {
  closeEditPhoto();
});

// Масштаб:

/*При нажатии на кнопки .scale__control--smaller и .scale__control--bigger должно изменяться значение поля .scale__control--value;
Значение должно изменяться с шагом в 25. Например, если значение поля установлено в 50%, после нажатия на «+», значение должно стать равным 75%.
Максимальное значение — 100%, минимальное — 25%. Значение по умолчанию — 100%;
При изменении значения поля .scale__control--value изображению внутри .img-upload__preview должен добавляться соответствующий стиль CSS,
который с помощью трансформации scale задаёт масштаб. Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано .
*/

const renderScaleImage = () => {

  scaleControlValue.value = '100%';
  let scaleControl = 1;

  scaleControlBigger.addEventListener('click', function () {
    scaleControl += 0.25;

    if (scaleControl > 1) {
      scaleControl = 1;} else {
      changeImgUploadPreview.style.transform = `scale(${scaleControl})`;
      scaleControlValue.value = `${scaleControl * 100}%`;
    }
  }
  );

  scaleControlSmaller.addEventListener('click', function () {
    scaleControl -= 0.25;

    if (scaleControl < 0.25) {
      scaleControl = 0.25;}

    changeImgUploadPreview.style.transform = `scale(${scaleControl})`;
    scaleControlValue.value = `${scaleControl * 100}%`;
  }
  );
};
/*2.2. Наложение эффекта на изображение:

По умолчанию должен быть выбран эффект «Оригинал».
На изображение может накладываться только один эффект.
При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio, добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту.
Например, если выбран эффект .effect-chrome, изображению нужно добавить класс effects__preview--chrome.*/

const renderEffectImage = () => {
  for (let i = 0; i < effectsRadio.length; i++) {
    effectsRadio[i].addEventListener('click', function () {
      if (effectsRadio[i].value !== 'none') {
        const effectChecked = `effects__preview--${effectsRadio[i].value}`;
        changeImgUploadPreview.classList.add(effectChecked);} else {
        changeImgUploadPreview.className = '';
      }
    });
  }
};


/*2.3. Комментарий:
комментарий обязателен;
длина комментария не может быть меньше 20 символов;
длина комментария не может составлять больше 140 символов.*/
const textDescription = document.querySelector('.text__description');

new Pristine(textDescription);

const pristine = new Pristine(wizardForm, {
  classTo: 'setup-wizard-form__element',
  errorTextParent: 'setup-wizard-form__element',
  errorTextClass: 'setup-wizard-form__error-text',
});

textDescription.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});


export {renderScaleImage};
export {renderEffectImage};


