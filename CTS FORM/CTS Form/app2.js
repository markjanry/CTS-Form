let ctsSectionAdded = false;

function clickAddMoreCtsButton() {
  if (!ctsSectionAdded) {
    const ctsSection = document.getElementById('ctsSection');
    const clone = ctsSection.cloneNode(true);
    ctsSection.parentNode.appendChild(clone);
    ctsSectionAdded = true;
  }

  // Move both buttons to the bottom
  const form = document.getElementById('myForm');
  const addCtsButton = form.querySelector('button[onclick="clickAddMoreCtsButton()"]');
  const submitButton = form.querySelector('button[onclick="clickSubmitNowButton()"]');
  form.appendChild(addCtsButton);
  form.appendChild(submitButton);

  // Clear price input field in the original CTS section
  const originalPriceInput = ctsSection.querySelector('#input-3');
  originalPriceInput.value = '';

  // Remove the onclick attribute from the cloned "Add More CTS" button
  const clonedAddCtsButton = form.querySelector('button[onclick="clickAddMoreCtsButton()"]:last-child');
  clonedAddCtsButton.removeAttribute('onclick');
}