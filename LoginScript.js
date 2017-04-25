
function login_btn() {
  window.location = "LoginPage.html";
}

function login_btn_qr() { 
   window.location = "LoginPage1.html";
}

function modal(text){

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
document.getElementById("text-modal").textContent=text;
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}




