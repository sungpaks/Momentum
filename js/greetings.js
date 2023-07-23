const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function paintGreetings() {
	greeting.innerText = `Hello, ${localStorage.getItem(USERNAME_KEY)}!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(event) {
	event.preventDefault();
	const username = loginInput.value;
	localStorage.setItem("username", username);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings();
	//console.log(username);
}

if (localStorage.getItem(USERNAME_KEY) === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings();
}


loginForm.addEventListener("submit", onLoginSubmit);