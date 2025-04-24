const toggle =document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', ()=>{
menu.classList.toggle('show');
});

// Slider com setas
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');

function mostrarSlideManual(index) {
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.classList.remove('ativo');
        if (i === slideIndex) slide.classList.add('ativo');
    });
}

function proximoSlide() {
    mostrarSlideManual(slideIndex + 1);
}

function slideAnterior() {
    mostrarSlideManual(slideIndex - 1);
}

anteriorBtn.addEventListener('click', slideAnterior);
proximoBtn.addEventListener('click', proximoSlide);

// Troca automática a cada 5 segundos
setInterval(proximoSlide, 5000);
mostrarSlideManual(slideIndex); // Inicia com o primeiro slide

const modoBtn = document.getElementById('modo-btn');

modoBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Altera o ícone também
    modoBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
