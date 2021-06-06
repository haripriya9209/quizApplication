var readlineSync= require("readline-sync");
const chalk = require('chalk');

console.log(chalk.green("Welcome to the quiz app"));
console.log("");
var userName= readlineSync.question("Please enter your name: ");
console.log("");
console.log(chalk.cyanBright(userName + " let we start the quiz HOW MUCH YOU KNOW ABOUT YOUR FRIEND "));
console.log("");

// logic
let score=0;
function play(quest, ans)
{
  
  var userAns=readlineSync.question(chalk.blueBright(quest));
  
  if(userAns.toUpperCase()==ans.toUpperCase())
  {
    
    console.log(chalk.cyan("Yay! Your answer is correct"));
    score++;
  }else{
    console.log(chalk.red("Sorry! Your answer is incorrect"));
  }
  console.log("");
  console.log(chalk.greenBright("Your current score is: ", score));
  console.log("");
  console.log("--------------------------------");
}

//adding questions and answers
var questions=[
   {
    question: "What is my nick name?  ",
    answer: "Hari",
  },
   {
    question: "What is my favourite colour?  ",
    answer: "Green",
  },
   {
    question: "My favourite hero?  ",
    answer: "Nani",
  },
   {
    question: "My favourite heroine?  ",
    answer: "Samantha",
  },
]

//calling play function

for(var i=0;i<questions.length;i++)
{
  play(questions[i].question, questions[i].answer);
}
console.log("");
console.log("Your final score is: ", score);

//leaderBoard
var leaderBoard=[
  {
    name:"hari priya",
    tscore: 4,
  },
  {
    name:"vishnu",
    tscore: 3,
  },
]

// logic for keaderboard
if(leaderBoard[1].tscore<score)
{
  leaderBoard[1].name=userName;
  leaderBoard[1].tscore=score;
}
console.log("");
console.log(chalk.magentaBright("Here is the leaderBoard: "))
for(var j=0;j<leaderBoard.length;j++)
{
  console.log(leaderBoard[j].name +" : "+ leaderBoard[j].tscore);
}