let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let message = document.getElementById("message");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  //   mencegah behavior default dari form modal
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  // pengkondisian untuk form modal dan textInput
  if (textInput.value === "") {
    console.log("failure");
    message.innerHTML = "This input cannot be blank!";
  } else {
    console.log("success");
    message.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textarea.value;
  console.log(data);
  createTask();
};

let createTask = () => {
  tasks.innerHTML += `
  <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>

    <span class="options">
        <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onclick="deleteTask(this)" class="fas fa-trash-alt"></i>
    </span>
</div>
  `;
  resetForm();
};

let deleteTask = (el) => {
  el.parentElement.parentElement.remove();
};

let editTask = (el) => {
  let selectedTask = el.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  selectedTask.remove();
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};
