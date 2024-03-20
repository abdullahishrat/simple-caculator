#! /usr/bin/env node
import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

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
