#! /usr/bin/env node

// Simple Calculator
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter First Number" , type: "number", name: "firstNumber"},
    { message:"Enter Second Number" , type: "number", name: "secondNumber"},
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition","Substraction","Multiplication","Division"],
    },
]);


// Conditional Statements.
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if   (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);  
    
}  else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please Enter the valid operator.")
}