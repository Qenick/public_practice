function rot13(str) {

    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const arrayFromString = str.split('');

    console.log(arrayFromString);

    const result = [];
    arrayFromString.forEach( el => {
        const currentIndex = allLetters.indexOf(el);
        console.log('currentIndex :', currentIndex);
        if (!allLetters.includes(el)) {
            result.push(el);
        } else {
            if (currentIndex + 13 <= allLetters.length - 1) {
                result.push(allLetters[currentIndex + 13]);
            } else {
                result.push(allLetters[currentIndex - allLetters.length + 13]);
            }
        }
    })

    const decoded = (result.join(''));

    return decoded;
}

rot13("SERR PBQR PNZC");