#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number from 1-10",
}
]);
const randomNumber = Math.floor(Math.random() * 10 + 1);
if (answers.userguessednumber == randomNumber){
    console.log("Congratulations!! you've guessed the right number.");
} else {
    console.log("The number you guessed is wrong.");
};

    




