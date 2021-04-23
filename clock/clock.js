document.addEventListener('DOMContentLoaded', () => {
    const mainDiv = document.querySelector('.about_clock');
    const divClock = document.createElement('div');
    const divDate = document.createElement('div');
    mainDiv.append(divClock);
    mainDiv.append(divDate);
    
    function showDate() {
        const currentDate = new Date();
        divDate.textContent = currentDate.toLocaleDateString();
    }
    showDate();

    function showClock() {
        const currentDate = new Date();
        divClock.textContent = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
    }

    let timerId;
    function startClock() {
        timerId = setInterval(showClock, 1000);
        showClock();
    }
    startClock();
});