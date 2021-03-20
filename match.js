var passwordField = document.getElementById("passinput");
passwordField.addEventListener("keyup", abc)

function abc() {
var firstString=document.querySelector("#unameinput").value
var secondString=document.querySelector("#passinput").value
if(firstString.includes(secondString)) {
		document.querySelector("#pimg").src="right.png";	
} else {
		document.querySelector("#pimg").src="wrong.jpg";	
}
}