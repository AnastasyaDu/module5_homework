let number=+prompt ('Введите число');
console.log(typeof number);
let numberInt = number;

if (number===numberInt){
    console.log('число');
    if (number % 2===0){
        console.log('четное число');
    }

    else if (number %2 !==0){
        console.log('нечетное число')
    }
}

else {
    console.log('Упс, кажется, вы ошиблись');
}
let nanANamber=isNaN (number) ? 'не число' : number;
console.log(nanANamber);
console.log(isNaN(number));