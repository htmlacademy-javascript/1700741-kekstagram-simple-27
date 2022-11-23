// Изменение глубины эффекта, накладываемого на изображение

import {effectsRadio} from './download.js';

// Поле для бегунка
const sliderElement = document.querySelector('.effect-level__slider');

// поле , где показывается число (степень интенсивности)

const valueElement = document.querySelector('.effect-level__value');

// начальное значение бегунка

valueElement.value = 100;

// создание бегунка

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

// изменение значения в зависимости от положения бегунка

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});


// Изменение бегунка (навешивание свойств на бегунок) в зависимости от того, какой радио кликнут
// Почему не сработало let effect of effectsRadio (не дал Lint)?
// Как сделать добавления px и % на старте и финише?
// Что именно надо выносить в экпорт?

const addStyleToRangeByEffectsRadio = () => {
  for (let i = 0; i < effectsRadio.length, i++;) {
    effectsRadio[i].addEventListener('click', () => {
      switch (effectsRadio[i].value) {
        case 'chrome':
        case 'sepia':
          sliderElement.noUiSlider.updateOptions({
            range: {
              min: 0,
              max: 1
            },
            start: 1,
            step: 0.1
          });
          break;
        case 'phobos':
          sliderElement.noUiSlider.updateOptions({
            range: {
              min: 0,
              max: 3
            },
            start: 3,
            step: 0.1
          });
          break;
        case 'heat':
          sliderElement.noUiSlider.updateOptions({
            range: {
              min: 0,
              max: 3
            },
            start: 3,
            step: 0.1
          });
          break;
        case 'marvin':
          sliderElement.noUiSlider.updateOptions({
            range: {
              min: 0,
              max: 1
            },
            start: 3,
            step: 0.1
          });
      }
    }
    );}
};

sliderElement.noUiSlider.destroy();

export {addStyleToRangeByEffectsRadio};

