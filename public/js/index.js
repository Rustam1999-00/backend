const contactForm = document.querySelector(".contact_form");
const nameEl = document.getElementById("gname");
const gmail = document.getElementById("gmail");
const cname = document.getElementById("cname");
const cage = document.getElementById("cage");
const message = document.getElementById("message");
const heroList = document.querySelector(".hero_carousel");
const projectList = document.querySelector(".project_list");
const elListMember = document.querySelector(".member_list");
const elListServices = document.querySelector(".services_list");
const elListClients = document.querySelector(".clients_list");
const viewAll = document.querySelector(".viewAll");
const comtited = document.querySelector(".comtited");
const nocomtited = document.querySelector(".nocomtited");
const viewList = document.querySelector(".view_list");

function getHero(data, list) {
  list.innerHTML = "";
  data.forEach((el) => {
    list.innerHTML += `
        <div class="carusel_box ">
                        <img class="bg_img" src="img/carousel-2.jpg" alt="Image">
                        <div class="carousel_body">
                                        <h1 class=" text-white ">${el.description}</h1>
                                        <a href="" class="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                        </div>
                    </div>
        `;
  });
}

fetch("http://localhost:2002/get/hero")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data) {
      getHero(data, heroList);
    }
  })
  .catch((err) => console.log(err));

function getProject(data, list, iscomp = false) {
  list.innerHTML = "";
  if (iscomp == "all") {
    data.forEach((el) => {
      console.log(el, "el");
      list.innerHTML += `
				
				<div class="col-lg-4 col-md-6 portfolio-item first " >
				<div class="portfolio-inner rounded">
					<img class="my_img2" src="http://localhost:2002/${el.image}" alt="">
					<div class="portfolio-text">
						<h4 class="text-white mb-4">${el.name}</h4>
						<div class="d-flex">
							<a class="btn btn-lg-square rounded-circle mx-2 eye_one" data-view-id=${el._id}  href="http://localhost:2002/${el.image}"
								data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
							<a class="btn btn-lg-square rounded-circle mx-2 link_one" data-view-id=${el._id} href="http://localhost:2002/${el.link}"><i
									class="fa fa-link"></i></a>
						</div>
					</div>
				</div>
			</div>
				`;
    });
    return;
  }
  const filtred = data.filter((el) => el.isCompleted == iscomp);
  console.log(filtred, "fiffjdkdf");
  filtred.forEach((el) => {
    list.innerHTML += `
			
			<div class="col-lg-4 col-md-6 portfolio-item first " >
			<div class="portfolio-inner rounded">
				<img class="my_img2" src="http://localhost:2002/${el.image}" alt="">
				<div class="portfolio-text">
					<h4 class="text-white mb-4">${el.name}</h4>
					<div class="d-flex">
						<a class="btn btn-lg-square rounded-circle mx-2 "  href="http://localhost:2002/${el.image}"
							data-lightbox="portfolio"><i class="fa fa-eye "></i></a>
						<a class="btn btn-lg-square rounded-circle mx-2" href="http://localhost:2002/${el.image}"><i
								class="fa fa-link"></i></a>
					</div>
				</div>
			</div>
		</div>
			`;
  });
}
fetch("http://localhost:2002/get/project")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.data) {
      getProject(data.data, projectList, "all");
      viewList.addEventListener("click", (e) => {
        e.preventDefault();

        console.log(e);
        if (e.target.matches(".viewAll")) {
          getProject(data.data, projectList, "all");
        }
        if (e.target.matches(".comtited")) {
          getProject(data.data, projectList, true);
        }
        if (e.target.matches(".nocomtited")) {
          getProject(data.data, projectList, false);
        }
        if (e.target.matches(".eye_one")) {
          console.log(12112);
        }
        console.log(e.target.matches(".viewAll"));
      });
    }
  })
  .catch((err) => console.log(err));

projectList.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.matches(".eye_one")) {
    const id = e.target.dataset.viewId;
    fetch("http://localhost:2002/view/project/" + id, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  if (e.target.matches(".link_one")) {
    const id = e.target.dataset.viewId;
    // var copyText = document.getElementById("myInput");
    let datas = `http://localhost:2002/${id}#project`;
    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(datas);
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: nameEl.value,
    email: gmail.value,
    mobile: cname.value,
    service: cage.value,
    description: message.value,
  };

  fetch("http://localhost:2002/post/quote", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

function getMember(data, list = elListMember) {
  list.innerHTML = "";
  console.log(data ,"adfdfafadfaf");
  data.forEach((el) => {
    list.innerHTML += `
        <div class="col-lg-4 col-md-6 " >
        <div class="team-item rounded">
            <img class="my_img" src="http://localhost:2002/${el.image}" alt="${
      el.name
    } img">
            <div class="team-text">
                <h4 class="mb-0">${el.name}</h4>
                <p class="text-primary">${el.position}</p>
                <div class="team-social d-flex">
             ${
               el.facebook
                 ? ` <a class="btn btn-square rounded-circle me-2" href="${el.facebook}"><i
                class="fab fa-facebook-f"></i></a>`
                 : ""
             }
                  
             ${
               el.twitter
                 ? ` <a class="btn btn-square rounded-circle me-2" href="${el.twitter}"><i
                class="fab fa-twitter"></i></a>`
                 : ""
             }
             ${
               el.instagram
                 ? ` <a class="btn btn-square rounded-circle me-2" href="${el.instagram}"><i
                class="fab fa-instagram"></i></a>`
                 : ""
             }
                   
                   
                </div>
            </div>
        </div>
    </div>
        `;
  });
}
fetch("http://localhost:2002/get/members")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data) {
      getMember(data, elListMember);
    }
  })
  .catch((err) => console.log(err));

function getClients(data = clients, list = elListClients) {
  list.innerHTML = "";
  data.forEach((el) => {
    list.innerHTML += `
		<div class="testimonial-item">
		<img class="img-fluid rounded mb-3" src="http://localhost:2002/${el.image}" alt="">
		<p class="fs-5">${el.description}</p>
		<h4>${el.name}</h4>
		<span>${el.profession}</span>
	</div>
        `;
  });
}

fetch("http://localhost:2002/get/client")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data) {
      console.log(data, "client");
      getClients(data, elListClients);
    }
  })
  .catch((err) => console.log(err));

// carousel js
const stoped = setInterval(() => {
  $(".hero_carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      ' <div class=" mybtn slider_btn slider_prev "><img src="img/arrow-left-solid.svg" alt="" width="30"></div>',
    nextArrow:
      '<div class=" mybtn slider_btn slider_next "><img src="img/arrow-right-solid.svg" alt="" width="30" ></div>',
  });
  $(".owl-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      ' <div class=" mybtn slider_btn2 slider_prev2 "><img src="img/arrow-left-solid.svg" alt="" width="30"></div>',
    nextArrow:
      '<div class=" mybtn slider_btn2 slider_next2 "><img src="img/arrow-right-solid.svg" alt="" width="30" ></div>',
  });
}, 500);

setTimeout(() => {
  clearInterval(stoped);
}, 5000);
