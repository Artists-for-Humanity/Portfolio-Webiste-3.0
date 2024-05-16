document.addEventListener("DOMContentLoaded", function () {
  const crumbledPaper = document.querySelector(".crumbledPaper");
  const pageOptions = document.querySelector(".pageOptions");

  crumbledPaper.addEventListener("mouseenter", function () {
    pageOptions.style.opacity = "1";
  });

  crumbledPaper.addEventListener("mouseleave", function () {
    pageOptions.style.opacity = "0";
  });
});
