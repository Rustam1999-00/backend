const table_body = document.querySelector(".table-body");
const modal = document.querySelector(".modal-wrap");
const API_ENDPOINT = "http://localhost:2002/get/project";
const API_ENDPOINT_EDIT = "http://localhost:2002/edit/project/:id";
const API_ENDPOINT_DELETE = "http://localhost:2002/delete/project/:id";

fetch(API_ENDPOINT, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(table_body.innerHTML);
    data.data.forEach((client) => {
      table_body.innerHTML += `
         <tr data-id="${client.id}">
            <td><img width='50' src='http://localhost:2002/${client.image}'/></td>
            <td>${client.name}</td>
            <td>${client.link}</td>
            <td>${client.view}</td>
            <td>${client.isCompleted}</td>
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
    fetch(`http://localhost:2002/delete/project/${id}`, {
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
    const projectImage = document.getElementById("image");
    const projectName = document.getElementById("name");
    const projectLink = document.getElementById("link");
    const projectisCompleted = document.getElementById("isCompleted");

    // const API_ENDPOINT = "http://localhost:2002/post/client";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(id);
      const formData = new FormData();

      formData.append("image", projectImage.files[0]);
      formData.append("name", projectName.value);
      formData.append("link", projectLink.value);
      formData.append("isCompleted", projectisCompleted.value);
console.log(projectImage.files[0]);
      fetch(`http://localhost:2002/edit/project/${id}`, {
        method: "PUT",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data != false) {
            alert("Successfully Edited project");
          } else {
            alert("Error creating project");
          }
        })
        .catch((error) => console.log(error.message));
        window.location.reload();
    });
  }
});
