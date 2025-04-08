let observeMe = null;
let observer = null;

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Element is in the viewport!');
      document.querySelector('.c-bike').classList.add('animate-bike');
      document.querySelector('.c-bike').classList.remove('animate-bike-end');
    } else {
      document.querySelector('.c-bike').classList.add('animate-bike-end');
      document.querySelector('.c-bike').classList.remove('animate-bike');
    }
  });
};

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(handleIntersection);

  if (observeMe) {
    observer.observe(observeMe);
  }
};

const teardownIntersectionObserver = () => {
  if (observer && observeMe) {
    observer.unobserve(observeMe);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  observeMe = document.querySelector('.observe-me');
  setupIntersectionObserver();
});

window.addEventListener('beforeunload', () => {
  teardownIntersectionObserver();
});