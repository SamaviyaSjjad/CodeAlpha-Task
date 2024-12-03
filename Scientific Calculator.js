let resultField = document.getElementById("result");

// Append value to the input field
function appendValue(value) {
    resultField.value += value;
}

// Clear the input field
function clearScreen() {
    resultField.value = "";
}

// Calculate the result
function calculate() {
    try {
        resultField.value = eval(resultField.value); // Evaluate the expression
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Delete the last character
function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}
