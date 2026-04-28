const cards_section = document.querySelector(".cards-section");
const left_arrow = document.querySelector("#left_arrow");
const right_arrow = document.querySelector("#right_arrow");

left_arrow.onclick = function() {
    cards_section.scrollLeft = cards_section.scrollLeft - 250;
};

right_arrow.onclick = function() {
    cards_section.scrollLeft = cards_section.scrollLeft + 250;
};

const frog_button = document.querySelector("#frog_button");
const frog_sound = document.querySelector("#frog_sound");

frog_button.onclick = function() {
    frog_sound.currentTime = 0;
    frog_sound.play();
};
