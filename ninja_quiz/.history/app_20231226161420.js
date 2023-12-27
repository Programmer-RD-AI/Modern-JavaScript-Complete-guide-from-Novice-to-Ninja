const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const percentage = document.querySelector("div.result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  userAnswers.forEach((userAnswer, idx) => {
    if (userAnswer === correctAnswers[idx]) {
      score += 100 / correctAnswers.length;
    }
  });
  percentage.classList.remove("d-none");
  percentage.querySelector("span").textContent = `${score}%`;
});

// window object (global object, where everything is stored)
// console.log("hello");
// window.console.log("hello");
console.log(document.querySelector("form"));
setTimeout(() => {}, 3000);
