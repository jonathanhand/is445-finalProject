var ref = firebase.database().ref();
var createRef = firebase.database().ref("Users/");
ref.on(
  "value",
  function(snapshot) {
    target = document.getElementById("table1");

    const data = snapshot.val().Users;
    for (var id in data) {
      makeTable(data[id], target);
    }
  },
  function(error) {
    console.log("Error: " + error.code);
  }
);

function makeTable(dbData, target) {
  var trNode = document.createElement("tr");
  var tdName = document.createTextNode(dbData["Name"]);
  var tdEmail = document.createTextNode(dbData["Email"]);
  var tdPhone = document.createTextNode(dbData["Phone"]);
  var tdNodeName = document.createElement("td");
  var tdNodeEmail = document.createElement("td");
  var tdNodePhone = document.createElement("td");
  tdNodeName.appendChild(tdName);
  tdNodeEmail.appendChild(tdEmail);
  tdNodePhone.appendChild(tdPhone);
  trNode.appendChild(tdNodeName);
  trNode.appendChild(tdNodeEmail);
  trNode.appendChild(tdNodePhone);

  target.appendChild(trNode);
}

function createUser() {
  ref.on(
    "value",
    function(snapshot) {
      const data = snapshot.val().Users;
      var IDLength = Object.getOwnPropertyNames(data).length;
      console.log(IDLength)
      writeData(IDLength);
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );
}

function writeData(newID) {
  createRef.set({
    newID: {
      Name: document.getElementById("newName").value,
      Email: document.getElementById("newEmail").value,
      Phone: document.getElementById("newPhone").value
    }
  });
}
