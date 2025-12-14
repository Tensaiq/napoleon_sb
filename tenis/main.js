const carousel = document.querySelector('.carousel-window');

function carouselMove(positive = true) {
    const step = carousel.clientWidth; 
    carousel.scrollLeft = positive
        ? carousel.scrollLeft + step
        : carousel.scrollLeft - step;
}

console.log("test")

function toggleAccordion(btn) {
  btn.classList.toggle("active");

  const content = btn.nextElementSibling;
  content.classList.toggle("open");
}

const carousell = document.querySelector('.carousel__hack');

function carousellMove(positive = true) {
    const step = carousell.clientWidth; 
    carousell.scrollLeft = positive
        ? carousell.scrollLeft + step
        : carousell.scrollLeft - step;
}

const tabs = document.querySelectorAll('.rules__tab');
const contents = document.querySelectorAll('.rules__item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document
      .querySelector(`.rules__item[data-content="${id}"]`)
      .classList.add('active');
  });
});