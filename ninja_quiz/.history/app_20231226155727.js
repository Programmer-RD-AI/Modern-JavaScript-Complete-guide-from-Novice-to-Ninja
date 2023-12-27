const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const percentage = document.querySelector("text-primary display-4 p-3");
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
  for (let i = 1; i < score; i++) {}
});
