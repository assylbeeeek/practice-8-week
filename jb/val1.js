var user = document.forms['form']['user'];
var pass = document.forms['form']['pass'];
var pass = document.forms['form']['pass1'];

var user_error = document.getElementById('user_error');
var pass_error = document.getElementById('pass_error');
var pass1_error = document.getElementById('pass1_error');

user.addEventListener('textInput', user_Verify);
pass.addEventListener('textInput', pass_Verify);
pass1.addEventListener('textInput', pass1_Verify);

function validated(){
  if (user.value.length < 9) {
    user.style.border = "1px solid red";
    user_error.style.display = "block";
    user.focus();
    return false;
  }
  if (pass.value.length < 6) {
    pass.style.border = "1px solid red";
    pass_error.style.display = "block";
    pass.focus();
    return false;
  }
  if (pass.value != pass1.value) {
    pass1.style.border = "1px solid red";
    pass_error.style.display = "block";
    pass1.focus();
    return false;
  }
}

function user_verify(){
  if (user.value.length >=8) {
    user.style.border = "1px solid silver";
    user_error.style.display = "none";
    return true;
  }
}

function pass_verify(){
  if (pass.value.length >=8) {
    pass.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
}
function pass1_Verify(){
  if (pass1.value == pass.value) {
    pass1.style.border = "1px solid silver";

    return true;
  }
}
