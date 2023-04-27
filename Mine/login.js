  function validateLogin() {
    // Get the values of the username and password inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password are correct
    if (username === "myUsername" && password === "myPassword") {
      // If they are correct, redirect to the index.html file
      window.location.href = "index.html";
    } else {
      // If they are not correct, display an error message
      alert("Incorrect username or password.");
    }
  }