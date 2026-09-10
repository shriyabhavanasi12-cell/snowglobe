const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const snowContainer=document.getElementById("snow-container");
const snowButton= document.getElementById("snowButton");

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

let snowing=true;
let snowflakes=[];
for(let i=0; i< 100;i++){
  const flake=document.createElement("div");

  flake.classList.add("snowflake");
  flake.innerHTML="❄";

  flake.style.left=Math.random()*100+"vw";
  flake.style.animationDuration=(Math.random()*5+3)+"s";
  

  flake.style.animationDelay = "0s";
flake.style.animationPlayState = "running";

  snowContainer.appendChild(flake);
  snowflakes.push(flake);



}

snowButton.addEventListener("click",()=>{

snowing=!snowing;

snowflakes.forEach((flake)=>{
  flake.style.animationPlayState=
  snowing ? "running":"paused";

});

snowButton.textContent=
snowing? "Stop Snow": "Start Snow";




});

