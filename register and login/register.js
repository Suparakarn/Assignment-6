window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById('myForm');
    form.onsubmit = checkpassword;    
}

function checkpassword(){
    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('repassword').value;

    if(password1 != password2 || password1 == null || password2 == null){
        console.log(password1,password2);
        document.getElementById('errormsg').innerHTML = "Error"
        alert('Invalid Password')
        return false;
    }
    else{
        alert('Success')
    }
   
}


