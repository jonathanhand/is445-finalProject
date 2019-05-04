var ref = firebase.database().ref();

const nameP = document.getElementById("nameP");
const emailP = document.getElementById("emailP");
const phoneP = document.getElementById("phoneP");

var detailsObj;
var detailsID;

window.onload = function getFillFields () {
    return ref.once('value').then(function (snapshot) {
        detailsID = snapshot.val().Details["detailID"];
      }).then(function() {
        return ref.once('value').then(function (snapshot) {
            detailsObj = snapshot.val().Users[detailsID];
            fillFields(detailsObj);

            // subEdit.addEventListener("click", function(e) {
            // });
            })
        });
      }

function fillFields(detailsObj) {
    nameP.innerHTML = detailsObj["Name"];
    emailP.innerHTML = detailsObj["Email"];
    phoneP.innerHTML = detailsObj["Phone"];
}