#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "enter first number", type: "number", name: "firstnumber" },
    { massage: "enter second number", type: "number", name: "secondnumber" },
    {
        massage: "select one of the operators to prompt opration",
        type: "list",
        name: "operater",
        Choices: ["A, ddition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
