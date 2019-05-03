
var ref = firebase.database().ref();
var createRef = firebase.database().ref("Users/");
// function user(id, username, phone, email) {
//   this.id=id;
//   this.username=username;
//   this.phone=phone;
//   this.email=email;
// }
var snapshotDB;
function getUserList() {
return ref.once('value').then(function (snapshot) {
  snapshotDB = snapshot.val();
}).then(function(snapshotDB) {
  printList();
  });
}

function printList () {
console.log(snapshotDB["Users"][1].Phone);
}
//1105 stopped. Got the promise working. call getUserList and it gets whole array to
//printList then printlist can do anything with the snapshotDB

getUserList();
ref.once(
  "value",
  function snap (snapshot) {
    var target = document.getElementById("table1");

    const data = snapshot.val().Users;
    //console.log(data);      

    for (var id in data) {
      //makeTable(data[id], target);
     // addEditBtn(data[id], target);
     //console.log(id);
    }
  },
  function(error) {
    console.log("Error: " + error.code);
  }
);
// function addEditBtn(dataID, target) {
//   const editBtn = document.createElement("input");
//   editBtn.type = "button";
//   editBtn.className = "editBtn";
//   editBtn.value = "Edit";
//   editBtn.setAttribute("edit-id", dataID);
//   target.appendChild(editBtn);

//   var contactObj = [];
//   editBtn.addEventListener("click", function(e) {
//     contactObj = dataID;
//       console.log(dataID);      
//       editUser(dataID);
//       document.location.href = "/edit.html";
//   });
// }
// function getObj() {
//     addEditBtn()
// }
// //add listener for edit, sends to edit page where data prefilled out
// function makeTable(dbData, target) {
//   var trNode = document.createElement("tr");
//   var tdName = document.createTextNode(dbData["Name"]);
//   var tdEmail = document.createTextNode(dbData["Email"]);
//   var tdPhone = document.createTextNode(dbData["Phone"]);
//   var tdNodeName = document.createElement("td");
//   var tdNodeEmail = document.createElement("td");
//   var tdNodePhone = document.createElement("td");


//   tdNodeName.appendChild(tdName);
//   tdNodeEmail.appendChild(tdEmail);
//   tdNodePhone.appendChild(tdPhone);
//   trNode.appendChild(tdNodeName);
//   trNode.appendChild(tdNodeEmail);
//   trNode.appendChild(tdNodePhone);

//   target.appendChild(trNode);
// }

// function testFunc () {
//   return selPer;
// }

// export const testFuncVar = testFunc();
