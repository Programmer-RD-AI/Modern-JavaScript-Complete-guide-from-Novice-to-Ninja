class User {
  constructor(name, email) {
    // set up properties in an object
    this.name = name;
    this.email = email;
  }
  login() {
    
  } // arrow functions dont use this object instance.
}

const userOne = new User("mario", "mario@gmail.com");
