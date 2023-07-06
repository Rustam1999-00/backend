const fruit_container = document.querySelector(".fruit_container");
const fruit_image = document.getElementById("fruit-image");
const fruit_name = document.getElementById("fruit-name");

const REQUESTS_API_ENDPOINT = "http://localhost:4000/get/requestCallback";

fetch(REQUESTS_API_ENDPOINT, {
  method: "GET",
})
  .then((response) => {
    // If response is ok, return | RETURN
    if (response.ok) {
      return response.json();
    } else {
      // Throw new error here if response is not ok | ERROR
      throw new Error("Error" + response.status);
    }
  })
  .then((data) => {
    console.log(data);
    data.request.forEach((request) => {
      const div = document.createElement("div");
      div.innerHTML = `
            <h3>${request.fullName}</h3>
            <p>${request.email}</p>
            <a href="tel:${request.phoneNumber}">${request.phoneNumber}</a>
            <p>${request.message}</p>
            <button>Call now</button>
        `;
      div.setAttribute("class", "bg-light, m-4");
      document.querySelector(".list-group-item").appendChild(div);
    });
  });
