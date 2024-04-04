#! /usr/bin/env node
import inquirer from "inquirer";
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
async function startWordCount(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "write a para here ",
            name: "paragraph",
        });
        console.log(counter(res.paragraph));
    } while (true);
}
startWordCount(counter);
