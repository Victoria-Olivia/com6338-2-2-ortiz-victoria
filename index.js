function greet() {
  var name = prompt("What is your name?");
  alert("Hello, " + name + "!");

  var ageInput = prompt("How old are you?");
  var age = parseInt(ageInput, 10);

  var hasHadBirthday = confirm("Have you have a birthday this year yet? Click OK for yes, Cancel for no.");
  
  var currentYear = new Date().getFullYear();
  var birthyear;
  if (hasHadBirthday) {
      birthyear = currentYear - age;
  } else {
      birthyear = currentYear - age - 1;
  }
  alert("You were born in " + birthyear);
}