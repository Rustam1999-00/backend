const form = document.getElementById("form");
const membersImage = document.getElementById("image");
const membersName = document.getElementById("name");
const membersPosition = document.getElementById("position");
const membersFacebook = document.getElementById("facebook");
const membersTwitter = document.getElementById("twitter");
const membersInstagram = document.getElementById("instagram");

const API_ENDPOINT = "http://localhost:2002/post/member";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  console.log(formData);

  formData.append("image", membersImage.files[0]);
  formData.append("name", membersName.value);
  formData.append("position", membersPosition.value);
  formData.append("facebook", membersFacebook.value);
  formData.append("twitter", membersTwitter.value);
  formData.append("instagram", membersInstagram.value);

  fetch(API_ENDPOINT, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data != false) {
        alert("Successfully created Member");
      } else {
        alert("Error creating Member");
      }
    })
    .catch((error) => console.log(error.message));
});
