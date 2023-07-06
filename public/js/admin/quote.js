const form = document.getElementById("form");
const quoteName = document.getElementById("name");
const quoteEmail = document.getElementById("email");
const quoteMobile = document.getElementById("mobile");
const quoteService = document.getElementById("service");
const quoteDescription = document.getElementById("description");

const API_ENDPOINT = "http://localhost:2002/post/quote";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  console.log(formData);

  formData.append("name", quoteName.value);
  formData.append("email", quoteEmail.value);
  formData.append("mobile", quoteMobile.value);
  formData.append("service", quoteService.value);
  formData.append("description", quoteDescription.value);

  fetch(API_ENDPOINT, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data != false) {
        alert("Successfully created Quote info");
      } else {
        alert("Error creating Quote");
      }
    })
    .catch((error) => console.log(error.message));
});
