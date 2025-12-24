const questions = [
  {
    category: "Art",
    question: "Who painted the mona lisa?",
    choices: ["Leonardo da Vinci", "Michelangelo di Lodovico", "Van Gogh"],
    answer: "Leonardo da Vinci"
  },
  {
    category: "Computer Science",
    question: "Who created the programming language  C?",
    choices: ["Guido van Rossum", "Linus Torvalds", "Dennis Ritchie"],
    answer: "Dennis Ritchie"
  },
  {
    category: "History",
    question: "When did the Second World War ended?",
    choices: ["1945", "1944", "1940"],
    answer: "1945"
  },
  {
    category: "Football",
    question: "Which team won the UEFA Champions League in 2008?",
    choices: ["FC Barcelona", "Manchester United FC", "Real Madrid CF"],
    answer: "Manchester United FC"
  },
  {
    category: "Biology",
    question: "Who wrote the famous book 'On the Origin of Species'?",
    choices: ["Albert Einstein", "Charles Darwin", "Isaac Newton"],
    answer: "Charles Darwin"
  }
];

function getRandomQuestion(arr) {
  const randomIndex = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1) + 0);

  return arr[randomIndex];
}

function getRandomComputerChoice (choices) {
  const randomIndex = Math.floor(Math.random() * ((choices.length - 1) - 0 + 1) + 0);

  return choices[randomIndex];
}

function getResults(question, computersChoice) {
  if (question.answer === computersChoice) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}

const question = getRandomQuestion(questions);

const choice = getRandomComputerChoice(question.choices);

const result = getResults(question, choice);

console.log("Question: " + question.question);
console.log("Computer's choice: " + choice);
console.log(result);