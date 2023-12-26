const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents the default action of a event (in this is to refresh the page)
  const username = form.username.value;
  const usernamepattern = /^[a-zA-Z]{6,12}$/;
  if (usernamepattern.test(username)) {
  } else {
  }
});
