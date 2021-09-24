let greet = "Welcome";
function outer() {
  alert(greet);
  let course = "Holberton";
  function inner() {
    alert(greet + " " + course);
    let exclamation = "!";
    function inception() {
      alert(greet + " " + course + exclamation);
    }
    inception();
  }
  inner();
}

outer();
