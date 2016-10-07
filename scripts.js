function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

  function myFunction2() {
    document.getElementById("demo").innerHTML = "test";
  }

  var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
};
