const questions = [
    // Math Questions
    {
        question: "What is the derivative of x^2?",
        answers: [
            { text: "2x", correct: true },
            { text: "x", correct: false },
            { text: "x^2", correct: false },
            { text: "x^3", correct: false }
        ]
    },
    {
        question: "What is the integral of 3x^2?",
        answers: [
            { text: "x^3", correct: true },
            { text: "3x", correct: false },
            { text: "9x^2", correct: false },
            { text: "x^2", correct: false }
        ]
    },
    {
        question: "What is the value of π (Pi) to 3 decimal places?",
        answers: [
            { text: "3.142", correct: true },
            { text: "3.141", correct: false },
            { text: "3.144", correct: false },
            { text: "3.143", correct: false }
        ]
    },
    {
        question: "Solve for x: 3x + 5 = 17",
        answers: [
            { text: "x = 4", correct: true },
            { text: "x = 5", correct: false },
            { text: "x = 3", correct: false },
            { text: "x = 6", correct: false }
        ]
    },
    {
        question: "What is the square root of 256?",
        answers: [
            { text: "16", correct: true },
            { text: "12", correct: false },
            { text: "14", correct: false },
            { text: "18", correct: false }
        ]
    },
    {
        question: "What is the limit of (1/n) as n approaches infinity?",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "Infinity", correct: false },
            { text: "Undefined", correct: false }
        ]
    },

    // General Knowledge Questions
    {
        question: "Which country hosted the 2020 Summer Olympics?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Brazil", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "George Orwell", correct: false }
        ]
    },
    {
        question: "In which year did the Berlin Wall fall?",
        answers: [
            { text: "1989", correct: true },
            { text: "1990", correct: false },
            { text: "1987", correct: false },
            { text: "1991", correct: false }
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Sahara", correct: false },
            { text: "Antarctic Desert", correct: true },
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false }
        ]
    },
    {
        question: "Who is the current CEO of Tesla?",
        answers: [
            { text: "Elon Musk", correct: true },
            { text: "Jeff Bezos", correct: false },
            { text: "Tim Cook", correct: false },
            { text: "Sundar Pichai", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false }
        ]
    },

    // Computer-Based Questions
    {
        question: "Which company developed the Windows operating system?",
        answers: [
            { text: "Microsoft", correct: true },
            { text: "Apple", correct: false },
            { text: "IBM", correct: false },
            { text: "Google", correct: false }
        ]
    },
    {
        question: "Which programming language is used for Android development?",
        answers: [
            { text: "Java", correct: true },
            { text: "Python", correct: false },
            { text: "C#", correct: false },
            { text: "Ruby", correct: false }
        ]
    },
    {
        question: "What does 'CSS' stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "In computing, what does CPU stand for?",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Central Peripheral Unit", correct: false },
            { text: "Computer Processing Unit", correct: false },
            { text: "Control Program Unit", correct: false }
        ]
    },
    {
        question: "What year was the Python programming language released?",
        answers: [
            { text: "1991", correct: true },
            { text: "1995", correct: false },
            { text: "1989", correct: false },
            { text: "2000", correct: false }
        ]
    },
    {
        question: "Which protocol is used to send emails?",
        answers: [
            { text: "SMTP", correct: true },
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "TCP", correct: false }
        ]
    },
    {
        question: "What is the main purpose of Git?",
        answers: [
            { text: "Version control", correct: true },
            { text: "Bug tracking", correct: false },
            { text: "Code compilation", correct: false },
            { text: "Network management", correct: false }
        ]
    },
    {
        question: "What does 'HTTP' stand for?",
        answers: [
            { text: "HyperText Transfer Protocol", correct: true },
            { text: "HyperText Translation Protocol", correct: false },
            { text: "HyperText Transmission Process", correct: false },
            { text: "HyperText Tracking Protocol", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300;
let timerInterval;

function startQuiz() {
    clearInterval(timerInterval);
    timeLeft = 300; // 5 minutes
    startTimer();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function startTimer() {
    const timerElement = document.getElementById("time");

    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60); // Get the minutes
        const seconds = timeLeft % 60; // Get the remaining seconds
        
        // Update the display to show time in MM:SS format
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000)
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function endQuiz() {
    resetState();
    questionElement.innerHTML = `Time's Up! You scored ${score} out of ${questions.length}`;
    let comment = '';
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;

    // Provide feedback based on score percentage
    if (percentage === 100) {
        comment = "Perfect score! You're a genius!";
    } else if (percentage >= 80) {
        comment = "Great job! You really know your stuff.";
    } else if (percentage >= 50) {
        comment = "Good effort! But there's room for improvement.";
    } else {
        comment = "Don't give up! Try again, you'll do better!";
    }

    // Display the comment below the score
    questionElement.innerHTML += `<br><br>${comment}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    clearInterval(timerInterval);
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    let comment = '';
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;

    // Provide feedback based on score percentage
    if (percentage === 100) {
        comment = "Perfect score! You're a genius!";
    } else if (percentage >= 80) {
        comment = "Great job! You really know your stuff.";
    } else if (percentage >= 50) {
        comment = "Good effort! But there's room for improvement.";
    } else {
        comment = "Don't give up! Try again, you'll do better!";
    }

    // Display the comment below the score
    questionElement.innerHTML += `<br><br>${comment}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    clearInterval(timerInterval);
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
} );

startQuiz();