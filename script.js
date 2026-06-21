document.addEventListener("DOMContentLoaded", function () {

  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(i) {
    slides.forEach(slide => slide.style.display = "none");

    index = i;

    if (index >= slides.length) index = 0;

    slides[index].style.display = "block";
  }

  
  showSlide(index);


  setInterval(() => {
    index++;
    showSlide(index);
  }, 3000);

});