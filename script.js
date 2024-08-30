const inputBox = document.querySelector("#input_box");
const listContainer = document.querySelector(".task_list");
const needToDo = document.querySelector("#NeedToDo");

function addTask() {
  if (inputBox.value == "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    const priority = needToDo.value;
    if (priority === "A") {
      li.style.backgroundColor = "red";
      li.style.opacity = 0.8;
    } else if (priority === "B") {
      li.style.backgroundColor = "blue";
      li.style.opacity = 0.8;
    } else if (priority === "C") {
      li.style.backgroundColor = "green";
      li.style.opacity = 0.8;
    } else if (priority === "D") {
      li.style.backgroundColor = "gold";
      li.style.opacity = 0.8;
    }

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (elem) {
    if (elem.target.tagName === "LI") {
      elem.target.classList.toggle("active");
      saveData();
    } else if (elem.target.tagName === "SPAN") {
      elem.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}
function getData() {
  listContainer.innerHTML = localStorage.getItem("Data");
}

getData();

window.addEventListener("keypress", newFunc, false);

function newFunc(event) {
  console.log(event.charCode);
  if (event.charCode == "13") {
    addTask();
  }
}
