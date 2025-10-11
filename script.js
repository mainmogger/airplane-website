function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}

const images = [
  'Images/Image1.jpg',
  'Images/image2.jpg',
  'Images/image3.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage');

function showImage(index) {
  sliderImage.style.opacity = 0;
  setTimeout(() => {
    sliderImage.src = images[index];
    sliderImage.style.opacity = 1;
  }, 200);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hidden');
  document.body.classList.add('loaded');
});
