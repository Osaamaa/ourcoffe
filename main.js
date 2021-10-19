let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active')
    cartItem.classList.remove('active');
    serch.classList.remove('active');
}

let serch = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    serch.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active')
}

let cartItem = document.querySelector('.cart-items-contaier');

document.querySelector('#cart-btn').onclick = ()=>{
    cartItem.classList.toggle('active');
    serch.classList.remove('active');
    navbar.classList.remove('active')
}

window.onscroll= () =>{
    cartItem.classList.remove('active');
    serch.classList.remove('active');
    navbar.classList.remove('active')
}