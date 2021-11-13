const links  = document.querySelectorAll('a');

// Dla każdego elementu z tablicy links dodaj adres linku do folderu img i pliku img numerowanego od 0 oraz tekst linku Link do zdjęcia nr od 0;


for (let i = 0; i < links.length; i++) {
    links[i].href = `img/img${i}`;
    links[i].innerText = `Link do zdjęcia nr ${i}`;
}

// const changeLinks = array => {
//     for (let i = 0; i < array.length; i++) {
//         array[i].href = `www.zdjecia.pl/img${i}`;
//         array[i].innerText = `Link do zdjecia nr ${i}`;
//     }
// }
//
//
// changeLinks(links);

const el = document.querySelector('p');

// console.log(el.href);
el.removeAttribute('data-text');
// el.setAttribute('data-text', 'Text drugi');
el.dataset.text = 'Text trzeci';
console.log(el.dataset.text);

const array = [0, 1, 2, 3, 4, 5, 9, 7];

const index = (array, number) => array.findIndex(el => el - array[array.indexOf(el) - 1] > number);


console.log(index(array, 1));

// console.log(array.slice(1, 5));
//
// const sum = array.reduce( (a, b) => a + b );
//
// console.log(sum);
// array.splice(1, 2, 'drugi');
// console.log(array);
//
// const greet = (name = 'Stranger') => console.log(`Cześć mam na imię ${name}`);
//
// greet();
// greet('Kamil');
//
// let name    ;
// const greet2 = name ? `Cześć mam na imię ${name}.` : 'Cześć jestem bezimiennym.';
//
// console.log(greet2);

//
// const randomNumToSix = () => Math.floor(Math.random() * 6 + 1);
//
// const dupa = () => console.log('Dupa');
//
// // console.log(randomNumToSix());
// const repeat = number => {
//     for (let i = number; i > 0; i--) {
//         dupa();
//     }
// }
//
// repeat(10);

// const repeat = (arrowFunctionRepeat, number) => {
//     for (let i = number; i < 0; i--) {
//         arrowFunctionRepeat();
//     }
// }


// const func3n = number => {
//     for
// }

document.querySelector('div').setAttribute('id', 'first-div');

document.querySelectorAll('div').forEach(el => console.log(el.dataset));

console.log(document.querySelector('a').getAttribute('href'));
console.log(document.querySelector('a').href);