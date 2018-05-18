var button= document.getElementById('addbutton');
addButton.addEventListenerById("click",function(){
  var ideaInput= document.getElementById('idea-input');
  var idea= idea.input.value;
  idea.value= "";
  var newElement= document.createElement("p");
  newIdeaElement.textContent= idea;

  document.getElementById('ideas').appendChild(newIdeaElement);
}
