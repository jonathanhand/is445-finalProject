var createRef = firebase.database().ref("Users/");

function writeData() {
  createRef.push({
    //appends current db
      Name: document.getElementById("newName").value,
      Email: document.getElementById("newEmail").value,
      Phone: document.getElementById("newPhone").value
    
  });
  //should link to details page after
  location.reload(); //reloads the page after user added
  console.log("user created");
}
