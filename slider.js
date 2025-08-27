document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let index = 0;

  function showSlide(i) {
    if (i >= images.length) index = 0;
    if (i < 0) index = images.length - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  slider.querySelector(".next").addEventListener("click", () => {
    index++;
    showSlide(index);
  });

  slider.querySelector(".prev").addEventListener("click", () => {
    index--;
    showSlide(index);
  });
});
