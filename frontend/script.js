document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email-input");
    const checkBtn = document.getElementById("check-btn");
    const resultBox = document.getElementById("result-box");
    const resultIcon = document.getElementById("result-icon");
    const resultText = document.getElementById("result-text");
    const resultDesc = document.getElementById("result-desc");
    const charCount = document.getElementById("char-count");

    // Live character counter logic
    emailInput.addEventListener("input", () => {
        charCount.innerText = `${emailInput.value.length} characters`;
    });

    // Main button action
    checkBtn.addEventListener("click", async () => {
        const textValue = emailInput.value.trim();

        if (!textValue) {
            alert("Please paste some content first!");
            return;
        }

        // UI updates during loading state
        checkBtn.disabled = true;
        checkBtn.style.opacity = "0.7";
        checkBtn.querySelector("span").innerText = "Analyzing System Patterns...";
        
        resultBox.classList.remove("hidden", "state-spam", "state-ham");
        resultBox.classList.add("state-ham"); // Temporary neural tone
        resultText.innerText = "Processing Text Matrix...";
        resultDesc.innerText = "Extracting token frequencies through Naive Bayes pipeline.";
        resultIcon.className = "fa-solid fa-spinner fa-spin";

        try {
            // Hit FastAPI Endpoint
            const response = await fetch("http://127.0.0.1:8000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: textValue })
            });

            if (!response.ok) throw new Error("Server communication fault.");

            const data = await response.json();
            const prediction = data.prediction; // Expects 'Spam' or 'NonSpam'

            // Reset loading state
            resultBox.classList.remove("state-ham");
            
            // Apply conditional luxury UI themes based on classification output
            if (prediction === "Spam") {
                resultBox.classList.add("state-spam");
                resultIcon.className = "fa-solid fa-triangle-exclamation";
                resultText.innerText = "Spam / Malicious Content Detected";
                resultDesc.innerText = "High density of psychological triggers or promotional hooks matching threat indices.";
            } else {
                resultBox.classList.add("state-ham");
                resultIcon.className = "fa-solid fa-circle-check";
                resultText.innerText = "Secure / Clean Communication";
                resultDesc.innerText = "Text features show high alignment with normal conversational language distributions.";
            }

        } catch (error) {
            console.error(error);
            resultBox.classList.add("state-spam");
            resultIcon.className = "fa-solid fa-circle-xmark";
            resultText.innerText = "System Interface Timeout";
            resultDesc.innerText = "Ensure your local FastAPI backend server is actively running on port 8000.";
        } finally {
            checkBtn.disabled = false;
            checkBtn.style.opacity = "1";
            checkBtn.querySelector("span").innerText = "Analyze Content";
        }
    });
});