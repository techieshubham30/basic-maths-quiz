var readlineSync = require('readline-sync');
var userName = readlineSync.question('May i have  your please? ');

console.log("....................................");

console.log(`Hii ${userName} , lets play a simple maths quiz:`);

var score=0;
var totalScore=10;

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  console.log("................");
  if(userAnswer===answer){
    console.log("right answer!");
    score=score+2;
  }else{
    console.log("wrong answer!");
    score--;
  }
}


var questionOne={
  question:`
  Question 1. What is three fifth of 100?
  A. 3
  B. 5
  C. 20
  D. 60....:`
  ,
  answer:"D"
  
}

var questionTwo={
  question:`
  Question 2. If David’s age is 27 years old in 2011. What was his age in 2003?
 A. 17 years
 B. 37 years
 C. 20 years
 D. 19 years....:`
  ,
  answer:"D"
  
}

var questionThree={
  question:`
  Question 3. What is the remainder of 21 divided by 7?
 A. 21
 B. 7
 C. 1
 D. None of these....:`
  ,
  answer:"D"
  
}

var questionFour={
  question:`
  Question 4. What is 7% equal to?
 A. 0.007
 B. 0.07
 C. 0.7
 D. 7....:`
  ,
  answer:"B   "
  
}

var questionFive={
  question:`
  Question 5. I am a number. I have 7 in the ones place. I am less than 80 but greater than 70. What is my number?
 A. 71
 B. 73
 C. 75
 D. 77....:
  `
  ,
  answer:"D"
  
}


var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);
}

console.log("...................");

console.log(`Your total score is: ${score} out of ${totalScore}`);