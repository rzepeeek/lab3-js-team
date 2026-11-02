function startQuiz() {
    alert('Quiz startuje');
}
    document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    if (startButton) {
        startButton.addEventListener('click', startQuiz);
    }
});

const questions = [
    ['Które laboratorium z full stack development robimy?', 3],
    ['Na którym zadaniu jesteśmy?', 6],
    ['Ile godzin ma minuta?', 0]
];

function startQuiz() {
    let score = 0;

    for (const question of questions) {
        const answer = prompt(question[0], '');

        if (Number(answer) === question[1]) {
            alert('Prawidłowa odpowiedź!');
            score++;
        } else {
            alert('Błąd. Prawidłowa odpowiedź to ' + question[1]);
        }
    }

    const wynikElement = document.getElementById('wynik') || document.getElementById('quiz-status');

    if (wynikElement) {
        wynikElement.textContent = `Wynik: ${score} / ${questions.length}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    if (startButton) {
        startButton.addEventListener('click', startQuiz);
    }
});