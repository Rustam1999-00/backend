const formTestimonial = document.getElementById("formTestimonial");
const imageClient = document.getElementById("file");
const nameClient = document.getElementById("name");
const clientDesc = document.getElementById("description");

//* Testimonial
const TESTIMONIAL_API_ENDPOINT = "http://localhost:4000/post/testimonial";
formTestimonial.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData();
  formData.append("image", imageClient.files[0]);
  formData.append("name", nameClient.value);
  formData.append("description", clientDesc.value);

  fetch(TESTIMONIAL_API_ENDPOINT, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        //* Handle successful response
        alert("Testimonial added successfully.");
      } else {
        //* Handle error response
        throw new Error("Error " + response.status);
      }
    })
    .catch((error) => console.log(error));

  nameClient.value = "";
  clientDesc.value = "";
});
