
// Email Validation function
function validateEmail() {
    const emailInput = document.getElementById("input-2");
    const email = emailInput.value.trim();
  
    // Check if email is empty
    if (email === "") {
      alert("Email is required");
      return false;
    }
  
    // Check if email is valid
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    // Validation passed
    return true;
  }
  
  function validateForm() {
    const selectEmirate = document.getElementById('select-emirate');
    const selectCommunity = document.getElementById('select-community');
    const inputPrice = document.getElementById('input-3');
    
    let isValid = true;
  
    if (selectEmirate.value === 'Select Emirate') {
      isValid = false;
      selectEmirate.classList.add('invalid');
    } else {
      selectEmirate.classList.remove('invalid');
    }
  
    if (selectCommunity.value === 'Select Community') {
      isValid = false;
      selectCommunity.classList.add('invalid');
    } else {
      selectCommunity.classList.remove('invalid');
    }
  
    if (inputPrice.value.trim() === '') {
      isValid = false;
      inputPrice.classList.add('invalid');
    } else {
      inputPrice.classList.remove('invalid');
    }
  
    return isValid;
  }
  
  // Event listener for form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault();
      // Display an error message or perform any other action for invalid form
    }
  });
