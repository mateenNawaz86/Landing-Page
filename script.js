const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navBar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change');
});

function facebookRendering() {
    window.location.href = 'https://www.facebook.com/mateennawaz.mateenawaz/"';
}

function twitterRendering() {
    window.location.href = 'https://twitter.com/MateenMirani2';
}

function instaRendering() {
    window.location.href = 'https://www.instagram.com/merani_66/';
}

function youtubeRendering() {
    window.location.href = 'https://www.youtube.com/';
}