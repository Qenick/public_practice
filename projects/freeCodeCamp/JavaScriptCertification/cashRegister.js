function checkCashRegister(price, cash, cid) {
    const change = {
        status: '',
        change: []
    }
    let allMoney = 0;
    cid.forEach(el => allMoney += el[1]);
    console.log(allMoney);

    const dueChange = cash - price;
    console.log(dueChange);

    //rozbicie liczby dueChange (kwota do wydania) na składowe
    let numberDivided = [
        0,
    ]
    let hundredths = 0;
    let decimals = 0;
    let singles = 0;
    let tens = 0;
    let hundreds = 0;
    let thousands = 0;
    let integer = Math.floor(dueChange);
    let float = 0;
    let sum = dueChange;


    //sprawdzić czy float jeśli tak to wyciągnąć ułamek i liczbę;
    if (!Number.isInteger(dueChange)) {
        float = parseInt((sum - integer)) * 100;

        const stringFloat = float.toString();
        console.log('stringFloat', stringFloat);
        decimals = stringFloat[2];
        if (stringFloat.length > 3) {
            hundredths = stringFloat[3];
        }
    }



    console.log('integer :', integer);

    console.log('float :', float);

    console.log('hundredths', hundredths);
    console.log('decimals', decimals);
    console.log('singles', singles);
    console.log('tens', tens);
    console.log('hundreds', hundreds);
    console.log('thousands', thousands);
    //przeiterować po liczbie i rozbić ją na liczby

    // while (dueChange > 0) {
    //
    // }

    // while (sum > 0) {
    //
    // }

    if (price > allMoney) {
        change.status = 'INSUFFICIENT_FUNDS';
    }

    return change;
}

checkCashRegister(19.21, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);