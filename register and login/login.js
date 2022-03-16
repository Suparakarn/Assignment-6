window.onload = loginLoad;

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');
console.log('username');

const password = urlParams.get('password');
console.log('password');

function loginLoad(){
	var form = document.getElementById('myLogin');
    form.onsubmit = checkLogin;    
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var a = document.getElementById('username').value;
	var b = document.getElementById('password').value;

	if(a != username || b != password){
        alert('Invalid Username or Password')
		return false;
	}
	else{
		alert('Success')
	}
}

			