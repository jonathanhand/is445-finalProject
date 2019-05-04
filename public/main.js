
var ref = firebase.database().ref();
var createRef = firebase.database().ref("Users/");
var editRef = firebase.database().ref("Edit/");

var target = document.getElementById("table1");
var snapshotDB;

function getUserList() {
return ref.once('value').then(function (snapshot) {
  snapshotDB = snapshot.val().Users;
}).then(function() {
  printList();
  
  });
}

function printList () {
for (var id in snapshotDB) 
{
makeTable(snapshotDB[id], target);
addEditBtn(id, target);
}
}

getUserList();

function addEditBtn(dataID, target) {
  const editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.className = "editBtn";
  editBtn.value = "Edit";
  editBtn.setAttribute("edit-id", dataID);
  target.appendChild(editBtn);

  editBtn.addEventListener("click", function(e) {
var selectedID = editBtn.getAttribute("edit-id");
storeEdit(selectedID);
  });
}

function storeEdit(selectedID) {
  editRef.set({
    //appends to stored edit id in db
    ['Edit']: selectedID
  });
  window.location.href="/edit.html";

}

//add listener for edit, sends to edit page where data prefilled out
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

// function testFunc () {
//   return selPer;
// }

// export const testFuncVar = testFunc();
