let menu = document.getElementById('barMenu');
menu.addEventListener('click', borgerMenu);

function borgerMenu() {
    menu.classList.toggle('change');
    document.getElementById('menu').classList.toggle('change');
    document.getElementById('bg').classList.toggle('change-bg');
};

let input = document.getElementsByClassName('fill');
let but = document.getElementById('detalis').addEventListener('click', getData);

function getData (){
    let data = [];
    for (let i = 0; i < input.length; i++) {
        data[i] = input[i].value;
    }
    checkAge(input[3]);
    printData(data);
}

function printData (data){
    let fillForm = document.getElementsByClassName('print');
    for (let i = 0; i < input.length-1; i++){
        fillForm[i].innerHTML += data[i];
    }
}

//age
function checkAge(age) {
    let img = document.getElementById('ageImg');
    if (age.value >= 18) {
        img.style.display = 'block';
    }
    console.log(img);
}

// scroll
window.addEventListener('scroll', funScroll);

function funScroll (){
    let yScroll = window.pageYOffset;

    if ( yScroll >= 500 ) {
        alert('You are going down!');
    } else {
        style.display = 'none';
    }
}









