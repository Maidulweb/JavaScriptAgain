const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
const prevShow = () => {
  counter--;
  logic();
};
const nextShow = () => {
  counter++;
  logic();
};
const logic = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    console.log(counter);
  });
};
