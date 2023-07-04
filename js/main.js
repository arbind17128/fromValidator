var username=document.getElementById('username');
var password=document.getElementById('password');
var email=document.getElementById('email');
var address=document.getElementById('password2');
var form=document.getElementById('form')

form.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    !username.value ?errorMessege(username,'username required!'):showSucess(username);
    !password.value? errorMessege(password,'password required!'): showSucess(password);
    if(!email.value){  errorMessege(email,'email required!')}
    else if(!checkEmail(email.value)) {
        errorMessege(email,'invalid email') 
      
    }else{
        showSucess(email)
    };
    !address.value ? errorMessege(address,'address required!') : showSucess(address);

}
function checkEmail(email) {
    // Regular expression pattern for a valid Gmail address
    var pattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    
    // Check if the email matches the pattern
    if (pattern.test(email)) {
      return true; // Valid Gmail address
    }
    
    return false; // Invalid Gmail address
  }
  

  
  
function showSucess(input) {
    var formControl=input.parentElement;
    formControl.className='form-control success';
  
    
}

function errorMessege(input,messege) {
    var formControl=input.parentElement;
    formControl.className='form-control error';
    var dspsmg=formControl.querySelector('small');
    dspsmg.innerText=messege;
 
    
}

