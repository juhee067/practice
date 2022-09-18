const toDoForm=document.getElementById('todo-form');
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById('todo-list');

const TODOS_KEY="todos"
let toDos=[];
// input에 작성한 것들이 유지가 되지 안는 이유는 toDos array가 항상 비어있었기 때문
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
function deleteTodo(event){
const li=event.target.parentElement;
li.remove();
}

function paintToDo(newTodo){
const li=document.createElement("li");
const span=document.createElement("span");
span.innerText =newTodo;
const button=document.createElement("button");
button.innerText="x"
button.addEventListener('click',deleteTodo)
li.appendChild(span);
li.appendChild(button);

toDoList.appendChild(li);

}

function handleToDoSubmit(event){
event.preventDefault();
const newTodo=toDoInput.value;
toDoInput.value="";
toDos.push(newTodo);
// toDos array를 가지고 와서 newTodo를 push를 할거야
paintToDo(newTodo)
saveToDos();
// toDos array를 localStorage에 집어넣는 것
}

toDoForm.addEventListener("submit",handleToDoSubmit);
// 폼을 전송하면 handleToDoSubmit의 함수를 실행시켜라

function sayHello(item){
console.log('hello',item);
}

const savedToDos=localStorage.getItem(TODOS_KEY)
console.log(saveToDos);
if(saveToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo)
    // parsedToDos.array.forEach(element=>{       })
    // 배열 아이템이 sayHello의 함수를 6번 실행시킨다. but array의 item들에 대한 한개의 function만 실행해준다
}


// ** localStorage에 array를 저장할 수 없다, 오직 텍스트만 저장할 수 있다
// JSON.stringify()를 사용하면 array든 object든 string으로 변경가능
// JSON.parse()를 사용하면 string을 array로 변경가능