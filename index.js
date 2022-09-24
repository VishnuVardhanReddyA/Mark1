import chalk from 'chalk'
import readlineSync from 'readline-sync'
let s = 0;
var qlist=[
  {
    type:"op",
    q:"What's my favourate color ?",
    a:"Red",
    op:["White","Black","Red","Orange","Green"]
  },
  {
    type:"YN",
    q:"I love coffee rather than tea ?",
    a:"Y"
  },
  {
    type:"op",
    q:"What's my favourare sport?",
    a:"Tennis",
  op:["Cricket","Football","Tennis","Hockey","F1"]
  },
  {
    type:"YN",
    q:"Do I have instagram acccount ?",
    a:"Y"
  },
  {
      type:"YN",
      q:"I love hollywood movies a lot..",
      a:"N",
      
  }
]
const getName=()=>{
  let name = readlineSync.question(chalk.bgRed("Hey, what's your name:")+" ")
  console.log(chalk.green("Hello ! "+name+" let's see how much you know about me..."))
  console.log(chalk.bgWhite("\n                                            \n"))
}
const askQuestions=()=>{
  for(let q of qlist){
      if(q.type==="op"){
        let user_ans =  readlineSync.keyInSelect(q.op,q.q);
      if(q.op[user_ans]===q.a){
        console.log(chalk.green("That was great ! 🙌"))
        s+=1
      }else{
        console.log(chalk.red("Don't upset me 😞"))
      }
      console.log(chalk.bgWhite("\n                                            \n"))
    }
    if(q.type==="YN"){
      let user_ans = readlineSync.keyInYN(q.q);
      if(user_ans===(q.a==="Y")){
        console.log(chalk.green("That was great ! 🙌"))
        s+=1
      }else{
        console.log(chalk.red("Don't upset me 😞"))
      }
      console.log(chalk.bgWhite("\n                                            \n"))
    }
  }
}
const logResults=()=>{
  console.log(chalk.bgCyan.black("Your score : ")+chalk.bgMagenta.black.bold(" "+s+"/5"+" "))
  if(s>=3){
    console.log("I love that you know me very well..💚")
  }else{
    console.log("Let's meet near soon & get to know each other..💙")
  }
}
getName()
askQuestions()
logResults()
