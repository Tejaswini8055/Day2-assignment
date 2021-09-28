function myFunction1(event) {
    document.getElementById("demo").innerHTML = event.inputType;
  }

  function Welcome() {
    alert("Welcome to this page");
  }

  function form() {
    alert("The form was submitted");
  }

  function change() {
    let x = document.getElementById("mySelect").value;
    document.getElementById("demo1").innerHTML = "You selected: " + x;
  }