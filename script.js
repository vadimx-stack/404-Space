document.addEventListener('DOMContentLoaded', function() {
    const astronaut = document.getElementById('astronaut');
    const ufo = document.getElementById('ufo');
    const container = document.querySelector('.container');

    container.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        astronaut.style.transform = `translateX(${x * 30 - 15}px) translateY(${y * 30 - 15}px) rotate(${x * 10}deg)`;
        ufo.style.transform = `translateX(${x * 50 - 25}px) translateY(${y * 30 - 15}px) rotate(${-15 + x * 10}deg)`;
    });

    ufo.addEventListener('click', function() {
        const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

        const beam = document.createElement('div');
        beam.style.position = 'absolute';
        beam.style.top = '25px';
        beam.style.left = '35px';
        beam.style.width = '10px';
        beam.style.height = '100px';
        beam.style.background = `linear-gradient(to bottom, ${randomColor}, transparent)`;
        beam.style.borderRadius = '5px';
        beam.style.transform = 'rotate(15deg)';
        beam.style.opacity = '0.7';
        beam.style.zIndex = '5';
        beam.style.animation = 'beam 2s linear forwards';

        const style = document.createElement('style');
        style.textContent = `
            @keyframes beam {
                0% {
                    height: 0;
                    opacity: 0.7;
                }
                50% {
                    height: 100px;
                    opacity: 0.7;
                }
                100% {
                    height: 100px;
                    opacity: 0;
                }
            }
        `;

        document.head.appendChild(style);
        ufo.appendChild(beam);

        setTimeout(() => {
            ufo.removeChild(beam);
        }, 2000);
    });

    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        document.querySelector('.stars').style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        document.querySelector('.stars2').style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        document.querySelector('.stars3').style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    });

    const meteors = document.querySelectorAll('.meteor-1, .meteor-2, .meteor-3, .meteor-4');

    function resetMeteor(meteor) {
        const delay = Math.random() * 10;
        const duration = 3 + Math.random() * 4;

        meteor.style.animation = 'none';
        meteor.offsetHeight;
        meteor.style.top = `${Math.random() * 80}%`;
        meteor.style.right = `${Math.random() * 30 + 10}%`;
        meteor.style.animation = `meteor ${duration}s linear ${delay}s infinite`;
    }

    meteors.forEach(resetMeteor);

    console.log('%c 🚀 Привет, путник! Ты нашел нашу секретную 404 страницу!', 'font-size:14px;color:#ff00ff;');
});