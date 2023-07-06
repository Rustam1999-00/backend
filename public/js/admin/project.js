const form = document.getElementById("form");
const projectImage = document.getElementById("image");
const projectName = document.getElementById("name");
const projectLink = document.getElementById("link");

const API_ENDPOINT = "http://localhost:2002/post/project";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData();
  console.log(formData);

  formData.append("image", projectImage.files[0]);
  formData.append("name", projectName.value);
  formData.append("link", projectLink.value);
  // formData.append("isCompleted", projectisCompleted.value);

  fetch(API_ENDPOINT, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data != false) {
        alert("Successfully created Project info");
      } else {
        alert("Error creating Project");
      }
    })
    .catch((error) => console.log(error.message));
});
