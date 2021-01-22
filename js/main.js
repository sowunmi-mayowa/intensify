const button = document.querySelector("#menu");
const cancel = document.querySelector(".cancel");
button.addEventListener('click', showMenu);


function showMenu(){
document.querySelector(".mobile-nav").style.left = '-250px'

if (document.querySelector(".mobile-nav").style.left == '-250px') {
        document.querySelector(".mobile-nav").style.left = '0'
    }
    else{
        document.querySelector(".mobile-nav").style.left = '-250px'
    }
}

cancel.addEventListener('click', removeMenu);

function removeMenu(){
if (document.querySelector(".mobile-nav").style.left == '0px') {
    document.querySelector(".mobile-nav").style.left= '-250px'
    }
}