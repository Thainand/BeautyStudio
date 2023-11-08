/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



// Função para guardar os dados no localStorage
function guardarDatos() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Crie um objeto para armazenar os dados do formulário
    var formData = {
        nome: nome,
        email: email,
        phone: phone,
        message: message
    };
    var formDataArray = JSON.parse(localStorage.getItem("formData")) || [];
    formDataArray.push(formData);

    // Salva o array de dados no localStorage
    localStorage.setItem("formData", JSON.stringify(formDataArray));

    // Limpa o formulário
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('message').value = "";
}


document.getElementById("phone").addEventListener("input", function (event) {
    // Obtém o valor atual do campo de telefone
    let phoneValue = event.target.value;

    // Remove todos os caracteres que não são números
    phoneValue = phoneValue.replace(/\D/g, '');

    // Define o valor do campo com apenas os números
    event.target.value = phoneValue;
});


//tabla

// Obtém todos os títulos "h4Servicos" e suas tabelas associadas
const titulo = document.querySelectorAll('.h4Servicos');

titulo.forEach(header => {
    header.addEventListener('click', () => {
        const targetId = header.getAttribute('data-target');
        const table = document.getElementById(targetId);

        if (table.classList.contains('hidden')) {
            table.classList.remove('hidden');
        } else {
            table.classList.add('hidden');
        }
    });
});



/* //galeria
 const slider = document.querySelector('.slides');
const anteriorButton = document.getElementById('anterior');
const proximoButton = document.getElementById('proximo');
let slideIndex = 0;
const slideCount = slider.childElementCount;
let slideWidth = slider.clientWidth; // Cambiar const a let

function iniciarSlider() {
    setInterval(() => {
        proximoSlide();
    }, 4000);
}

anteriorButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
});

proximoButton.addEventListener('click', () => {
    proximoSlide();
});

function proximoSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    const deslocamento = -slideIndex * slideWidth;
    slider.style.transform = `translateX(${deslocamento}px)`;
}

window.addEventListener('resize', () => {
    slideWidth = slider.clientWidth; // Actualizar el ancho del slider
    updateSlider();
});

iniciarSlider(); 


var imageArray = [
    "./assets/img/portfolio/cabelo1.png",
    "./assets/img/portfolio/Cabelo2.png",
    "./assets/img/portfolio/cabelo3.png",
    "./assets/img/portfolio/cabelo4.png",
    "./assets/img/portfolio/cilios.png",
    "./assets/img/portfolio/cilios2.png",
    "./assets/img/portfolio/Sobrancelha1.png",
    "./assets/img/portfolio/sobrancelha2.png",
    "./assets/img/portfolio/unha2.png",
    "./assets/img/portfolio/unha3.png",
    "./assets/img/portfolio/unha4.png",
    "./assets/img/portfolio/outros1.png",


];

var currentIndex = 0;

function initializeGallery() {
    // Exibe a primeira imagem
    document.getElementById('imgid').src = imageArray[currentIndex];
}

// Função para mostrar a próxima imagem
function showNextImage() {
    currentIndex = (currentIndex + 1) % imageArray.length;
    document.getElementById('imgid').src = imageArray[currentIndex];
}

// Função para mostrar a imagem anterior
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    document.getElementById('imgid').src = imageArray[currentIndex];
}

// Chamamos a função de inicialização
initializeGallery();


 */

//galeria 
const slider = document.querySelector('.slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let slideIndex = 0;
const slideCount = slider.childElementCount;
let timer;

function startSlider() {
    timer = setInterval(() => {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
        if (slideIndex === 0) {
            // Quando voltar para a primeira imagem, pare o carrossel
            stopSlider();
        }
    }, 3000); // para ajustar a velocidade da transição automática
}

function stopSlider() {
    clearInterval(timer);
}

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    stopSlider();
    startSlider();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    stopSlider();
    startSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

startSlider();