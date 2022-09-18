// 1. form,input,todoList를 변수로 둔다.
const toDoForm=document.getElementById('todo-form');
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById('todo-list');
// 21. 'todos' 변수로 변경
const TODOS_KEY="todos"
// 15. array를 만들어준다
let toDos=[];
// 17.toDos array의 내용을 localStorage에 넣는 것
function saveToDos(){
    // 19.('todos',(toDos))->('todos',JSON.stringify(toDos))
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
// 13. button눌렀을 때 삭제
// 이벤트가 클리된 위치를 알려준다-> 클릭타켓이 무엇인지 체크을 할 수 있다.
function deleteTodo(event){
    
// 14. 다다른 리스트를 삭제해야하기 때문에 부모를 찾아가야함
const li=event.target.parentElement;
li.remove();
}



// 7. 추가 함수 만들어주기
function paintToDo(newTodo){
const li=document.createElement("li");
const span=document.createElement("span");
// 9. span에 input에 작성한 거 대입
span.innerText =newTodo;
const button=document.createElement("button");
button.innerText="x"
// 12. button 눌렀을때 리스트 삭제 되어야함
button.addEventListener('click',deleteTodo)
// 10. li에 span이랑 button 저장해줘야함
li.appendChild(span);
li.appendChild(button);
// 11. span이랑 button에 넣은 거 ul(toDoList)에 넣어줘야함
toDoList.appendChild(li);
}


// 2. data를 전송했을 때의 함수
function handleToDoSubmit(event){
// 3. 기본 이벤트 막아주고
    event.preventDefault();
// 4. input에 적을 text를 변수에 저장
const newTodo=toDoInput.value;
// 6. 적었을 때 text안보이게 해줘야함
toDoInput.value="";
// 16. newTodo가 그려질때 array에 push해준다. 
//그래서 newTodo그리기전에 toDos array를 가지고 와서 newTodo를 push할것이다
toDos.push(newTodo);
// 8. 전송됐을 때 (7)함수로 html에 tag 추가
paintToDo(newTodo);
// 18. toDo들을 저장
saveToDos();
}
// 5. 폼을 제출 했을 때 (2)함수가 발생하도록
toDoForm.addEventListener("submit",handleToDoSubmit);


// 20. 
const savedToDos=localStorage.getItem(TODOS_KEY)

// 22. 어떨 땐 savedToDos가 null이 될때가 있다
if(saveToDos!== null){
    // 23. localStorage에 있는 string을 object로 변경
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo)
    // parsedToDos.array.forEach(element=>{       })
    // 배열 아이템이 sayHello의 함수를 6번 실행시킨다. but array의 item들에 대한 한개의 function만 실행해준다
}




// const savedToDos=localStorage.getItem('todos')
// ** localStorage에 array를 저장할 수 없다, 오직 텍스트만 저장할 수 있다
// JSON.stringify()를 사용하면 array든 object든 string으로 변경가능
// JSON.parse()를 사용하면 string을 array로 변경가능