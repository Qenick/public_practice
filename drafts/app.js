const links  = document.querySelectorAll('a');

const changeLinks = array => {
    for (let i = 0; i < array.length; i++) {
        array[i].href = `www.zdjecia.pl/img${i}`;
        array[i].innerText = `Link do zdjecia nr ${i}`;
    }
}


changeLinks(links);