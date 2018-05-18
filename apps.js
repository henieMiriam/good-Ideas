  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAk6uOWruXGROGXWUCUu2DZqfG2qEzKjS8",
    authDomain: "ideas-8e579.firebaseapp.com",
    databaseURL: "https://ideas-8e579.firebaseio.com",
    projectId: "ideas-8e579",
    storageBucket: "ideas-8e579.appspot.com",
    messagingSenderId: "857834896055"
  };
  firebase.initializeApp(config);
var fireBaseIdeasRef = firebase.database().ref().child("ideas");


var addButton= document.getElementById('add-button');
addButton.addEventListener("click",function(){
  var ideaInput= document.getElementById('idea-input');
  var idea = ideaInput.value;
  ideaInput.value= "";
  fireBaseIdeasRef.push().set(idea);


});

// Retrieve new posts as they are added to our database

fireBaseIdeasRef.on("child_added", function(snapshot) {
  var idea = snapshot.val();
  var newIdeaElement= document.createElement("p");
  newIdeaElement.textContent= idea;
  document.getElementById('ideas').appendChild(newIdeaElement);
});

function addIdea(idea){
  var newIdeaElement= document.createElement("p");
  newIdeaElement.textContent=idea;
  document.getElementById("ideas").appendChild(newIdeaElement);
}
