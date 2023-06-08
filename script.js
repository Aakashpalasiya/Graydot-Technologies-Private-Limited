// Drag and Drop Functions
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
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
