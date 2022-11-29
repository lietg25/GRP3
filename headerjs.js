let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let sslides = document.querySelectorAll('.home .sslide');
let index = 0;

function next(){
    sslides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    sslides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    sslides[index].classList.add('active');
}