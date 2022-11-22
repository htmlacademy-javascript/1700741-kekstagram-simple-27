/*2.3. Комментарий:
комментарий обязателен;
длина комментария не может быть меньше 20 символов;
длина комментария не может составлять больше 140 символов.*/

const imgUploadForm = document.querySelector('.img-upload__form');

new Pristine(imgUploadForm);

const pristine = new Pristine(imgUploadForm, {
  classTo: 'textDescription__element',
  errorTextParent: 'textDescription__element',
  errorTextClass: 'textDescription__element__error-text',
});

const validateComments = () => {imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
};

export {validateComments};
