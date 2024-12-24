document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('play-button');
    let audio = new Audio('static/music/bruno-mars.mp3');
    audio.volume = 0.3; // Set the volume to 30%
    audio.load(); // Preload the audio
    let isPlaying = false;
    let timeout;

    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    }

    function startLoading() {
        button.classList.add('loading');
        timeout = setTimeout(() => {
            toggleAudio();
            button.classList.remove('loading');
        }, 2000);
    }

    function cancelLoading() {
        clearTimeout(timeout);
        button.classList.remove('loading');
    }

    button.addEventListener('mousedown', startLoading);
    button.addEventListener('touchstart', startLoading);
    button.addEventListener('mouseup', cancelLoading);
    button.addEventListener('mouseleave', cancelLoading);
    button.addEventListener('touchend', cancelLoading);
    button.addEventListener('touchcancel', cancelLoading);
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