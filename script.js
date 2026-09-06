const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  
    " The Holiday- a warm ,charming story about two women who swap homes for Christmas . ",
"Love Actually-Multiple interconnected love stories set during  .",
"Home Alone -Kevin versus the burglars ; endlessly rewatchable",
"The Polar Express-Magical train ride to the North Pole.",
"Elf -Buddy the Elf spreads holiday cheer in New York",

"Klaus-Beautiful animations and a suprisingly emotional story.",
"Last Holiday-uplifiting,funny and heartwarming ",
"Little Women -full of cozy winter vibes and family warmth ",
"The Family Stone - Chaotic family Christmas gathering with lots of heart",
"A Christmas Carol- A classic holiday redemption story",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});
