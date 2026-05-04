// JavaScript Quiz Game 

let questions = [
  {
    question: "What is the output of typeof []?",
    options: ["object", "array", "undefined", "string"],
    answer: "object"
  },
  {
    question: "Which keyword is used to declare a variable in JS?",
    options: ["var", "int", "define", "string"],
    answer: "var"
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Output Method",
      "None"
    ],
    answer: "Document Object Model"
  }
];

let score = 0;

function startQuiz() {
  alert("Welcome to JavaScript Quiz Game!");

  for (let i = 0; i < questions.length; i++) {
    let q = questions[i];

    let userAnswer = prompt(
      q.question +
        "\n\nOptions:\n" +
        "1. " + q.options[0] + "\n" +
        "2. " + q.options[1] + "\n" +
        "3. " + q.options[2] + "\n" +
        "4. " + q.options[3] + "\n\n" +
        "Type your answer:"
    );

    if (userAnswer === q.answer) {
      alert(" Correct!");
      score++;
    } else {
      alert(" Wrong! Correct answer: " + q.answer);
    }
  }

  alert("Quiz Finished!\nYour Score: " + score + "/" + questions.length);
  console.log("Final Score:", score);
}

// Start game
startQuiz();
