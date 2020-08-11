const covid_data = [
  {
    title: "total confirm cases",
    value: 2448,
  },
  {
    title: "active cases",
    value: 23,
  },
  {
    title: "total discharged cases",
    value: 1201,
  },
  {
    title: "total deaths",
    value: 45,
  },
  {
    title: "total propable cases",
    value: 6,
  },
  {
    title: "total suspects investigated",
    value: 6006,
  },
];

const color_code = [
  "bg-warning",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-dark",
  "bg-info",
];

const recordCreator = (title, index, ele) => {
  const getDiv = document.getElementById(title);
  // create a regular element
  const recordNode = document.createElement("div");
  recordNode.className =
    "d-flex justify-content-between mb-4 text-uppercase font-weight-bold text-center text-white";
  //   create div for title
  const titleNode = document.createElement("div");
  titleNode.className = `col-9 p-2 rounded ${color_code[index]}`;
  titleNode.innerText = ele.title;

  //   create div for value
  const valueNode = document.createElement("div");
  const valueSpan = document.createElement("span");
  valueNode.className = `col-2 p-2 rounded ${color_code[index]} d-flex align-items-center justify-content-around`;
  valueSpan.innerText = ele.value;

  //   appending both title and value to parent div
  valueNode.appendChild(valueSpan);
  getDiv.appendChild(recordNode);
  recordNode.appendChild(titleNode);
  recordNode.appendChild(valueNode);
};
for (let i = 0; i < 3; i++) {
  recordCreator("record_1", (index = i), (ele = covid_data[i]));
}
for (let i = 3; i < covid_data.length; i++) {
  recordCreator("record_2", (index = i), (ele = covid_data[i]));
}

// set date and time
const date_time = moment().format("h:mma, Do MMM, YYYY"); // August
document.getElementById("date_time").innerHTML = date_time;
