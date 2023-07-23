const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter(item => item.id !== parseInt(li.id));
	saveToDos(); //지우고 난 배열을 save해줘야 localStorage에 해당 배열이 반영됨
}

function paintToDo(newToDoObj) {
	const li = document.createElement("li");
	li.id = newToDoObj.id;
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.innerText = "X";
	button.addEventListener("click", deleteToDo)
	span.innerText = newToDoObj.text;
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	const newToDoObj = {
		text: newToDo,
		id: Date.now(),
	};
	toDos.push(newToDoObj);
	paintToDo(newToDoObj);
	saveToDos();
}


const savedToDo = localStorage.getItem(TODOS_KEY);
if (savedToDo !== null) {
	const parsedToDo = JSON.parse(savedToDo);
	toDos = parsedToDo;
	parsedToDo.forEach(item => paintToDo(item));
}

toDoForm.addEventListener("submit", handleToDoSubmit);