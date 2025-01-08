let currentIndex = 0; // Tracks the current question index
let score = 0; // Tracks the user's score
const maxQuestions = 10; // Number of questions for the test

// Randomly select 50 questions from the available question set
const selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, maxQuestions);

// DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

// Create a custom modal element for displaying the result
const resultModal = document.createElement("div");
resultModal.id = "resultModal";
resultModal.innerHTML = `
  <h2>Test Complete!</h2>
  <p id="resultScore"></p>
  <div id="answerSummary"></div> <!-- This will show the correct/wrong answers -->
  <button id="closeModal">Close</button>
`;
document.body.appendChild(resultModal);

// Store user answers
let userAnswers = [];

// Function to show the custom alert modal
function showResultModal() {
  const resultScore = document.getElementById("resultScore");
  resultScore.textContent = `Your Score: ${score} out of ${maxQuestions}`;
  
  // Show a summary of the answers
  const answerSummary = document.getElementById("answerSummary");
  answerSummary.innerHTML = ''; // Clear previous summaries
  
  selectedQuestions.forEach((question, index) => {
    const answerText = document.createElement("p");
    const userAnswer = userAnswers[index];
    
    if (userAnswer !== undefined) {
      if (userAnswer === question.correct) {
        answerText.innerHTML = `Question ${index + 1}: Correct! Your answer was: ${question.options[userAnswer]}`;
        answerText.style.color = "green"; // Correct answer in green
      } else {
        answerText.innerHTML = `Question ${index + 1}: Wrong! You selected: ${question.options[userAnswer]}, Correct answer: ${question.options[question.correct]}`;
        answerText.style.color = "red"; // Wrong answer in red
      }
    }
    answerSummary.appendChild(answerText);
  });

  resultModal.classList.add("show"); // Add 'show' class to display the modal
}

// Function to render the current question
function renderQuestion() {
  const currentQuestion = selectedQuestions[currentIndex];

  // Display question
  questionElement.textContent = `Question ${currentIndex + 1} of ${maxQuestions}:
${currentQuestion.question}`;

  // Display options
  optionsElement.innerHTML = ""; // Clear previous options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button");
    button.onclick = () => handleAnswer(index, button); // Pass button reference
    optionsElement.appendChild(button);
  });

  // Update navigation buttons
  backButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === selectedQuestions.length - 1 || !optionsElement.querySelector('.correct, .wrong'); // Disable next until an option is selected
}

// Function to handle answer selection
function handleAnswer(selectedIndex, selectedButton) {
  const currentQuestion = selectedQuestions[currentIndex];
  const buttons = optionsElement.querySelectorAll("button");

  buttons.forEach((button, index) => {
    if (index === currentQuestion.correct) {
      button.classList.add("correct"); // Add green border for the correct answer
    } else {
      button.classList.add("wrong"); // Add red border for wrong answers
    }
    button.disabled = true; // Disable all buttons after selection
  });

  // Store the user's selected answer
  userAnswers[currentIndex] = selectedIndex;

  // If the user clicks the correct answer, increment the score
  if (selectedIndex === currentQuestion.correct) {
    score++;
  }

  // Enable the next button after selection
  nextButton.disabled = false;
}

// Event listeners for navigation buttons
backButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < selectedQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else if (currentIndex === selectedQuestions.length - 1) {
    // Test is complete, show custom modal
    showResultModal();
  }
});

// Close modal when clicking the close button
document.getElementById("closeModal").addEventListener("click", () => {
  resultModal.classList.remove("show"); // Hide the modal
});

// Initial render
renderQuestion();
