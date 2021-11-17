



/*
* DOTĄD FISZKI DOTĄD FISZKI
* DOTĄD FISZKI DOTĄD FISZKI
* DOTĄD FISZKI DOTĄD FISZKI
* DOTĄD FISZKI DOTĄD FISZKI
* */





//zamien liczbe dzieciętną zapisaną jako string w zmiennej string na liczbe dzisiętną zapisaną w number
const number = parseFloat(string);


//zamien liczbe zapisaną jako string w zmiennej string na liczbe zapisaną w number

const number = parseInt(string);

//zamien w najkrótszy sposób liczbe zapisaną jako string w zmiennej string na liczbe zapisaną w number
const number = +string;


//napisz funkcje eventhandlera delAll która po kliknięciu usunie wszystloe dzieci z tablicy children które są
// dziećmi menu

function delAll() {
    for (let i = children.length - 1; i >= 0; i--) {
        menu.removeChild(childen[i]);
    }
}


//napisz funkcje delBtn która usunie przycisk na którym została wywołana
function delBtn() {
    this.parentElement.removeChild(this);
}


//do przycisków będących linkami zapisanych w buttons napisz funkcję removeRow do obsługi eventa który usunie cały rząd całego dziadka(ojca, ojca)
function removeRow(event) {
    event.preventDefault();
    const row = this.parentElement.parentElement;
    row.parentElement.removeChild(row);
}


//w elemencie parent usuń element zapisany w lastChild

parent.removeChild(lastChild);



//w elemencie zapisaneym w parent zamień jako dziecko zapisane w oldChild na  newItem
parent.replaceChild(newItem, oldChild);




//do elementu zapisanego w parent dodaj jako dziecko element zapisany w newItem przed dzieckiem zapisanym w child
parent.insertBefore(newItem, child);



//do elementu zapisanego w box dodaj jako ostatnie dziecko element zapisany w myDiv2
box.appendChild(myDiv2);



//sklonuj z całą zawartością element zapisany w myDiv do myDiv2;

const myDiv2 = myDiv.cloneNode(true);




//stwórz element div w dokumencie

document.createElement('div');




//dla wszystkich elementów zapisanych w divs dodaj eventy 2 na wejście i wyjście hoverIn i hoverOut

divs.forEach( el => {
    el.addEventListener('mouseenter', hoverIn);
    el.addEventListener('mouseleave', hoverOut);
})




//stwórz zmienną randomColor w której wylosujesz dowolny kolor heksadecymalny;

const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)} `;






//dla każdego przycisku z buttons dodaj event który sprawi że wcześniejsze rodzeństwo przełączy swoją klasę hidden, ponieważ element jest linkiem zatrzymaj automatyczne przeładowanie strony

buttons.forEach( el => el.addEventListener('click', event => {
    event.preventDefault();
    event.target.previousElementSibling.classList.toggle('hidden');
}))











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

