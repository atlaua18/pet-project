/* Установите ширину боковой навигации 250 пикселей, и левый край содержимого страницы - 250 пикселей. */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
  /* Установите ширину боковой навигации равной 0, и левое поле содержимого страницы - 0. */
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//   }

document.addEventListener('DOMContentLoaded', (e) => {
    let menuIcon = document.querySelector('.burger_menu');
    menuIcon.addEventListener('click', () => {
        document.getElementById("mySidenav").classList.toggle('sidenav250');
        document.getElementById("main").classList.toggle('main_content250');
    });
});