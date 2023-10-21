function calculator() {
  let num1 = +prompt("Enter first number..");
  if (isNaN(num1)) {
    alert("Invalid Number!");
    return;
  }
  let num2 = +prompt("Enter second number..");
  if (isNaN(num2)) {
    alert("Invalid Number!");
    return;
  }
  let operator = prompt("Enter an operator (+, -, *, /)");
  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/"
  ) {
    alert("Please enter a valid operator(+, -, *, /)");
    return;
  }
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  alert(`Result: ${result}`);
}
calculator();
