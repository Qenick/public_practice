//wyświetl proste okno z pytaniem Jak masz na imię?, a odpowiedz przechowaj w zmiennej name
const name = prompt('Jak masz na imię?');


//zamień treść całego dom w js na dupa;
document.write('dupa');

//do okna dodaj event który wykryje zmianę wielkości okna i zaloguje szerokość okna

window.addEventListener('resize', function() {
    console.log(window.innerWidth);
})



//na myDiv dodaj event który zaloguje położenie myszy w x gdy znajdzie się nad elementem

myDiv.addEventListener('mousemove', function(event) {
    console.log(event.clientX);
})


//wybierz ostatnie dziecko elementu myDiv
myDiv.lastElementChild;



//wybierz pierwsze dziecko elementu myDiv

myDiv.firstElementChild;




//zwróć tablicę z dziećmi elementu zapisanego w myDiv

myDiv.children;




//z elementu zapisanego w myDiv przejdź do wcześniejszego rodzeństwa
myDiv.previousElementSibling;




//z elementu zapisanego w myDiv przejdź do kolejnego rodzeństwa

myDiv.nextElementSibling;



// z elementu zapisanego w myDiv dostań się do rodzica

myDiv.parentElement;

//dodaj event aby po załadowaniu się DOM strony logowało ok

document.addEventListener('DOMContentLoaded', function() {
    console.log('ok');
})


// dla każdego elementu z listy array podepnij zdarzenie które po klinięciu przęłączy klasę elementu red. Zablokuj bąbelkowanie.

array.forEach( el => el.addEventListener('click', function(event) {
    this.classList.toggle('red');
    event.stopPropagation();
}))

//DOTĄD SKOPIOWANO FISZKI