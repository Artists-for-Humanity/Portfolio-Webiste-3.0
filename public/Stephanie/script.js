// This is for the right fading effect
const observer_right = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("fading_right");
    } else {
      entry.target.classList.add("fading_right");
    }
  });
});
const fadeElements_right = document.querySelectorAll(".fading_right");

fadeElements_right.forEach((element) => {
  observer_right.observe(element);
});

// This is for the left fading effect
const observer_left = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("fading_left");
    } else {
      entry.target.classList.add("fading_left");
    }
  });
});
const fadeElements_left = document.querySelectorAll(".fading_left");

fadeElements_left.forEach((element) => {
  observer_left.observe(element);
});

// This is for the up fading effect
const observer_up = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("fading_up");
    } else {
      entry.target.classList.add("fading_up");
    }
  });
});
const fadeElements_up = document.querySelectorAll(".fading_up");

fadeElements_up.forEach((element) => {
  observer_up.observe(element);
});

// This is for the down fading effect
const observer_down = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("fading_down");
    } else {
      entry.target.classList.add("fading_down");
    }
  });
});
const fadeElements_down = document.querySelectorAll(".fading_down");

fadeElements_down.forEach((element) => {
  observer_down.observe(element);
});
