var ref = firebase.database().ref();
var createRef = firebase.database().ref("Users/");

var editID;
var editObj;
const nameField = document.getElementById("editName");
const emailField = document.getElementById("editEmail");
const phoneField = document.getElementById("editPhone");

window.onload = function getFillFields () {
    return ref.once('value').then(function (snapshot) {
        editID = snapshot.val().Edit["Edit"];
      }).then(function() {
        return ref.once('value').then(function (snapshot) {
            editObj = snapshot.val().Users[editID];
            fillFields(editObj);

            subEdit.addEventListener("click", function(e) {
                overwriteData(editID, editObj);
            });
            })
        });
      }

function fillFields(editObj) {
    nameField.value = editObj["Name"];
    emailField.value = editObj["Email"];
    phoneField.value = editObj["Phone"];
}

function overwriteData(editID, editObj) {
    createRef.update({
        //appends current db
        [editID]: {
          Name: document.getElementById("editName").value,
          Email: document.getElementById("editEmail").value,
          Phone: document.getElementById("editPhone").value
        }
      });
      alert("Update complete!")
}