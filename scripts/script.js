//CATALOG MAIN SLIDER
const wrapper = document.querySelector(".slider-wrapper");
const prevBtn = document.querySelector(".slider-btn-prev");
const nextBtn = document.querySelector(".slider-btn-next");
const cardWidth = 460;

let scrollPosition = 0;

nextBtn.addEventListener("click", () => {
  scrollPosition += cardWidth;

  if (scrollPosition > wrapper.scrollWidth - wrapper.clientWidth) {
    scrollPosition = wrapper.scrollWidth - wrapper.clientWidth;
  }

  wrapper.style.transform = `translateX(-${scrollPosition}px)`;
});

prevBtn.addEventListener("click", () => {
  scrollPosition -= cardWidth;

  if (scrollPosition < 0) scrollPosition = 0;

  wrapper.style.transform = `translateX(-${scrollPosition}px)`;
});

//REVIEWS SLIDER
const reviewsWrapper = document.querySelector(".reviews-slider-wrapper");
const reviewsPrevBtn = document.querySelector(".reviews-btn-prev");
const reviewsNextBtn = document.querySelector(".reviews-btn-next");
const reviewWidth = 825;

let reviewsPosition = 0;

reviewsNextBtn.addEventListener("click", () => {
  reviewsPosition += reviewWidth;

  if (
    reviewsPosition >
    reviewsWrapper.scrollWidth - reviewsWrapper.clientWidth
  ) {
    reviewsPosition = reviewsWrapper.scrollWidth - reviewsWrapper.clientWidth;
  }

  reviewsWrapper.style.transform = `translateX(-${reviewsPosition}px)`;
});

reviewsPrevBtn.addEventListener("click", () => {
  reviewsPosition -= reviewWidth;

  if (reviewsPosition < 0) reviewsPosition = 0;

  reviewsWrapper.style.transform = `translateX(-${reviewsPosition}px)`;
});
