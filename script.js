// Quote of the Day Feature
const quotes = [
    "It’s not who I am underneath, but what I do that defines me. – Batman",
    "In my experience, there is no such thing as luck. – Obi-Wan Kenobi",
    "With great power comes great responsibility. – Spider-Man",
    "I am Iron Man. – Tony Stark",
    "May the Force be with you. – Star Wars"
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').innerText = quotes[randomIndex];
}

window.onload = displayRandomQuote; // Display quote on page load

// Trivia Quiz Feature
const quizQuestions = [
    {
        question: "Who is the main villain in the Star Wars original trilogy?",
        options: ["Darth Vader", "Luke Skywalker", "Han Solo", "Leia Organa"],
        answer: "Darth Vader"
    },
    {
        question: "Which superhero is known for saying 'I am Iron Man'?",
        options: ["Thor", "Hulk", "Captain America", "Iron Man"],
        answer: "Iron Man"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    if (currentQuestionIndex < quizQuestions.length) {
        const questionData = quizQuestions[currentQuestionIndex];
        let quizHtml = `<h3>${questionData.question}</h3>`;
        
        questionData.options.forEach(option => {
            quizHtml += `<button onclick="checkAnswer('${option}')">${option}</button><br>`;
        });

        document.getElementById('quiz-container').innerHTML = quizHtml;
    } else {
        document.getElementById('quiz-container').innerHTML = `<h3>Your score: ${score}/${quizQuestions.length}</h3>`;
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer was ${correctAnswer}`);
    }

    currentQuestionIndex++;
    startQuiz(); // Load next question
}
