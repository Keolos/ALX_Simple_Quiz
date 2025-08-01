// Function to check the user's answer
function checkAnswer() {
    // Correct answer is "4"
    const correctAnswer = "4";

    // Get the user's selected answer (radio button that is checked)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback paragraph
    const feedback = document.getElementById("feedback");

    // Check if the user selected an option
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option was selected
        feedback.textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
