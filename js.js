const signUp = document.querySelector('.submit');
const chkbox = document.querySelector('.checkbox');

signUp.disabled = true;
function enable(){
  document.querySelector('.submit').classList.toggle('disabled');
  signUp.disabled = false;
}
document.querySelector('.checkbox').onclick = function(){
  enable()
}



