let country = prompt("What country are you from?");
country = country.toLowerCase();
country = country.trim();
country = country.replace("brasil", "brazil");
if (country === "brazil" || country === "portugaul") {
  alert("You speak Portuguese");
} else {
  alert("You don't speak Portuguese");
}
function greetUser() {
  let name = prompt("What`s your name?");
  let email = prompt("what`s your email?");
  let language = prompt("where are you from?");
  if (language === "france") {
    alert(`Bonjour ${name} we will be in touch with you`);
  } else {
    alert(`Hi ${name} we will be in touch with you `);
  }
}
let apply = document.querySelector("button");
apply.addEventListener("click", greetUser);
