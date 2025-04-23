function login() {
  // Get the name and password inputs
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  // The pre-set password (you can change this later)
  const correctPassword = "playport123";

  // Check if the name and password are correct
  if (name !== "" && password === correctPassword) {
    // If valid, proceed to the next page (game selection)
    window.location.href = "menu.html";
  } else {
    // If invalid, show an alert
    alert("Incorrect password. Please try again.");
  }
}
