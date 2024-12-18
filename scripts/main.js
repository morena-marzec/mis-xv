document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('play-button');
    const audio = new Audio('ruta/a/tu/cancion.mp3');

    button.addEventListener('click', function() {
        audio.play();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const countdownDate = new Date("Feb 7, 2025 00:00:00").getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "¡El gran día ha llegado!";
        }
    }, 1000);
});