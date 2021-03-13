//Variables 

let mobile_nav = document.getElementById('mobile_nav');
let menu_button = document.getElementById('menu_button');

//Page Scroll Animation Effect
new fullpage('#fullpage', {

    autoScrolling: true,
    navigation: true,
    keyboardScrolling: true,
});

//mobile navigation
function openMenu() {
    if (mobile_nav.style = "display: none;") {
        mobile_nav.style = "display:flex; justify-content:center; align-items:center; flex-direction:column;"
        menu_button.style = "display:none;"
    }
}

//Anchor tag bypass for portfolio links
function openDiligent() {
    window.open().location.href = "https://bjc705.github.io/diligentwebdesign/"
}

function openCurrent() {
    window.open().location.href = "https://bjc705.github.io/currentbmx/"
}

function openStreetSpots() {
    window.open().location.href = "https://bjc705.github.io/street-spots/"
}

function openFlappyPug() {
    window.open().location.href = "https://bjc705.github.io/flappypug/"
}

function openPacman() {
    window.open().location.href = "https://bjc705.github.io/pacman/"
}

function openStance() {
    window.open().location.href = "https://bjc705.github.io/chair/"
}

function openBeatMaker() {
    window.open().location.href = "https://bjc705.github.io/beat-maker/"
}

function openToDo() {
    window.open().location.href = "https://bjc705.github.io/todo/"
}

function openWeather() {
    window.open().location.href = "https://bjc705.github.io/weather/"
}

function openInsta() {
    window.open().location.href = "https://www.instagram.com/brentcurl705/"
}

function openLinkedin() {
    window.open().location.href = "https://www.linkedin.com/in/brentcurl"
}

function openGithub() {
    window.open().location.href = "https://github.com/BJC705"
}
