function complete(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var correct = 0;

if (question1== "Neil Armstrong"){
    correct++;
}
if (question2== "7 Billion"){
    correct++;
} 
if (question3== "Jeff Bezos"){
    correct++;
}

if (question4== "Mitchell"){
    correct++;
}
if (question5== "7,000"){
    correct++;
}
document.getElementById("next").style.visibility="visible";
document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";
}
function start(){
    var seconds = 45
    var stop = 0;
    
}