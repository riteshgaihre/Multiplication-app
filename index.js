const num1 = (Math.floor(Math.random()*10)+1);
const num2 = (Math.floor(Math.random()*10)+1);

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");


questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const correctAns = num1*num2;

let score = JSON.parse(localStorage.getItem("score"));
scoreEl.innerText = `score:${score}`

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
        
    }else{
        score--;
        console.log(score);
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}



