let readlineSync = require("readline-sync");
const chalk = require('chalk');

let score = 0
let levelone = [
  {
    que: "Which Contry has won the most Cricket World Cups? ",
    ans: "Australia"

  },
  {
    que: "Who was the Highest run- Scorer in the World Cup 2023? ",
    ans: "Virat Kohli"
  },
  {
    que: "Which team has the highest Scores in the history of world cup? ",
    ans: "South Africa"
  },
  {
    que: "Which is Highest Wicket- Takker in world cup 2023? ",
    ans: "Mohammed Shami"
  }
]   // Declear the array of object 1   

let leveltwo = [
  {
    que: "Who was the Man Of the Match for South Africa Vs Australia semifinal match of 2023 World cup? ",
    ans: "Travis Head"

  },
  {
    que: "Who was the Captain of South Africa in world cup 2023?",
    ans: "Temba Bavuma"
  },
  {
    que: "In which city World Cup final 2023 Was played?  ",
    ans: "Ahmedabad"
  },
  {
    que: "Who hit a maximum Sixes in world Cup 2023? ",
    ans: "Rohit Sharma"
  }
]
// Declear the array of object 2 //   

let highscore = [
  {
    name: "Akshay",
    Total: "8/8"
  },
  {
    name: "Sakshi",
    Total: "7\8"
  }
]
// Declear the array of object 1 

let username = readlineSync.question("What is Your Name?")
console.log(chalk.blue("Hello " + username + " lets play quiz about Cricket world cup 2023\n\n") )  // ask name to user
let Rules = ("Rules For Quiz: \n" + "1. Please Confirm Your Speling of Answer before Submit\n" + "2. for First four Questions at least two must be correct.\n" + "3. Please Don't Goggle for Answer\n\n")

console.log(chalk.green(Rules)) // rules



function play(cricket) {

  for (let i = 0; i < cricket.length; i++) {     // function 1
    let userans = readlineSync.question(cricket[i].que)
    if (userans.toUpperCase() === cricket[i].ans.toUpperCase()) {
      console.log(chalk.blue("Right...Impressive"))
      score = score + 1
    } else {
      console.log(chalk.black("Wrong...Please try next."))
      score = score
    }
    console.log(chalk.green("Your Score is " + score))

  }
}
play(levelone) //function 1 calling
console.log("Your score For First four Questions is " + score)
let Score = 0
if (score >= 2) {
  console.log(chalk.green ("yahho!! Your score is more than 2... lets start next level\n"))
  play(leveltwo) // function 2 calling


} else {
  console.log(chalk.red("So Saad Your score is below 2...You out of Game.."))
}



if (Score >= 5) { // condtion for highsre
  console.log(chalk.pink("Wow .. You are the Highscorer of quiz ..send Me ScreenShot for record"))
  console.log("\n HighScore\n")
  console.log(highscore)
}