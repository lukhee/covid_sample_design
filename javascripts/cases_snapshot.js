const covid_snapShot = [
  {
    title: "suspect cases",
    case_types: {
      new: 98,
      closed: 5166,
    },
  },
  {
    title: "confirmed cases",
    case_types: {
      new: 16,
      total: 1502,
    },
  },
  {
    title: "suspect case in isolation",
    case_types: {
      self: 0,
      centres: 3,
    },
  },
  {
    title: "persons of interest",
    case_types: {
      new: 0,
      current: 96,
    },
  },
  {
    title: "contacts identified",
    case_types: {
      new: 20,
      total: 2023,
    },
  },
  {
    title: "contacts traced success rate",
    case_types: {
        value: 99
    },
  },
];

const color_code = [
  "brown2",
  "orrange2",
  "green1",
  "orrange1",
  "grey2",
  "bg-secondary",
];

const snapShot_func = (ele, index) => {
  const getSnapshotDiv = document.getElementById("snap_shot");
  // create a regular element
  const recordNode = document.createElement("div");
  recordNode.className =
    "bg-white p-2 w-100 rounded d-flex flex-column shadow justify-content-between text-secondary";
  //   create div for title
  const titleNode = document.createElement("h5");
  titleNode.className = `py-4 font-weight-bolder text-uppercase`;
  titleNode.innerText = ele.title;

  //   create div for value
  const valueNode = document.createElement("div");
  let case_obj_key = Object.keys(ele.case_types);

  if (index === 5) {
    valueNode.className = "d-flex flex-column justify-content-around h-75";
    const titleNode = document.createElement("span");
    titleNode.className =
      "p-2 px-4 bg-danger py-5 d-block mb-2 rounded shadow font-weight-bold text-white";
    titleNode.innerHTML = `${ele.case_types.value} %`;
    valueNode.appendChild(titleNode)
  } else {
    // loop through the keys and populate the value
    case_obj_key.forEach((key) => {
      const titleSpan = document.createElement("span");
      const valueSpan = document.createElement("span");
      valueSpan.className = "bg-danger text-light p-1 py-2 mt-2 mx-2 d-block rounded pt-2 font-weight-bold";
      titleSpan.className = `p-2 d-block mb-2 rounded font-size text-uppercase ${color_code[index]}`;
      titleSpan.innerText = key;
      valueSpan.innerHTML = ele.case_types[key];

      // append records
      titleSpan.appendChild(valueSpan);
      valueNode.appendChild(titleSpan);
    });
  }

  // append value node to main div
  // append the top layer

  recordNode.appendChild(titleNode);
  recordNode.appendChild(valueNode);
  getSnapshotDiv.appendChild(recordNode);
};

covid_snapShot.forEach((ele, index) => {
  snapShot_func(ele, index);
});
