function toggleVisibility(elementId) {
    const inputElement = document.getElementById(elementId);
    if (inputElement.type === "password") {
      inputElement.type = "text";
    } else {
      inputElement.type = "password";
    }
  }
  