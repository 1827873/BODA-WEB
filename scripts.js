// scripts.js



    // Función para actualizar el reloj
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const weddingDate = new Date('July 19, 2025 07:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        // Cálculo de días, horas, minutos y segundos
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Mostrar el tiempo restante
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Si la fecha ya ha pasado
        if (timeLeft < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "¡Es el día de la boda!";
        }
    }

    // Actualizar el reloj cada segundo
    const interval = setInterval(updateCountdown, 1000);

