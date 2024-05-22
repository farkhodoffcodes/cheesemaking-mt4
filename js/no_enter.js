let ckickMe = document.querySelector('.ckickMe');
let retsept = document.querySelector('.retsept__container');
let tavsiv = document.querySelector('.sir__tavsiv');
let popular = document.querySelector('.mashxur__retseptlar');

ckickMe.addEventListener('click', () => {
    retsept.classList.toggle('d-block')
    popular.classList.toggle('d-none')
    tavsiv.classList.toggle('d-none')
})