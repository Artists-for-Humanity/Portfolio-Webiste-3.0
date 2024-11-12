// Log markers for debugging
console.log("Reachme00");
console.log("Reachme01");
console.log("Reachme02");

// Anime.js animations
const bodyLines = anime({
  targets: ".soccer1_line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 500,
  delay: (el, i) => 1000 + i * 20,
  autoplay: false,
});

const ballLines = anime({
  targets: ".soccer1ball > .soccer1ball-line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 500,
  delay: (el, i) => 1000 + i * 140,
  autoplay: false,
});

const backLines = anime({
  targets: ".soccer1_extra-line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 500,
  delay: (el, i) => 1000 + i * 50,
  autoplay: false,
});

// Step 1: Ball animation timeline
function step1_ballTL() {
  return gsap.timeline({
    onStart: () => ballLines.play(),
  })
    .fromTo(
      ".soccer1ball > g:nth-child(1) > *",
      { scale: 0 },
      { scale: 1, duration: 0.5, stagger: 0.2 }
    )
    .to(".soccer1ball", {
      rotation: 760,
      x: 2000,
      transformOrigin: "50% 50%",
      ease: "expo.out",
      duration: 3,
      delay: 1,
    })
    .to(".soccer1ball", { autoAlpha: 0, duration: 1 }, "-=1");
}

// Step 1: Back lines animation timeline
function step1_backTL() {
  return gsap.timeline({
    onStart: () => backLines.play(),
    onComplete: () => {
      console.log("completed");
      backLines.reverse();
      gsap.to(".soccer1_extra-line > g", {
        scale: 0,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        stagger: 0.2,
        duration: 1,
      });
    },
  })
    .fromTo(
      ".soccer1_extra-line > g",
      { x: -3500, rotation: -1000, transformOrigin: "50% 50%" },
      { x: 0, rotation: 0, ease: "power4.out", duration: 1, stagger: 0.5 }
    );
}

// Step 1: Body lines animation timeline
function step1_bodyTL() {
  return gsap.timeline({
    onStart: () => bodyLines.play(),
    onComplete: () => {
      bodyLines.reverse();
      gsap.to(".soccer1_fill > *", {
        scale: 0,
        transformOrigin: "50% 50%",
        stagger: 0.01,
        delay: 2,
        duration: 0.2,
      });
    },
  })
    .fromTo(
      ".soccer1_fill > *",
      { x: -4500 },
      { x: 0, duration: 0.3, stagger: 0.03 }
    );
}

// Step 2: Soccer 2 body lines animation timeline
const step2_bodyLines = anime({
  targets: ".soccer2_line path",
  strokeDashoffset: [anime.setDashoffset, 99200],
  easing: "easeInOutSine",
  duration: 2500,
  delay: (el, i) => 1000 + i * 20,
  autoplay: false,
});

const step2_bodyExtra = anime({
  targets: ".soccer2_extra-line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: (el, i) => 1000 + i * 20,
  autoplay: false,
});

function step2_bodyTL() {
  return gsap.timeline({
    onStart: () => {
      step2_bodyExtra.play();
      step2_bodyLines.play();
    },
  })
    .fromTo(
      ".soccer2_fill > *",
      { scale: 0, transformOrigin: "100% 100%" },
      { scale: 1, duration: 0.2, stagger: 0.03 }
    )
    .to(".soccer2_fill", {
      onStart: () => {
        step2_bodyExtra.reverse();
        step2_bodyLines.reverse();
        step2_bodyExtra.play();
        step2_bodyLines.play();
      },
      duration: 1,
    })
    .to(".soccer2_fill > *", { scale: 0, delay: 2, duration: 0.2, stagger: 0.01 });
}

// Step 3: Basket animation timeline
const step3_bodyLines = anime({
  targets: ".basket_extra-line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: (el, i) => i * 20,
  autoplay: false,
});

const step3_extraLines = anime({
  targets: ".basket_line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3500,
  delay: (el, i) => i * 20,
  autoplay: false,
});

function step3_bodyTL() {
  return gsap.timeline({
    onStart: () => {
      step3_bodyLines.play();
      step3_extraLines.play();
    },
  })
    .fromTo(
      ".basket_fill > *",
      { scale: 0, y: 300, transformOrigin: "0% 0%" },
      { scale: 1, y: 0, duration: 0.3, stagger: -0.008 }
    );
}

// Utilities for visibility
function hide(elem) {
  return gsap.to(elem, { autoAlpha: 0, display: "none", duration: 0.2 });
}

function show(elem) {
  return gsap.to(elem, { autoAlpha: 1, display: "block", duration: 0.2 });
}

// Main timeline for animations
function init() {
  const mainTL = gsap.timeline();

  mainTL
    .add(step1_bodyTL(), "step1")
    .add(step1_backTL(), "step1")
    .add(step1_ballTL(), "step1")
    .add(hide("#soccer1"), "step2")
    .add(show("#soccer2"), "step3")
    .add(step2_bodyTL(), "step4")
    .add(hide("#soccer2"), "step5")
    .add(show("#basket"), "step6")
    .add(step3_bodyTL(), "step7");

  mainTL.play();
}

// DOMContentLoaded to ensure DOM is fully loaded before animations
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded, initializing...");

  // Initial visibility settings
  gsap.set("#soccer1", { autoAlpha: 1 });
  gsap.set(["#soccer2", "#basket"], { autoAlpha: 0, display: "none" });

  init(); // Start the animation timeline
});

console.log("Reachme10");