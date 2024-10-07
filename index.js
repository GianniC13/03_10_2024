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