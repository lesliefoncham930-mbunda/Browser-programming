console.log("JS connected ✅");

/* =========================================================
   STUDENT TODO VERSION (Exercises 9–16)
   Rules:
   - Do NOT change HTML ids
   - Fill only TODO parts
   - Test in browser + console
   ========================================================= */

/* =========================
   Exercise 9 — Grade
   TODO:
   1) Read score from input
   2) Use if / else if / else
   3) Show Grade: A/B/C/D/F
   ========================= */
const scoreInput = document.getElementById("scoreInput");
const btnGrade = document.getElementById("btnGrade");
const gradeOut = document.getElementById("gradeOut");

btnGrade.onclick = function () {
  // TODO: get score as number
  // const score = ...
  const score = Number(scoreInput.value);

  // TODO: implement grading logic
  // if (score < 0 || score > 100) ...
  // else if (score >= 90) ...
  // else if (score >= 80) ...
  // else if (score >= 70) ...
  // else if (score >= 60) ...
  // else ...

  gradeOut.innerText = "Grade: (TODO)";
};