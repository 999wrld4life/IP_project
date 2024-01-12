let currentIndex = 0;
const slider = document.querySelector(".slider");

function showSlide(index) {
  const translateValue = -index * 100 + "%";
  slider.style.transform = "translateX(" + translateValue + ")";
}

// Change slides every 3 seconds (adjust the interval as needed)
setInterval(() => {
  currentIndex =
    (currentIndex + 1) % document.querySelectorAll(".slider-item").length;
  showSlide(currentIndex);
}, 3000);

function nextSlide() {
  showSlide(currentIndex + 1);
  currentIndex = (currentIndex + 1) % imageContainers.length;
  imageContainers[currentIndex].style.display = "block";

  setTimeout(showSlide, 5000);
}

function prevSlide() {
  showSlide(currentIndex - 1);
  currentIndex = (currentIndex - 1) % imageContainers.length;
  imageContainers[currentIndex].style.display = "block";

  setTimeout(showSlide, 5000);
}

function exploreMore() {
  // Add code to handle "Explore More" button click
  alert("Explore More clicked!");
}
