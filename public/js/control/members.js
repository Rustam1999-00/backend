const table_body = document.querySelector(".table-body");
const modal = document.querySelector(".modal-wrap");
const API_ENDPOINT = "http://localhost:2002/get/members";
const API_ENDPOINT_EDIT = "http://localhost:2002/edit/members/:id";
const API_ENDPOINT_DELETE = "http://localhost:2002/delete/members/:id";

fetch(API_ENDPOINT, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((client) => {
      table_body.innerHTML += `
         <tr data-id="${client.id}">
            <td><img width='50' src='http://localhost:2002/${client.image}' /></td>
            <td>${client.name}</td>
            <td>${client.position}</td>
            <td>${client.facebook}</td>
            <td>${client.twitter}</td>
            <td>${client.instagram}</td>
            <td><button data-project-id="${client._id}" type='button' class='btn btn-success edit'>EDIT</button></td>
            <td><button data-project-id="${client._id}"  type='button' class='btn btn-danger delete'>DELETE</button></td>
         </tr>
        `;
    });
  })
  .catch((error) => console.log(error));

table_body.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".delete")) {
    const id = e.target.dataset.projectId;
    fetch(`http://localhost:2002/delete/members/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
    window.location.reload();
  }
  if (e.target.matches(".edit")) {
    let id = e.target.dataset.projectId;
    modal.classList.toggle("modal-wrap");
    //   ========

   const form = document.getElementById("form");
   const membersImage = document.getElementById("image");
   const membersName = document.getElementById("name");
   const membersPosition = document.getElementById("position");
   const membersFacebook = document.getElementById("facebook");
   const membersTwitter = document.getElementById("twitter");
   const membersInstagram = document.getElementById("instagram");

    // const API_ENDPOINT = "http://localhost:2002/post/client";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(id);
      const formData = new FormData();

      formData.append("image", membersImage.files[0]);
      formData.append("name", membersName.value);
      formData.append("position", membersPosition.value);
      formData.append("facebook", membersFacebook.value);
      formData.append("twitter", membersTwitter.value);
      formData.append("instagram", membersInstagram.value);

      fetch(`http://localhost:2002/edit/members/${id}`, {
        method: "PUT",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data != false) {
            alert("Successfully Edited members");
          } else {
            alert("Error creating members");
          }
        })
        .catch((error) => console.log(error.message));
      window.location.reload();
    });
  }
});
