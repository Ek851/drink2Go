//Cлайдер с ценой
const sliderElement = document.querySelector('.range__scale');
const minValueElement = document.querySelector('.range__input--min');
const maxValueElement = document.querySelector('.range__input--max');
const buttonReset = document.querySelector('.catalog-form__button--reset');

noUiSlider.create(sliderElement, {
  step: 1,
  connect: true,
  start: [0, 900],
  range: {
    'min': [0],
    'max': [1000]
  }
});

sliderElement.noUiSlider.on('update', () => {
  minValueElement.value = Math.round(sliderElement.noUiSlider.get()[0]);
  maxValueElement.value = Math.round(sliderElement.noUiSlider.get()[1]);
});

minValueElement.addEventListener('change', () => {
  sliderElement.noUiSlider.set([minValueElement.value, null]);
});

maxValueElement.addEventListener('change', () => {
  sliderElement.noUiSlider.set([null, maxValueElement.value]);
});

buttonReset.addEventListener('click', () => {
  sliderElement.noUiSlider.reset();
});
