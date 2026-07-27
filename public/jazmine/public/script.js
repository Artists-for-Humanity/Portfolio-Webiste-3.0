document.addEventListener("DOMContentLoaded", function() {
  const draggableElements = document.querySelectorAll(".window-active");

  draggableElements.forEach((element) => {
    element.addEventListener("mousedown", onMouseDown);
  });

  let offsetX, offsetY;
  let draggedElement = null;

  function onMouseDown(e) {
    console.log("clicked")
    if (e.target.classList.contains("title-bar")) {
      draggedElement = e.currentTarget;
      const rect = draggedElement.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      draggedElement.classList.add("dragging");
      bringToFront(draggedElement);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  }

  function onMouseMove(e) {
    if (draggedElement) {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      draggedElement.style.left = `${newX}px`;
      draggedElement.style.top = `${newY}px`;
    }
  }

  function onMouseUp() {
    if (draggedElement) {
      draggedElement.classList.remove("dragging");
      draggedElement = null;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  }

  function bringToFront(element) {
    const divs = document.querySelectorAll(".window-active");
    let highestZIndex = 0;

    divs.forEach((div) => {
      const zIndex = parseInt(window.getComputedStyle(div).zIndex, 10);
      if (!isNaN(zIndex) && zIndex > highestZIndex) {
        highestZIndex = zIndex;
      }
    });

    element.style.zIndex = highestZIndex + 1;
  }
});

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('clock').textContent = timeString;
}



// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.getElementById("toggleButton");
//   const images = document.querySelectorAll(".toggle-image");
  
//   let imagesVisible = false;
  
//   toggleButton.addEventListener("click", function () {
//       if (imagesVisible) {
//           images.forEach(image => {
//               image.style.display = "none";
//           });
//       } else {
//           images.forEach(image => {
//               image.style.display = "block";
//           });
//       }
//       imagesVisible = !imagesVisible;
//   });
// });

// setInterval(updateTime, 1000); // Update every 1000ms (1 second)
// updateTime(); // Initial call to set the time immediately