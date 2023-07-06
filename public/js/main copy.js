const form = document.querySelector('#form');
const image = document.getElementById('file');
const name = document.getElementById('name');
const elList =document.querySelector('.el_list')
//* Fruits
const FRUITS_API_ENDPOINT = 'http://localhost:4000/post/fruits';
form.addEventListener('submit', (evt) => {
	evt.preventDefault();

	const formData = new FormData();
	formData.append('image', image.files[0]);
	formData.append('name', name.value);

	fetch(FRUITS_API_ENDPOINT, {
		method: 'POST',
		body: formData,
	})
		.then((response) => {
			if (response.ok) {
				//* Handle successful response
				alert('Fruit added successfully.');
			} else {
				//* Handle error response
				throw new Error('Error ' + response.status);
			}
		})
		.catch((error) => console.log(error));

	name.value = '';
});

const renderData =()=>{
  elList.innerHTML =""

  fetch('http://localhost:4000/get/fruits', {
    method: 'GET',
  })
    .then((response) => {
      // If response is ok, return | RETURN
      if (response.ok) {
        return response.json();
      } else {
        // Throw new error here if response is not ok | ERROR
        throw new Error('Error' + response.status);
      }
    })
    .then((data) => {
      console.log(data.fruits);
      data.fruits.forEach((fruit) => {
        elList.innerHTML += `
<div class="fruits_box">

          <img class="fruit_image" src="http://localhost:4000/${fruit.image}" alt="${fruit.name}">
                  <h5 class="fruit-name">${fruit.name}</h5>
                  <div class="btn_flexer">
                  <button class="delete btn_simple" data-fruit-id="${fruit._id}">Delete</button>
                  <button class="edit btn_simple" data-fruit-id="${fruit._id}">Edit</button>
              </div>
          </div>
          </div>
          `;
        // div.setAttribute('class', '');
        // elList.innerHTML + = div
        // elList.appendChild(div);
      });
    });
}

renderData()
const deletedFunc = (id) => {
	fetch(`http://localhost:4000/delete/fruits/${id}` ,{
    method: 'DELETE',
		
  })
		.then((response) =>response.json())
		.then((data) => {
			console.log(data);
      if(data){
        renderData()
      }
		});
};
const modal =document.querySelector(".modalEdit")
const formEdit = document.querySelector('.formEdit');
const imageEdit = document.getElementById('fileEdit');
const nameEdit = document.getElementById('nameEdit');
const editedFunc = (id) => {
  formEdit.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    console.log(fileEdit.files[0]);
    const formData = new FormData();
    formData.append('image', imageEdit.files[0]);
    formData.append('name', nameEdit.value);
    fetch(`http://localhost:4000/update/fruits/${id}` ,{
      method: 'PUT',
      body:formData,
    })
      .then((response) =>response.json())
      .then((data) => {
        console.log(data);
        if(data){
          renderData()
        }
      });
  })
};

elList.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.matches('.delete')) {
		const id = e.target.dataset.fruitId;
		console.log(id);
		deletedFunc(id);
	}
  if (e.target.matches('.edit')) {
    modal.style.display ="block"
		const id = e.target.dataset.fruitId;
		editedFunc(id);
	}
	console.log(e.target.matches('.delete'));
});
