#! /usr/bin/env node 
import inquirer from "inquirer"
import { differenceInSeconds, lightFormat } from "date-fns"

const res = await inquirer.prompt({

    name: "UserInput",
    type: "number",
    message: "Please enter a amount of seconds",
    validate:(input)=>{
        if(isNaN(input)){
            return "please enter a valid number"
        }else if(input>60){
            return "second must be less than or equal to 60"
        }else{
            return true;
        }
    }

});

let input = res.UserInput

function startTime(val: number) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(inTime);
    setInterval((() => {
        const currTime = new Date()
const timeDiff=differenceInSeconds(intervalTime,currTime);

if (timeDiff <=0){
    console.log("Timer has expired!");
    process.exit();
    
}
const min=Math.floor((timeDiff%(3600*24))/3600)
const sec=Math.floor(timeDiff%60)
console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);


    }), 1000)
}
startTime(input)