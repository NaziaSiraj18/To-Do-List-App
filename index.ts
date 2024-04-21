#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let condition = true;

//print welcome message
console.log(chalk.blue("\n \t Welcome to CodeWithNazia - Todo-List Application\n"));
// while (condition){
// let addTask = await inquirer.prompt([
// {
// name: "task",
// type: "input",
// message: "Enter your New Task:",
// }
// ]);
// 
// todoList.push(addTask.task);
// console.log(` ${addTask.task} Task added in todo-List successfully`);
// The loop is running on the based of this variable condition
// let addMoreTask = await inquirer.prompt([
// {
// name: "addMore",
// type: "confirm", //when type is confirm answer is in yes or no
// message: "Do you want to add more task ?",
// default: "False",
// }
// ]);
// condition = addMoreTask.addMore;
// }
// console.log(`your updated  Todo-List: ${todoList}`);
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask()
        }
        else if (option.choice === "Delete Task") {
            await deleteTask()
        }
        else if (option.choice === "Update Task") {
            await updateTask()
        } else if (option.choice === "View Todo-List") {
            await viewTask()
        } else if (option.choice === "Exit") {
            condition = false;
        }
    }
}

        // Function to add new task to the list
        let addTask = async() => {
        let newTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Enter your new task :"
            }
        ]);
        todoList.push(newTask.task);
        console.log(`\n ${newTask.task} task added successfully in Todo-List`);
    };
    // Function to view all Todo-List Task
    let viewTask = async () => {
        console.log("\n your Todo-List : \n");
        todoList.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        });
}
//function to delete a task from the list
     
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt(
        [
            {
                name: "index",
                type: "number",
                message: "Enter the `index no` of the task you want t0 delete:",
            }
        ]
    );
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from your`)
   }


  //  main()
//function UpdateTask() {
 //   throw new Error("Function not implemented.");
//}

//function to update a task

let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index -1 ] = update_task_index.new_task
    console.log(`\n Take at index no. ${update_task_index.index -1} updated successfully [ for updated list check option: "View todo-list"]`);
}
    main()