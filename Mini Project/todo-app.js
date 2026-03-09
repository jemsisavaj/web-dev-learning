// Mini Project: Todo List (Console Based)
// Commands:
// add    -> add new task
// list   -> show all tasks
// delete -> remove task using index
// quit   -> exit application

let todo = [];

let req = prompt("Please enter your request");

while (true) {

    // exit app
    if (req === "quit") {
        console.log("Quitting Todo App...");
        break;
    }

    // show tasks
    if (req === "list") {

        console.log("------ Todo List ------");

        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }

        console.log("-----------------------");

    }

    // add task
    else if (req === "add") {

        let task = prompt("Enter your task:");
        todo.push(task);

        console.log("Task added successfully.");

    }

    // delete task
    else if (req === "delete") {

        let idx = prompt("Enter task index to delete");

        todo.splice(idx, 1);

        console.log("Task deleted.");

    }

    // wrong command
    else {
        console.log("Invalid request");
    }

    req = prompt("Please enter your request");
}