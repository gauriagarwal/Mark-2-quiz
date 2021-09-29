var readlineSync = require('readline-sync');
const chalk = require ('chalk');
var userName = readlineSync.question("May I know your name?\n")
console.log(chalk.red("\nHello!, Welcome to the quiz, " + userName + "\nPlease choose the option\n"))
var score = 0;

//define function
function play(ques,option,ans)
{
  console.log(ques)
  userOption=readlineSync.keyInSelect(option)
  
  if (userOption+1 === ans){
    console.log(chalk.green("You are right!"))
    score = score + 1
  }
  else{
    console.log("You are wrong!")
  }
  console.log("Your score is " + score)
}

//array of objects
var questions = [{
  question: "Is JavaScript a case-sensitive language?",
  answer: 1,
  option: ["True","False","Don't know","Confused"]
},{
  question: "\nIn which year Javascript first appeared?",
  answer: 1,
  option: ["1995","2000","1985","1996"]
},{
  question: "\nJavaScript is interpreted by?",
  answer: 1,
  option: ["Client","Server","Object","Don't know"]
},{
  question: "\nWhich bracket is used to create array in Javascript?",
  answer: 2,
  option: ["{}","[]","()","Don't know"]
},{
  question: "\nWhich built-in method sorts the elements of an array?",
  answer: 2,
  option: ["order()","sort()","changeOrder(order)","Don't know"]
}]

//loop
for (var i=0; i<questions.length; i=i+1)
{
  var currentQues = questions[i];

  play(currentQues.question,currentQues.option,currentQues.answer);
}