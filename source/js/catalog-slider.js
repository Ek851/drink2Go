//Слайдер промо-секции

const slider = document.querySelector('.slider__list');
const prevButton = document.querySelector('.slider__button--back');
const nextButton = document.querySelector('.slider__button--forward');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const tabs = Array.from(document.querySelectorAll('.slider-pagination__button'));
const slideCount = slides.length;
let slideIndex = 0;


// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Устанавливаем обработчики событий для кнопок пагинации
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    slideIndex = index;
    updateSlider();
    updateTab();
  });
}
);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  if (slideIndex > 1) {
    slideIndex -= 1;
  } else {
    slideIndex = 0;
  }
  updateSlider();
  updateTab();
}

// Функция для показа следующего слайда
function showNextSlide() {
  if (slideIndex < slideCount - 2) {
    slideIndex += 1;
  } else {
    slideIndex = slideCount - 1;
  }
  updateSlider();
  updateTab();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
      if (slideIndex < slideCount - 2) {
        prevButton.disabled = true;
        nextButton.disabled = false;
      }
      if (slideIndex > 1) {
        nextButton.disabled = true;
        prevButton.disabled = false;
      }
      if (slideIndex === 1) {
        nextButton.disabled = false;
        prevButton.disabled = false;
      }
    } else {
      slide.style.display = 'none';
    }
  });
}

// Функция для отображения активной кнопки пагинации
function updateTab() {
  tabs.forEach((tab, index) => {
    if (index === slideIndex) {
      tab.classList.add('slider-pagination__button--current');
    } else {
      tab.classList.remove('slider-pagination__button--current');
    }
  });
}

// Инициализация слайдера
updateSlider();
updateTab();
