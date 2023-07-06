const form = document.getElementById("form");
const clientImage = document.getElementById("image");
const clientDescription = document.getElementById("description");
const clientName = document.getElementById("name");
const clientProfession = document.getElementById("profession");

const API_ENDPOINT = "http://localhost:2002/post/client";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  console.log(formData);

  formData.append("image", clientImage.files[0]);
  formData.append("description", clientDescription.value);
  formData.append("name", clientName.value);
  formData.append("profession", clientProfession.value);

  fetch(API_ENDPOINT, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data != false) {
        alert("Successfully created Client");
      } else {
        alert("Error creating Client");
      }
    })
    .catch((error) => console.log(error.message));
});
