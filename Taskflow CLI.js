const fs = require("fs");
const readline = require("readline");

//  CONFIG
const FILE = "data.json";

//  UTILITIES 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Closure (track actions)
const createCounter = () => {
  let count = 0;
  return () => ++count;
};
const actionCounter = createCounter();

//  CLASS 
class Task {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
    this.completed = false;
  }
}

// FILE HANDLING 
const loadTasks = () => {
  try {
    if (!fs.existsSync(FILE)) return [];
    return JSON.parse(fs.readFileSync(FILE));
  } catch (err) {
    console.error("Error loading data:", err.message);
    return [];
  }
};

const saveTasks = (tasks) => {
  try {
    fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error("Error saving data:", err.message);
  }
};

//  CORE FUNCTIONS 
const addTask = () => {
  rl.question("Enter task: ", (text) => {
    if (!text.trim()) {
      console.log(" Task cannot be empty");
      return menu();
    }

    const tasks = loadTasks();
    tasks.push(new Task(text));

    saveTasks(tasks);
    console.log(" Task added successfully!");
    console.log("Actions:", actionCounter());

    menu();
  });
};

const viewTasks = () => {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log(" No tasks found");
  } else {
    console.log("\n Your Tasks:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.text} [${task.completed ? "true" : "false"}]`
      );
    });
  }

  console.log("Actions:", actionCounter());
  menu();
};

const completeTask = () => {
  rl.question("Enter task number: ", (num) => {
    const tasks = loadTasks();
    const index = Number(num) - 1;

    if (!tasks[index]) {
      console.log(" Invalid task number");
    } else {
      tasks[index].completed = true;
      saveTasks(tasks);
      console.log(" Task marked as complete");
    }

    console.log("Actions:", actionCounter());
    menu();
  });
};

const deleteTask = () => {
  rl.question("Enter task number: ", (num) => {
    const tasks = loadTasks();
    const index = Number(num) - 1;

    if (!tasks[index]) {
      console.log(" Invalid task number");
    } else {
      tasks.splice(index, 1);
      saveTasks(tasks);
      console.log(" Task deleted");
    }

    console.log("Actions:", actionCounter());
    menu();
  });
};

const showStats = () => {
  const tasks = loadTasks();

  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;

  console.log("\n Stats:");
  console.log("Total:", tasks.length);
  console.log("Completed:", completed);
  console.log("Pending:", pending);

  console.log("Actions:", actionCounter());
  menu();
};

//  MENU 
const menu = () => {
  console.log("\n=== TaskFlow CLI ===");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Complete Task");
  console.log("4. Delete Task");
  console.log("5. Stats");
  console.log("6. Exit");

  rl.question("Choose option: ", handleInput);
};

const handleInput = (choice) => {
  switch (choice) {
    case "1": return addTask();
    case "2": return viewTasks();
    case "3": return completeTask();
    case "4": return deleteTask();
    case "5": return showStats();
    case "6":
      console.log("Goodbye FD!");
      return rl.close();
    default:
      console.log(" Invalid choice");
      return menu();
  }
};

//  START
menu();
