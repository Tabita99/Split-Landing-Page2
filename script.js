const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// mouseenter = to hover
// make the left side of the page wider
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
// remove the width when mouse hover done
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

// repeat the same for the right side
right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
