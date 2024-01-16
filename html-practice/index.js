const multiplyNumbers = () => {
    // Get the values from the input fields
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
  
    // Perform the multiplication
    const result = parseFloat(num1) * parseFloat(num2);
  
    // Display the result
    console.log(result);
    document.getElementById("multiplicationResult").innerHTML = result;
  };
  
  const divideNumbers = () => {
    // Get the values from the input fields
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
  
    // Perform the multiplication
    const result = parseFloat(num1) / parseFloat(num2);
  
    // Display the result
    console.log(result);
    document.getElementById("multiplicationResult").innerHTML = result;
  };
  const subNumbers = () => {
    // Get the values from the input fields
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
  
    // Perform the multiplication
    const result = parseFloat(num1) - parseFloat(num2);
  
    // Display the result
    console.log(result);
    document.getElementById("multiplicationResult").innerHTML = result;
  };
  
  const addNumbers = () => {
    // Get the values from the input fields
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
  
    // Perform the multiplication
    const result = parseFloat(num1) + parseFloat(num2);
  
    // Display the result
    console.log(result);
    document.getElementById("multiplicationResult").innerHTML = result;
  };