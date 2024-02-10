// JavaScript file (e.g., script.js)

// Define the letters constant
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Initialize the interval variable
let interval = null;

// Function to animate the text
function animateText(element) {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return element.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= element.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Find the h1 element and trigger the animation
  const h1Element = document.querySelector("h1");
  animateText(h1Element);
});

// Event listener for mouseover event on the h1 element
document.querySelector("h1").onmouseover = (event) => {
  // Trigger the animation function
  animateText(event.target);
};

// navbar
(function () {
  const link = document.querySelectorAll("nav > .hover-this");
  const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const span = this.querySelector("span");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));
  window.addEventListener("mousemove", editCursor);
})();
