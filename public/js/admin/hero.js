const form = document.getElementById("form");
const heroImage = document.getElementById("image");
const heroDescription = document.getElementById("description");

const API_ENDPOINT = "http://localhost:2002/post/hero";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  console.log(formData);

  formData.append("image", heroImage.files[0]);
  formData.append("description", heroDescription.value);

  fetch(API_ENDPOINT, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data != false) {
        alert("Successfully created Hero info");
      } else {
        alert("Error creating Hero info");
      }
    })
    .catch((error) => console.log(error.message));
});
