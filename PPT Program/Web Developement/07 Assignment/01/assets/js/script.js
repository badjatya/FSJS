// Get DOM elements
const quizSelect = document.getElementById("quiz");
const quizBtn = document.querySelector(".quiz-btn");
const quizStatus = document.querySelector(".quiz-status");
const dashboardScore = document.querySelector(".dashboard__score");
const dashboardWrong = document.querySelector(".dashboard__wrong");
const dashboardResult = document.querySelector(".dashboard__result");
const leaderboardBtn = document.querySelector(".leaderboard-btn");
const leaderboardModal = document.querySelector(".leaderboard-modal");
const leaderboardCloseBtn = document.querySelector(".leaderboard-close-btn");
const leaderboardList = document.querySelector(".leaderboard-list");

// Initialize quiz data
let score = 0;
let totalQuestions = 2;
let wrongAnswers = 0;

// Add event listener to the quiz button
quizBtn.addEventListener("click", () => {
    // Get the selected answer
    const selectedAnswer = parseInt(quizSelect.value);

    // Check if the answer is correct
    if (selectedAnswer === 4) {
        score++;
        quizStatus.textContent = "Status: Right Answer";
        quizStatus.style.background = "green";
    } else {
        wrongAnswers++;
        quizStatus.textContent = "Status: Wrong Answer";
        quizStatus.style.background = "red";
    }

    // Show popup indicating right or wrong answer
    showModal();

    // Update dashboard
    dashboardScore.textContent = `Score: ${score}`;
    dashboardWrong.textContent = `Total Wrong Answers: ${wrongAnswers}`;

    // Check if all questions are answered
    if (score + wrongAnswers === totalQuestions) {
        leaderboardBtn.disabled = false;
    }
});

// Add event listener to leaderboard button
leaderboardBtn.addEventListener("click", () => {
    leaderboardModal.style.display = "block";
});

// Add event listener to leaderboard close button
leaderboardCloseBtn.addEventListener("click", () => {
    leaderboardModal.style.display = "none";
});

// Function to show the leaderboard popup
function showModal() {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = quizStatus.textContent;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}

// Function to update leaderboard
function updateLeaderboard() {
    const leaderboardItem = document.createElement("li");
    leaderboardItem.textContent = `Correct: ${score} | Incorrect: ${wrongAnswers}`;

    leaderboardList.appendChild(leaderboardItem);
}

// Call updateLeaderboard function
updateLeaderboard();
