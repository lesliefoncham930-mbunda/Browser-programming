// ===== Console + Variables =====
console.log("Page loaded!");

let isDarkMode = false; // STATE variable
let clickCount = 0;      // second variable

// ===== Functions =====
function setTheme() {
  document.body.classList.toggle("dark");
  isDarkMode = !isDarkMode;
  console.log("Dark mode:", isDarkMode);
}

function countClick() {
  clickCount++;
  console.log("Button clicked:", clickCount);
}

// ===== Events =====
document.getElementById("themeBtn").addEventListener("click", setTheme);
document.getElementById("clickBtn").addEventListener("click", countClick);
