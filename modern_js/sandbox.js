// const ul = document.querySelector("ul");
// ul.remove();

const items = document.querySelectorAll("li");
items.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e);
    e.target.remove();
  });
});
