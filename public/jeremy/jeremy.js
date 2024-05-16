document.addEventListener("DOMContentLoaded", function () {
  const crumbledPaper = document.querySelector(".crumbledPaper");
  const pageOptions = document.querySelector(".pageOptions");

  crumbledPaper.addEventListener("mouseenter", function () {
    pageOptions.style.display = "flex";
  });

  crumbledPaper.addEventListener("mouseleave", function () {
    pageOptions.style.display = "none";
  });
});
