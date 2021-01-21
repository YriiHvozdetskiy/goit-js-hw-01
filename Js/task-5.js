'use strict';

let price;
let country = prompt('Вкажіть країну доставки:')
let toLowerCountry = country.toLocaleLowerCase()

switch (toLowerCountry) {
    case 'китай':
        price = 100;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case 'чили':
        price = 250;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case 'австралия':
        price = 170;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case 'индия':
        price = 80;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case 'ямайка':
        price = 120;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    default:
        alert('В вашей стране доставка не доступна');
}

// or
// ===============================================

// const inputCountryRef = document.querySelector('input[name="country"]');
// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', () => {
//     let toLowerCountry = inputCountryRef.value.toLocaleLowerCase();
//     let price;

//     switch (toLowerCountry) {
//         case 'китай':
//             price = 100;
//             console.log(`Доставка в ${inputCountryRef.value} будет стоить ${price} кредитов`);
//             break;

//         case 'чили':
//             price = 250;
//             console.log(`Доставка в ${inputCountryRef.value} будет стоить ${price} кредитов`);
//             break;

//         case 'австралия':
//             price = 170;
//             console.log(`Доставка в ${inputCountryRef.value} будет стоить ${price} кредитов`);
//             break;

//         case 'индия':
//             price = 80;
//             console.log(`Доставка в ${inputCountryRef.value} будет стоить ${price} кредитов`);
//             break;

//         case 'ямайка':
//             price = 120;
//             console.log(`Доставка в ${inputCountryRef.value} будет стоить ${price} кредитов`);
//             break;

//         default:
//             console.log('В вашей стране доставка не доступна');
//     }
// });

//? Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

//? Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

//? Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

//? Ниже приведен список стран и стоимость доставки.
//? Китай - 100 кредитов
//? Чили - 250 кредитов
//? Австралия - 170 кредитов
//? Индия - 80 кредитов
//? Ямайка - 120 кредитов
