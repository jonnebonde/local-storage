const dataInput = document.querySelector("#dataInput");
const saveButton = document.querySelector("#save");
const fetchButton = document.querySelector("#load");


saveButton.addEventListener("click", saveToLocalStorage);
fetchButton.addEventListener("click", fetchFromLocalStorage);

function saveToLocalStorage() {
  const data = document.getElementById("dataInput").value;
  localStorage.setItem("myData", data);
  alert("Data saved to local storage!");
}

function fetchFromLocalStorage() {
  const data = localStorage.getItem("myData");
  if (data) {
    document.getElementById("output").textContent = `Fetched Data: ${data}`;
  } else {
    alert("No data found in local storage.");
  }
}

// Additional functionality can be added as needed
