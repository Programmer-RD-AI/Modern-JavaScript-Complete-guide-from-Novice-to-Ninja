const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (e) => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};
getTodos((err, data) => {
  // error first always
  if (err) {
    console.log("OHHH NOOO");
    console.log(err);
  } else if (data) {
    console.log("GOT THE DATA");
    console.log(data);
  }
});
