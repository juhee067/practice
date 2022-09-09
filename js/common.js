const inputForm=document.querySelector('#login-form input')
const greeting=document.querySelector('#greeting')

function onSubmit(event){
event.preventdefault;
inputForm.classList.add('hidden');
localStorage.setItem('user',greeting.value)

} 

if(localStorage.getItem === null){
    inputForm.classList.remove('hidden');
    button.addEventListener('submit',onSubmit)
}
else{
    greeting.classList.remove('hidden');
    greeting.innerText=`hello ${localStorage.getItem}`


}

