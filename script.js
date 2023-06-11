function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  event.target.classList.add("dragged"); // Add the "dragged" class
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  event.target.appendChild(draggedElement);
  draggedElement.classList.remove("dragged"); // Remove the "dragged" class

  if (event.target.classList.contains("container_2")) {
    // If dropped into the second container
    var successMessage = document.createElement("p");
    successMessage.textContent = "Item dropped successfully!";
    successMessage.id = "successMessage";
    document.body.appendChild(successMessage);
    
    // Remove success message after 3 seconds
    setTimeout(function() {
      successMessage.remove();
    }, 3000);
  }
}

// Reset Function
function resetContainers() {
  var container1 = document.querySelector('.container_1');
  var container2 = document.querySelector('.container_2');

  container1.innerHTML = `
      <img src="image.jpeg" id="akash_img" alt="myimage" draggable="true" ondragstart="drag(event)">
      <p draggable="true" ondragstart="drag(event)" id="drag_text">Drag me down</p>
      <span draggable="true" ondragstart="drag(event)" id="drag_span">42</span>
  `;

  container2.innerHTML = '<p>Drop here</p>';
}

// Display success message on successful drag
document.addEventListener("dragend", function(event) {
  var container2 = document.querySelector('.container_2');
  if (container2.contains(event.target)) {
    var successMessage = document.createElement("p");
    successMessage.textContent = "Item dragged successfully!";
    successMessage.id = "successMessage";
    document.body.appendChild(successMessage);
    
    // Remove success message after 3 seconds
    setTimeout(function() {
      successMessage.remove();
    }, 3000);
  }
});