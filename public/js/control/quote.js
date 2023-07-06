const table_body = document.querySelector(".table-body");
const modal = document.querySelector(".modal-wrap");
const API_ENDPOINT = "http://localhost:2002/get/quote";
const API_ENDPOINT_EDIT = "http://localhost:2002/edit/quote/:id";
const API_ENDPOINT_DELETE = "http://localhost:2002/delete/quote/:id";

fetch(API_ENDPOINT, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(table_body.innerHTML);
    data.forEach((client) => {
      table_body.innerHTML += `
         <tr data-id="${client.id}">
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.mobile}</td>
            <td>${client.service}</td>
            <td>${client.description}</td>
            <td>${client.isActive}</td>
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
    fetch(`http://localhost:2002/delete/quote/${id}`, {
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
    const quoteName = document.getElementById("name");
    const quoteEmail = document.getElementById("email");
    const quoteMobile = document.getElementById("mobile");
    const quoteService = document.getElementById("service");
    const quoteDescription = document.getElementById("description");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(id);
      const formData = new FormData();

      formData.append("name", quoteName.value);
      formData.append("email", quoteEmail.value);
      formData.append("mobile", quoteMobile.value);
      formData.append("service", quoteService.value);
      formData.append("description", quoteDescription.value);

      fetch(`http://localhost:2002/edit/quote/${id}`, {
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
