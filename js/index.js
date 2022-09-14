var sendbtn = document.getElementById("sendbtn")
function namevalidation () {
    var name = document.getElementById("name")
    var inputValue = name.value
    return inputValue>=5;

}

// function sendbtn() {
sendbtn.addEventListener("click", namevalidation)
// }

function emailvalidation() {
    var email = document.getElementById("email")
    var inputValue = email.value
}

function messagevalidation () {
    var message = document.getElementById("message")
    var inputValue = message.value
}

fetch("http://localhost/bootstrap-contactme-db/articles.php", {
    method:'post',body: new URLSearchParams({
        "email":email.value,
        "full_name":full_name.value,
        "phone_number":phone_number.value,
        "message":message.value,
    })})
    .then(Response => Response.json())
