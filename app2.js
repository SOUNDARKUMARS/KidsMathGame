
let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let option1=document.getElementById("optOne")
let option2=document.getElementById("optTwo")
let option3=document.getElementById("optThree")
let option4=document.getElementById("optFour")
let ans
let operators=['+','-','*']
let wrong=document.getElementById("wrong")
let correct=document.getElementById("correct")
let symbol=document.getElementById("symbol")
const skipbtn=document.getElementById("skip")
let score=document.getElementById("score")
let currentScore=0
let timeLeft=document.getElementById("timeLeft")
let startbtn=document.getElementById("start")
let endbtn=document.getElementById("end")
let currentTime=60
function getEq(){

    let qu1=Math.floor( Math.random()*20)
    let qu2=Math.floor( Math.random()*20)
    let operator=operators[Math.floor(Math.random()*3) ]
    let equation=qu1 +''+ operator +''+qu2 
    ans=eval(equation)
    console.log(`${equation} = ${ans}`)
    num1.textContent=qu1
    num2.textContent=qu2
    symbol.textContent=operator
    let options=[Math.floor( Math.random()*40),Math.floor( Math.random()*40),Math.floor( Math.random()*40),ans]
    options.sort(() => Math.random() - 0.5)
    
    option1.textContent=options[0]
    option2.textContent=options[1]
    option3.textContent=options[2]
    option4.textContent=options[3]

}

function endgame(){
    clearInterval(timercountId)
   currentTime=0
    score.innerHTML=currentScore
    timeLeft.textContent=currentTime+'s' 
    alert("Game Left!")
    
}
endbtn.addEventListener("click",endgame)
function countDown(){
    timeLeft.textContent=currentTime+'s'
    if(currentTime==0){
        alert('Game Over!!   SCORE: '+currentScore)
        clearInterval(timercountId)
        currentTime=60
        currentScore=0
        score.innerHTML=currentScore
    }
    currentTime--

    }
function getstarted(){
   
    currentScore=0
    currentTime=60 
    score.innerHTML=currentScore
    setInterval(countDown,1000)
}
startbtn.addEventListener("click",getstarted)


    let timercountId=setInterval(countDown,1000)




getEq()
function getnewqu(){
getEq()
currentScore--
score.innerHTML=currentScore
}
skipbtn.addEventListener("click",getnewqu)

option1.addEventListener('click', function(){
    if(option1.textContent==ans){
        currentScore++
        score.innerHTML=currentScore
        console.log(currentScore)
        correct.play()
        getEq()
        
    }else{
        wrong.play()
    }
})
option2.addEventListener('click', function(){
    if(option2.textContent==ans){
        currentScore++
        score.innerHTML=currentScore
        console.log(currentScore)
        correct.play()
        getEq()
        
    }else{
        wrong.play()
    }
})
option3.addEventListener('click', function(){
    if(option3.textContent==ans){
        currentScore++
        score.innerHTML=currentScore
        console.log(currentScore)
        correct.play()
        getEq()
        
    }else{
        wrong.play()
    }
})
option4.addEventListener('click', function(){
    if(option4.textContent==ans){
        currentScore++
        score.innerHTML=currentScore
        console.log(currentScore)
        correct.play()
        getEq()
        
    }else{
        wrong.play()
    }
})

