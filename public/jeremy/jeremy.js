document.addEventListener("DOMContentLoaded", function () {
  const crumbledPaper = document.querySelector(".crumbledPaper");
  const pageOptions = document.querySelector(".pageOptions");

  
  crumbledPaper.addEventListener("mouseenter", function () {
    gt.style.display = "flex";
  });

  crumbledPaper.addEventListener("mouseleave", function () {
    gt.style.display = "none";
  });
});
