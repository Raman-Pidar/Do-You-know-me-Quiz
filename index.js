var read = require("readline-sync");
var clk = require("chalk");

var user=read.question("What is your name ? ")

console.log(clk.cyanBright("Welcome ")+clk.red(user) +clk.cyanBright(". Let's see how much do you know ")+clk.white("R"+clk.red(".")+"A"+clk.blue(".")+"M"+clk.yellow(".")+"A"+clk.red(".")+"N"))
const log=console.log;
var count=0;
log(" ")

log("Ready for a quick Quiz..  ;)")
log(" ")

var questions=[{q:"Where is my HomeTown ? ",a:"Hisar"},{q:"What's my favourite street food? ",a:"GOLGAPPE"},{q:"What instrument do I want to play ? ",a:"Guitar"},{q:"What is my favourite colour ? ",a:"Blue"},{q:"My favourite Subject ? ",a:"Aptitude"}]

function game(que,ans){
  var userAns=read.question(clk.cyanBright(que),{hideEchoBack:true});
  if(userAns.toLowerCase() === ans.toLowerCase()){
    log(ans);
    log(clk.green("You are right  :)"));
    count++;
    log(clk.green("Your Score is "+ count));
    
    log("---------------------------------");
    log(" ");
  }
  else{
    log(clk.redBright("You are wrong  :("));
    log(clk.green("The right answer is "+ans));
    
    log("---------------------------------");
    log(" ");
  }
}

for(var i=0;i<questions.length;i++){
var currQue=questions[i];
game(currQue.q,currQue.a);
}
log(clk.cyanBright("**********************************"))
log(clk.green("Your final Score is "+ count+" out of 5 "));
if(count>3){
log(clk.red("You sure are a superFan  ;)"))

}
log("***********************************")
