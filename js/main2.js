var username=document.getElementById('username');
var password=document.getElementById('password');
var email=document.getElementById('email');
var address=document.getElementById('password2');
var form=document.getElementById('form')

form.addEventListener('submit', onSubmit);
var collectionItem=[];

function checkEmail(input) {
    // Regular expression pattern for a valid Gmail address
    var pattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    // Check if the email matches the pattern
    // console.log(pattern.test(input.value));
    // if (!pattern.test(input.value)) {
    //  errorMessege(input,'Email is not valid');
    //  }
    // else
    //  { showSucess(input);
    //     }
    if(!email.value){
        errorMessege(input,`${getChar(input)} is required !`);
    }
   else if(pattern.test(input.value)){
        showSucess(input);
    }
    else{
        errorMessege(input,"Email is not valid")
    }
}
function clearField() {
    username.value ='';
    email.value ='';
    password.value ='';    
    address.value ='';

}
function chechPasswordMatch(input,input1) {
    if(input.value=== input1.value){
       showSucess(input1)
    }
    else{
        errorMessege(input1,"Sorry, incorrect password !")
    }
}    
function showSucess(input) {
    var formControl=input.parentElement;
    formControl.className='form-control success';
  
    
}
function chechUsername(input, min, max) {
    
    
    if(input.value.length < min) {
        
        errorMessege(input,`${getChar(input)} must be at least ${min} character !`)
    }else if(input.value.length > max) {
        errorMessege(input,`${getChar(input)} must be less than ${max} character !`)
    }
    else{
        showSucess(input);
    }
}

function errorMessege(input,messege) {
    var formControl=input.parentElement;
    formControl.className='form-control error';
    var dspsmg=formControl.querySelector('small');
    dspsmg.innerText=messege;
 
    
}
function itemCollection(arr) {
    arr.forEach(function(input){
       if(!input.value){
        errorMessege(input,`${getChar(input)} is required !`);
        // console.log(input.value);
       }
       
       else {
        showSucess(input)
       }
    })
}
function getChar(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
    // console.log(input.id.charAt(0).toUpperCase()+input.id.slice(1))
}


function onSubmit (e) {
    e.preventDefault()

    itemCollection([username,password,address])
    chechUsername(username,3,15);
    chechUsername(password,6,15)
    checkEmail(email);
    chechPasswordMatch(password,password2);

    
var item={
    username: username.value,
    email: email.value,
    password: password.value,
    confirm: address.value

}
console.log(item.confirm)
// console.log(item.confirm.value)

collectionItem.push(item)
localStorage.setItem("collectionItem",JSON.stringify(collectionItem));
// console.log(collectionItem[0].username.target);
    clearField() 
}







