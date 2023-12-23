// const ul = document.querySelector("ul");
// ul.remove();
const button = document.querySelector("button");
button.addEventListener("click", () => {});

const items = document.querySelectorAll("li");
items.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e);
    e.target.remove();
  });
});
