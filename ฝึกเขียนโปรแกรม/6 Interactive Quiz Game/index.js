const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'New York', 'Berlin'],
        answer: 'Paris'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'What is 4 + 4?',
        options: ['3', '4', '5', '8'],
        answer: '8'
    },
    {
        question: 'ประเทศไทยมีกี่จังหวัด',
        options: ['55', '44', '77', '54'],
        answer: '77'
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = '';

    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.setAttribute('data-index', index);
        button.onclick = function() {
            checkAnswer(this);
        };
        optionsElement.appendChild(button);
    });
}

function checkAnswer(button) {
    const selectedAnswer = quizData[currentQuestion].options[parseInt(button.getAttribute('data-index'))];
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    button.classList.add(selectedAnswer === correctAnswer ? 'correct' : 'incorrect');
    document.querySelectorAll('.option').forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });

    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        document.querySelectorAll('.option').forEach(btn => {
            btn.classList.remove('correct', 'incorrect');
            btn.disabled = false;
        });
        document.getElementById('nextButton').disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You scored ${score} out of ${quizData.length}.`;
}

loadQuestion();