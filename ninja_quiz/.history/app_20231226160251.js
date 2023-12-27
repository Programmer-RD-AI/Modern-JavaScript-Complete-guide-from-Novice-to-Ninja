const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const percentage = document.querySelector("span");
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
  document
    .querySelector("div.result")
    .setAttribute("class", "result py-4 bg-light text-center");
  for (let i = 0; i < score; i++) {
      percentage.textContent = `${i}%`;
      
  }
});
