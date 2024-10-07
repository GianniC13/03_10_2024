console.log("Hello");

let userAge = 18;
let legalAge = 18;
let isLegal = userAge >= legalAge;

// if
if (userAge >= legalAge) {
    console.log("Utilizatorul este major.");
}

// if - else
if (isLegal) {
    console.log("Utilizatorul este major.");
} else {
    console.log("Utilizatorul este minor.");
}

// operatorul ternar
let userEnteredPassword = "pass123";
let correctPassword = "pass123";

let accessMessage = userEnteredPassword === correctPassword ? "Access granted" : "Access denied!";

console.log("User has access: ", accessMessage);

// if...else if...else
let actualScore = 98;
let minimumScore = 50;
let averageScore = 70;
let maxScore = 100;

if (actualScore === 100) {
    console.log("Congratulations, your score is perfect!");
} else if (actualScore < maxScore && actualScore > averageScore) {
    console.log("Congratulations, your score is great!");
} else if (actualScore <= averageScore && actualScore >= minimumScore) {
    console.log("Congratulations, your got a passing score!");
} else if (actualScore < minimumScore) {
    console.log("We are sorry, your score is too low!");
} else {
    console.log("Your score could not be verified!");
}

//  switch

let weekDay = 1;

switch (weekDay) {
    case 1:
        console.log ("Astazi este Luni!");
        break;
    case 2:
        console.log("Astazi este Marti!");
        break;
    case 3:
        console.log("Astazi este Miercuri!");
        break;
    case 4: 
        console.log("Astazi este Joi!");
        break;
    case 5:
        console.log("Astazi este Vineri!");
        break;
    case 6:
        console.log("Astazi este Smbata!");
        break;
    case 7:
        console.log("Astazi este Duminica!");
        break;
    default:
        console.log("Ziua nu a putut fi identificata!");
        break;
}

// bucle

// while
// calcularea sumei totale dintr-un cos de cumparaturi folosind "while"
const cartItems = [
    {
        name: "Iphone 16",
        price: 1700,
        currency: "$",
        amount: 1
    },
    {
        name: "Protector sleeve",
        price: 100,
        currency: "$",
        amount: 3
    },
    {
        name: "Apple sticker",
        price: 21.99,
        currency: "$",
        amount: 4
    }
]

let totalPrice = 0;
let productIndex = 0;
while (productIndex < cartItems.length) {
    let product = cartItems[productIndex];
    totalPrice = totalPrice + product.price * product.amount;  // mai poate fi scris si asa: totalPrice += product.price * product.amount;
    productIndex = productIndex + 1; // sau asa: productIndex++;
}

console.log("Your cart total is: ", totalPrice, cartItems[0].currency);

// do - while

let n = 3;
let currentNumber = 0;
do {
    currentNumber++;
    console.log(currentNumber);
} while (currentNumber < n);

// for
// calcularea sumei totale dintr-un cos de cumparaturi folosind "for"
let totalPrice2 = 0
for (i = 0; i < cartItems.length; i++) {
    let product = cartItems[i];
    totalPrice2 += product.price * product.amount;
}

console.log("Your cart total computed with 'for' is: ", totalPrice2, cartItems[0].currency);

// for of
// calcularea sumei totale dintr-un co de cumparaturi folosind "for of"

let totalPrice3 = 0;
for (let product of cartItems) {
    totalPrice3 += product.amount * product.price;
}

console.log("Your cart total computed with 'for of' is: ", totalPrice3, cartItems[0].currency);

// for in
let iphone = {
    name: "Iphone 16",
    price: 1700,
    currency: "$",
    amount: 1
};

for ( let key in iphone) {
    console.log("key: ", key);
}

// break
const numbers = [123, 43, 12, 1231321, 9];

let numberToCheck = 12;
for (let i = 0; i < numbers.length; i++) {
    console.log(`i: `, i);
    if (numberToCheck === numbers[i]) {
        console.log(`Number ${numberToCheck} is found at index ${i}!`);
        break;
    }
}

// continue
// calcularea sumei primelor n numere pare
let firstN = 8;
let sum = 0;
for (i = 1; i <= firstN; i++){
    if (i % 2 !== 0){
        continue;
    }
    sum += i;
}

console.log("Suma primelor ", firstN, "numere pare este: ", sum);