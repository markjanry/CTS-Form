//Email VAlidation function
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



//ADD CTS BUTTON FUNCTION
let count = 1;

function addCtsSection() {
  if (count < 2) {
    count++;
    const wrapper = document.createElement("div");
    wrapper.className = "cts-wrapper";
    wrapper.innerHTML = `
      <p class="content-${count}">CTS ${count}</p>
      <div class="form-container">
        <div class="form-row">
          <label for="select-1-${count}">Emirate (2)</label>
          <select id="select-1-${count}">
            <option value="Select Emirate">Select Emirate</option>
            <option value="option1">Dubai</option>
            <option value="option2">Sharjah</option>
            <option value="option3">Abu Dhabi</option>
            <option value="option4">Fujairah</option>
            <option value="opntion5">Ras Al khaimah</option>
            <option value="option6">Ajman</option>
            <option value="option7">Umm Al quwain</option>
          </select>
        </div>
        <div class="form-row">
          <label for="select-2-${count}">Community (2)</label>
          <select id="select-2-${count}">
          <option value="dubai-marina">Dubai Marina</option>
          <option value="downtown-dubai">Downtown Dubai</option>
          <option value="palm-jumeirah">Palm Jumeirah</option>
          <option value="jlt">Jumeirah Lakes Towers (JLT)</option>
          <option value="arabian-ranches">Arabian Ranches</option>
          <option value="emirates-hills">Emirates Hills</option>
          <option value="jbr">Jumeirah Beach Residence (JBR)</option>
          <option value="business-bay">Business Bay</option>
          <option value="the-greens-and-the-views">The Greens and The Views</option>
          <option value="dubai-silicon-oasis">Dubai Silicon Oasis</option>

          <option value="al-reef">Al Reef</option>
              <option value="saadiyat-island">Saadiyat Island</option>
              <option value="yas-island">Yas Island</option>
              <option value="al-raha-beach">Al Raha Beach</option>
              <option value="khalifa-city">Khalifa City</option>
              <option value="al-mushrif">Al Mushrif</option>
              <option value="al-bateen">Al Bateen</option>
              <option value="al-manaseer">Al Manaseer</option>
              <option value="al-reem-island">Al Reem Island</option>
              <option value="al-falah-city">Al Falah City</option>
            
              <!--Sharjah-->

                <option value="al-nahda">Al Nahda</option>
                <option value="al-qasimia">Al Qasimia</option>
                <option value="al-taawun">Al Taawun</option>
                <option value="al-khan">Al Khan</option>
                <option value="al-majaz">Al Majaz</option>
                <option value="muwaileh">Muwaileh</option>
                <option value="aljada">Aljada</option>
                <option value="al-tai">Al Tai</option>
                <option value="al-hazana">Al Hazana</option>
                <option value="al-nabba">Al Nabba</option> 

                <!--Ajman-->

                  <option value="ajman-downtown">Ajman Downtown</option>
                  <option value="al-rashidiya">Al Rashidiya</option>
                  <option value="al-mowaihat">Al Mowaihat</option>
                  <option value="al-jurf">Al Jurf</option>
                  <option value="emirates-city">Emirates City</option>
                  <option value="al-rawda">Al Rawda</option>
                  <option value="al-zahraa">Al Zahraa</option>
                  <option value="al-nuaimiya">Al Nuaimiya</option>
                  <option value="masfout">Masfout</option>
                  <option value="al-hamidiya">Al Hamidi
                
                <!--Umm Al Quwain-->
                
                  <option value="umm-al-quwain-marina">Umm Al Quwain Marina</option>
                  <option value="al-salamah">Al Salamah</option>
                  <option value="al-raas">Al Raas</option>
                  <option value="al-hamra">Al Hamra</option>
                  <option value="al-dar-al-baida">Al Dar Al Baida</option>
                  <option value="mistral">Mistral</option>
                  <option value="flamingo-villas">Flamingo Villas</option>
                  <option value="dreamland-aqua-park">Dreamland Aqua Park</option>
                  <option value="emirates-modern-industrial-area">Emirates Modern Industrial Area</option>
                  <option value="umm-al-thuoob">Umm Al Thuoob</option>
                
                <!--Ras Al Khaimah-->
              
                  <option value="al-hamra-village">Al Hamra Village</option>
                  <option value="mina-al-arab">Mina Al Arab</option>
                  <option value="al-dhait">Al Dhait</option>
                  <option value="al-seer">Al Seer</option>
                  <option value="julphar-towers">Julphar Towers</option>
                  <option value="al-nakheel">Al Nakheel</option>
                  <option value="al-jazeera">Al Jazeera</option>
                  <option value="al-marjan-island">Al Marjan Island</option>
                  <option value="khuzam">Khuzam</option>
                  <option value="al-mamourah">Al Mamourah</option>
                
                <!--Fujairah-->              

                  <option value="al-faseel">Al Faseel</option>
                  <option value="dibba">Dibba</option>
                  <option value="fujairah-city">Fujairah City</option>
                  <option value="kalba">Kalba</option>
                  <option value="al-ghurfa">Al Ghurfa</option>
                  <option value="al-halah">Al Hala</option>
                  <option value="al-madhab">Al Madhab</option>
                  <option value="al-majaz">Al Majaz</option>
                  <option value="sharm">Sharm</option>
                  <option value="tawyeen">Tawyeen</option>   
            
          </select>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="input-group">
          <label for="input-3-${count}">Your price in AED (2)</label>
          <input type="number" id="input-3-${count}" placeholder="Enter your price">
        </div>
      </div>
    `;
    document.querySelector(".button-wrapper").insertAdjacentElement("beforebegin", wrapper);
  }
}

document.querySelector(".Add-CTS-button").addEventListener("click", addCtsSection);



//SUBMIT BUTTION FUNCTION
function submitForm() {
  const ctsSections = document.querySelectorAll(".cts-wrapper");
  ctsSections.forEach((section, index) => {
    const emirateSelect = section.querySelector(`#select-1-${index + 1}`);
    const communitySelect = section.querySelector(`#select-2-${index + 1}`);
    const priceInput = section.querySelector(`#input-3-${index + 1}`);
    console.log(`CTS ${index + 1}:`);
    console.log("Emirate:", emirateSelect.value);
    console.log("Community:", communitySelect.value);
    console.log("Price:", priceInput.value);
  });
}

const form = document.querySelector('form');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting and refreshing the page
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  
  const name = nameInput.value;
  const email = emailInput.value;
  
  
  resultDiv.innerHTML = `Thank you for submitting, ${name}! We will send a confirmation email to ${email}.`;
  nameInput.value = '';
  emailInput.value = '';
});

const emirateSelect = document.getElementById('select-emirate');
const communitySelect = document.getElementById('select-community');

const communities = {
  'dubai': ['dubai-marina', 'downtown-dubai', 'palm-jumeirah', 'jlt', 'arabian-ranches', 'emirates-hills', 'jbr', 'business-bay', 'the-greens-and-the-views', 'dubai-silicon-oasis'],
  'abu-dhabi': ['al-reef', 'saadiyat-island', 'yas-island', 'al-raha-beach', 'khalifa-city', 'al-mushrif', 'al-bateen', 'al-manaseer', 'al-reem-island', 'al-falah-city'],
  'sharjah': ['al-nahda', 'al-qasimia', 'al-taawun', 'al-khan', 'al-majaz', 'muwaileh', 'aljada', 'al-tai', 'al-hazana', 'al-nabba'],
  'ajman': ['ajman-downtown', 'al-rashidiya', 'al-mowaihat', 'al-jurf', 'emirates-city', 'al-rawda', 'al-zahraa', 'al-nuaimiya', 'masfout', 'al-hamidiya'],
  'umm-al-quwain': ['umm-al-quwain-marina', 'al-salamah', 'al-raas', 'al-hamra', 'al-dar-al-baida', 'mistral', 'flamingo-villas', 'dreamland-aqua-park', 'emirates-modern-industrial-area', 'umm-al-thuoob'],
  'ras-al-khaimah': ['al-hamra-village','mina-al-arab','al-dhait','al-seer','julphar-towers','al-nakheel','al-jazeera','al-marjan-island','khuzam','al-mamourah'],
  'fujairah': ['al-faseel','dibba','fujairah-city','kalba','al-ghurfa','al-halah','al-madhab','al-majaz','sharm','tawyeen']
};

emirateSelect.addEventListener('change', () => {
  const selectedEmirate = emirateSelect.value;
  communitySelect.innerHTML = '<option value="">Select Community</option>'; // clear the dropdown and add a default option

  if (selectedEmirate) {
    communities[selectedEmirate].forEach((community) => {
      const option = document.createElement('option');
      option.text = community.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      option.value = community;
      communitySelect.add(option);
    });
  }
});
