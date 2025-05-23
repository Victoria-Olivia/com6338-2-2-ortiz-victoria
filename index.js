function greet() {

let name = prompt("What is your name?");

alert("Hello, " + name);

let ageInput = prompt("How old are you?");

var age = parseInt(ageInput);

var hadBirthday = confirm("Did you have a birthday this year?");

var currentYear = new Date().getFullYear();

var birthyear;
if (hadBirthday) {
    birthyear = currentYear - age;
} else {
    birthyear = currentYear - age - 1;
}

alert("You were born in " + birthyear + ".");
}