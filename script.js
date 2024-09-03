// Initialize the event listener
function init() {
  const birthInput = document.querySelector("#birth");
  birthInput.addEventListener("change", calculateAge);
}

function calculateAge() {
  const birthDate = new Date(document.querySelector("#birth").value);
  const today = new Date();

  const resultDiv = document.querySelector(".showResult");
  resultDiv.innerHTML = "";

  if (birthDate > today) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent =
      "Please enter a valid date of birth (not in the future).";
    resultDiv.appendChild(messageDiv);
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += previousMonth.getDate();
    ageMonths--;

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  }

  const ageMessage = document.createElement("div");
  ageMessage.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  resultDiv.appendChild(ageMessage);
}

// Initialize the script
init();
