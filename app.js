const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');

// add click event on toggle
toggle .addEventListener('click', () => {
    ul.classList.toggle('nav__active');
});

const toggle1 = document.querySelector('.nav__wrapper__ul__li__a');
toggle1.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
})

const toggle2 = document.querySelector('.abt');
toggle2.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
})

const toggle3 = document.querySelector('.exp');
toggle3.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
})

const toggle4 = document.querySelector('.pjt');
toggle4.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
})

const toggle5 = document.querySelector('.skl');
toggle5.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
})

const toggle6 = document.querySelector('.cnt');
toggle6.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
})


// name typewrite effect
const nameElement = document.querySelector('.header__data__contents__heading');
const nameText = "Arif Al Monsor";
let start = 0;

const typeWrite = () => {
    if(start < nameText.length) {
        nameElement.innerHTML += nameText.charAt(start); 
        start++;
        setTimeout(typeWrite, 200);
    }
}
typeWrite();

// open and close model
const modelBtn = document.querySelector('.model-btn')
const model = document.querySelector(".model")
const modelClose = document.querySelector('.model__wrapper__close')

// open model
modelBtn.addEventListener('click', () => {
    model.style.display = "flex";
})

// close model
modelClose.addEventListener('click', () => {
    model.style.display = "none";
})

//get current Year
const year = document.querySelector('.year')
year.innerHTML = new Date().getFullYear();