//Importing inquirer:
import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
    name: "age",
    type:"number",
    message: "Enter yo age:"}
]);

console.log("Insha'Allah, in" +" "+(60 -answers.age) +" "+ "years you will be 60 years old.");