// TODO: use document.forms instead
const form = document.getElementById("access-form")

async function submitForm() {
  const validationResult = validateAndPrepareFormData();

  if (!validationResult.valid) {
    let errorList = document.getElementById("error-list");
    if (!errorList) {
      errorList = document.createElement("ul");
      errorList.id = "error-list";
      errorList.style.color = "lightblue";
      form.insertAdjacentElement("beforebegin", errorList);
    } else {
      errorList.innerHTML = "";
    }
    validationResult.errors.forEach((error) => {
      const li = document.createElement("li");
      li.textContent = error;
      errorList.appendChild(li);
    });
    return;
  }

  const formData = validationResult.formData;

  try {
    const response = await fetch('https://app.autocoderover.dev/apply', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.text();
      console.log(result);

      form.style.display = "none";
      let div = document.getElementById("result");
      if (!div) {
        div = document.createElement("div");
        div.id = "result";
        div.className = "card col-lg-10 bg-gray-800";
        div.style.color = "white";
        div.style.display = "block";
        form.insertAdjacentElement("beforebegin", div);
      }

      div.innerHTML = result;

    } else {
      console.error('Form submission failed.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function validateAndPrepareFormData() {
  const formData = new FormData();
  let errors = [];

  // Trim and validate each input field
  const firstName = form['first-name'].value.trim();
  if (firstName.length < 2 || firstName.length > 255) {
    errors.push('First name must be between 2 and 255 characters long.');
  } else {
    formData.append('first-name', firstName);
  }

  const lastName = form['last-name'].value.trim();
  if (lastName.length < 2 || lastName.length > 255) {
    errors.push('Last name must be between 2 and 255 characters long.');
  } else {
    formData.append('last-name', lastName);
  }

  const email = form['email'].value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push('Please enter a valid email address.');
  } else if (email.length > 255) {
    errors.push('Email must be less than 256 characters long.');
  } else {
    formData.append('email', email);
  }

  const affiliation = form['affiliation'].value.trim();
  if (affiliation.length < 2 || affiliation.length > 255) {
    errors.push('Affiliation must be between 2 and 255 characters long.');
  } else {
    formData.append('affiliation', affiliation);
  }

  const jobTitle = form['job-title'].value.trim();
  if (jobTitle.length < 2 || jobTitle.length > 255) {
    errors.push('Job title must be between 2 and 255 characters long.');
  } else {
    formData.append('job-title', jobTitle);
  }

  const page = form['page'].value.trim();
  if (page.length > 1023) {
    errors.push('Personal page url must be less than 1024 characters long.');
  } else {
    formData.append('page', page);
  }

  const detail = form['detail'].value.trim();
  if (detail.length > 2047) {
    errors.push('Detail must be less than 2048 characters long');
  } else {
    formData.append('detail', detail);
  }

  // Return true and formData if there are no errors, otherwise return false and errors
  if (errors.length === 0) {
    return { valid: true, formData: formData };
  } else {
    return { valid: false, errors: errors };
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm();
  console.log("Form submitted");
})
