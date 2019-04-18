var ref = firebase.database().ref();
var createRef = firebase.database().ref("Users/");
function createUser() {
  ref.once(
    //once instead of on, which would keep loading
    "value",
    function(snapshot) {
      const data = snapshot.val().Users;
      var IDLength = Object.getOwnPropertyNames(data).length;
      writeData(IDLength);
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );
}

function writeData(newID) {
  createRef.update({
    //appends current db
    [newID]: {
      Name: document.getElementById("newName").value,
      Email: document.getElementById("newEmail").value,
      Phone: document.getElementById("newPhone").value
    }
  });
  location.reload(); //reloads the page after user added
  console.log("user created");
}
