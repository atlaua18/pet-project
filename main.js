import weather from "./weather.js";

document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('.burger_menu');
    menuIcon.addEventListener('click', () => {
        document.getElementById("mySidenav").classList.toggle('sidenav250');
        document.getElementById("main").classList.toggle('main_content250');
    });
});