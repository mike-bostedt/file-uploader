window.data = {};
var storage = window.data;

function addToList(uploadedFile) {
  let fileName = uploadedFile.files[0].name;
  let createListItem = document.createElement("li");
  createListItem.innerHTML = fileName; //set defualt name for new item
  createListItem.setAttribute("class", fileName);
  createListItem.setAttribute("onclick", "clickList(this)");
  let fileList = document.getElementById("file_list");
  fileList.insertBefore(createListItem, fileList.firstChild);
  storage[fileName] = [fileName, fileName, ""]; //inishalize storage for new item
}

function autosave_name(data) {
  currentFile = storage[data.id];
  currentFile[1] = data.value;
  let ListItem = document.getElementsByClassName(data.id)[0];
  ListItem.innerHTML = currentFile[1];
}

function autosave_comment(data) {
  currentFile = storage[data.id];
  currentFile[2] = data.value;
}

function clickList(data) {
  let savedData = storage[data.className];
  let originalName = savedData[0];
  let updatedName = savedData[1];
  let updatedComment = savedData[2];
  updateDataDisplay(originalName, updatedName, updatedComment);
}

function updateDataDisplay(originalName, updatedName, updatedComment) {
  let music_name = document.getElementsByClassName("music_name")[0];
  let music_comment = document.getElementsByClassName("music_comment")[0];
  music_name.setAttribute("id", originalName);
  music_name.value = updatedName;
  music_comment.setAttribute("id", originalName);
  music_comment.value = updatedComment;
}
