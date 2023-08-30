function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var correctPassword = "veryeasychall?not"; // Replace with your actual password

    if (enteredPassword === correctPassword) {
        // Correct password, hide the pop-up
        var popup = document.getElementById("popup");
        popup.style.display = "none";
    } else {
        // Incorrect password, display an error message
        alert("Incorrect password. Please try again.");
    }
}