import inquirer from "inquirer";
import chalk from "chalk";

let ToDo: string[] = [];
let condition = true;

console.log(chalk.bold.rgb(53, 252, 3)(`\n \t\t <<<================================>>>`));
console.log(chalk.bold.rgb(3, 152, 252)(`  \t \t         <<<Code with wajji>>>`));
console.log(chalk.bold.rgb(53, 252, 3)(` \t\t <<<================================>>> \n`));

let main = async () => {
  while (condition) {
    let choice = await inquirer.prompt([
      {
        name: "todolist",
        type: "list",
        message: " Select an option yoy want to do: ",
        choices: [
          "Add Task",
          "View Todo-List",
          "Delete Task",
          "Update Task",
          "Exit",
        ],
      },
    ]);
    if (choice.todolist === "Add Task") {
      await addtask();
    } 
    else if (choice.todolist === "View Todo-List") {
      await viewtask();
    } 
    else if (choice.todolist === "Delete Task"){
        await deletetask();
    }
    else if (choice.todolist === "Update Task") {
        await updatetask();
    }
    else if (choice.todolist === "Exit") {
      condition = false;
      console.log(chalk.bold.rgb(53, 252, 3)(`\n \t\t <<<================================>>>`));
      console.log(chalk.bold.rgb(3, 152, 252)(`  \t \t        <<<Thanks For Coming>>>`));
      console.log(chalk.bold.rgb(53, 252, 3)(` \t\t <<<================================>>> \n`));
    }
  }
};
// function of add task

let addtask = async () => {
  let newtask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your New Task: ",
    },
  ]);
if (newtask.task === ""){
  console.log(chalk.bold.rgb(252, 3, 3)(`Please add something`))
}
else{ 

  ToDo.push(newtask.task);
  console.log(
    `\n Your Task ${chalk.bold.rgb(15,252,3)(newtask.task)} is Successfully Added \n`
  );
}
};

//function of view task

let viewtask = () => {
  console.log("\n \t\t Your Todo List \n"),
    ToDo.forEach((task, index) => {
      console.log(`   ${index + 1}: ${task}`);
    });
};

//function of delete task

let deletetask = async() => {
    await viewtask();

    let dltindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete: "
        }
    ])
    let deletedtask = ToDo.splice(dltindex.index - 1, 1);
    console.log(`\n Your Task ${chalk.bold.rgb(252, 3, 3)(deletedtask)} is Successfully Deleted \n`)
}

//function of update task

let updatetask = async() => {
    await viewtask();
    let update_todo = await inquirer.prompt([
      {
        name : "index",
        type : "number",
        message : "Enter the 'index no.' of the task you want to update : "
      },
      {
        name : "add",
        type : "input",
        message : "Now enter new task name : "
      }
    ])

    ToDo[update_todo.index - 1] = update_todo.add;
    console.log (`\n Your Task ${chalk.bold.rgb(15,252,3)(update_todo.index)} is Successfully updated '${chalk.bold.rgb(15,252,3)(update_todo.add)}' \n`)
}

main();




