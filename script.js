var button = $(".add")
var container = $(".toDoList")

button.on("click", addTask)

function addTask(event){
  event.preventDefault()
  var task = $(".task").val()
  container.append(`<p>${task} <button class="delete"> Delete</button><p>`)
  $(".task").val("")
}

container.on("click", deleteCard)

//event handler
function deleteCard(){
  if (event.target.className === "delete"){
    event.target.parentNode.remove()
  }
}

// var image = $(".swimmingFish")

// moveImage()

// function moveImage(){
//   image: right 100px;
// }
//POMODORO
