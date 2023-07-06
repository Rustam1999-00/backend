var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:2002/get/project";

xmlhttp.open("GET", url, true);
xmlhttp.send();

const labels = [];
const dataAll = [];

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 201) {
    let data = JSON.parse(this.responseText);
    data = data.data.reverse().splice(0,3);
    console.log(data);
    data.forEach((element) => {
      labels.push(element.name);
      dataAll.push(element.view);
    });
    console.log(labels);
    console.log(dataAll);

    const ctx = document.getElementById("canvas").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Population",
            data: dataAll,
            backgroundColor: "#ff335e",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
};
