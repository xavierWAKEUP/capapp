document.getElementById("verifyButton").addEventListener("click", function() {
    const enteredCode = document.getElementById("verificationCode").value;
    
    if (enteredCode === "1930074") {
        document.getElementById("verificationResult").innerText = "Code is valid!";
    } else {
        document.getElementById("verificationResult").innerText = "Invalid Code, Please inform Dispensory";
    }
});
