let input = document.querySelector(".data");
let add =document.querySelector(".add");
let boxTasks = document.querySelector(".box");

let arrayOfTasks = [];

//ADD TASK 
add.onclick = () => {
  if (input.value !== ""){
    addTaskToArray();
    input.value = "";
  } else{
    alert("ERROR: input.value === 0")
  };
}

  //DELET TASKS
  boxTasks.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){

      //REMOVE HTML
      e.target.parentNode.remove()

      //REMOVE FROM LOCAL
      deletTaskWith(e.target.parentNode.getAttribute("data-id"))
    };
  });


function addTaskToArray(){
  //TASK DATA
  const task = {
    id: Date.now(),
    title: input.value,
    completed: false,
  };

  //PUSH TASK TO ARRAY
  arrayOfTasks.push(task);

  //ADD TASK TO BOX TASKS
  addElementsToPageFrom();

  // Add Tasks To Local Storage
  addDataToLocalStorageFrom();
};

function addElementsToPageFrom(){
  boxTasks.innerHTML = "";

  //CREATE TASK HTML
  arrayOfTasks.forEach((task) => {
    let divTask = document.createRange().createContextualFragment(`
      <div class="todo d-f-c to-space-between" data-id=${task.id}>
      <p>${task.title}</p>
      <i class="fas fa-trash delete"></i>
      </div>`
    );
    if(task.completed === true){
      document.querySelector(".todo").classList.add("done")
    };
    boxTasks.appendChild(divTask);
  });
};

function addDataToLocalStorageFrom(){
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
};
function getDataFromLocalStorage(){
  let data = localStorage.getItem("tasks");
  if(data){
    let tasks = JSON.parse(data)
    arrayOfTasks = tasks;
    //ADD TASK TO BOX TASKS
    addElementsToPageFrom();
  }
};
getDataFromLocalStorage()



function deletTaskWith(taskId){
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom()
}






// let data = document.querySelector(".data");
// let add =document.querySelector(".add");
// let box = document.querySelector(".box");

// var id = localStorage.id;
// add.addEventListener("click",() => {
//   let tempTodo = document.createRange().createContextualFragment(`
//     <div class="todo d-f-c to-space-between" data-id=${id}>
//     <p>${data.value}</p>
//     <i class="fas fa-trash delete"></i>
//     </div>`
//   );
//   box.appendChild(tempTodo);
//   localStorage.setItem(id, data.value);
//   localStorage.id += 1
//   let btnDelete = document.querySelectorAll(".delete");
//   for(i=0; i<btnDelete.length; i++){
//     btnDelete[i].onclick = function(e){
//       e.target.parentNode.remove()
//       localStorage.removeItem(e.target.parentNode.dataset.id)
//     };
//   }
// })


// if(localStorage.length > 0){
//   for(i=0; i < localStorage.length; i++){
//     let tempTodo = document.createRange().createContextualFragment(`
//       <div class="todo d-f-c to-space-between" data-id=${i}>
//       <p>${localStorage.getItem(i)}</p>
//       <i class="fas fa-trash delete"></i>
//       </div>`
//       );
//       // if(localStorage.getItem(i).length{
//       //   box.appendChild(tempTodo)
//       // };
//   };
// };

// let btnDelete = document.querySelectorAll(".delete");
// for(i=0; i<btnDelete.length; i++){
//   btnDelete[i].onclick = function(e){
//     e.target.parentNode.remove()
//     localStorage.removeItem(e.target.parentNode.dataset.id)
//     console.log(e.target.parentNode.dataset.id)
//   };
// }