document.addEventListener("DOMContentLoaded", function () {
  // Get the navigation links
  var navLinks = document.querySelectorAll(".navigation__link");

  // Attach click event listener to each navigation link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Get the checkbox element
      var checkbox = document.getElementById("navi-toggle");

      // Uncheck the checkbox
      checkbox.checked = false;
      console.log("button clicked!");
    });
  });
});
