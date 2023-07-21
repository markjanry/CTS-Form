function clickSubmitNowButton() {
  // Validate email address
  const emailInput = document.getElementById('input-2');
  const emailValue = emailInput.value.trim();
  if (!validateEmail(emailValue)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate form fields
  const companyNameInput = document.getElementById('input-1');
  const emirateSelect = document.getElementById('select-emirate');
  const communitySelect = document.getElementById('select-community');
  const priceInput = document.getElementById('input-3');

  if (
    companyNameInput.value.trim() === '' ||
    emirateSelect.value === 'Select Emirate' ||
    communitySelect.value === 'Select Community' ||
    priceInput.value.trim() === ''
  ) {
    alert('Please fill in all required fields before submitting.');
    return;
  }

  // If all validations pass, submit the form
  document.getElementById('myForm').submit();
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
