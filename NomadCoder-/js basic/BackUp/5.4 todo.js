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
//26. toDo의 id가 li의 id와 다른 걸 남기고 싶어함-> 우리가 클릭한 li.id와 다른 toDo는 남겨두고싶어.
// toDo.id!==li.id 두개의 타입이 달라 아무것도 지워지지않느다.
// toDos=toDos.filter(toDo=>toDo.id!==li.id);,parsetInt: 문자열을 숫자로 바꿔주기
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//27.toDos DB에서 todo를 지운 뒤에  saveToDos를 한번 더 불러야한다.
saveToDos();
}



// 7. 추가 함수 만들어주기
function paintToDo(newTodo){
const li=document.createElement("li");
//25. li에 id를 지정해줘야한다.
li.id=newTodo.id;
const span=document.createElement("span");
// 9. span에 input에 작성한 거 대입, text를 받는게 아니라 object를 받는 것이기 때문에 보여주는 것이 .text인걸 지정해줘야함
span.innerText =newTodo.text;
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

// 24. text말고 object로 가지고 싶다. 이것을 toDos array에 넣을 거다
const newTodoObj={
text:newTodo,
id:Date.now()

}
// toDos.push(newTodo)->24. 후에 (newTodoObj)
toDos.push(newTodoObj);
// 8. 전송됐을 때 (7)함수로 html에 tag 추가,(newTodo)->24. 후에 (newTodoObj)
paintToDo(newTodoObj);
// 18. toDo들을 저장
saveToDos();
}
// 5. 폼을 제출 했을 때 (2)함수가 발생하도록
toDoForm.addEventListener("submit",handleToDoSubmit);


// 20. 
const savedToDos=localStorage.getItem(TODOS_KEY)

// 22. 어떨 땐 savedToDos가 null이 될때가 있다
if(savedToDos!== null){
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
// 밀리초를 주는 함수->랜덤 숫자 주는 것 같음 : Date.now()
// filter는 기존의 array에서 제외할 item을 빼고 새로운 array만든다. 반드시 true 리턴이 필요
// const arr=[1,2,3,4] , arr.filter(item=>item>2) [3,4]