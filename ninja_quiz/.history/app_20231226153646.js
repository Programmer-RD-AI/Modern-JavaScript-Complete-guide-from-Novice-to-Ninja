const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2, form.q3, form.q4];
});
