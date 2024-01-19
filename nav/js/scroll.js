const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const topLink = document.getElementById("top");


window.onscroll = function () {
  if (
    document.body.scrollTop > 140 ||
    document.documentElement.scrollTop > 750
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};


scrollToTopBtn.addEventListener("click", function () {
  topLink.scrollIntoView({ behavior: "smooth" });
});