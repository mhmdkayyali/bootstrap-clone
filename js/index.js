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
