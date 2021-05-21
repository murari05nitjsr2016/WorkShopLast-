
const fullName =document.querySelector ('#fullName');
const textError =document.querySelector('.text-error');
fullName.addEventListener('input',function(){
    let fullNameRegex = RegExp('^[a-zA-Z ]+$')
    if(fullNameRegex.test(text.value))
    textError.textContent = "";
    else textError.textContent = "Full Name is Incorrect";
});

















b