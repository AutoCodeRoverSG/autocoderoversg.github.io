// TODO: use document.forms instead
const form = document.getElementById("access-form")

async function submitForm() {
  const formData = new FormData(form);

  try {
    const response = await fetch('http://localhost:8804/access/record', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.text();
      console.log(result);

      // check if there is div with id 'result'. If not, create one before the form
      let div = document.getElementById("result");
      if (!div) {
        div = document.createElement("div");
        div.id = "result";
        div.style.color = "red";
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm();
  console.log("Form submitted");
})
