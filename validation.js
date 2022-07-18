var nametxt = document.getElementById('nametxt');
var passtxt = document.getElementById('passtxt');
var email = document.getElementById('emailtxt');
var age = document.getElementById('agetxt');
var herotxt = document.getElementById('herotxt');
var gender1 = document.getElementById('gender1');
var gender2 = document.getElementById('gender2');
var phone = document.getElementById('phonetxt');
var address = document.getElementById('addresstxt');
var postCode = document.getElementById('postCode');
var login = document.getElementById('submit');
// var emailTemplate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

login.onclick = function(){
	var check = true;
	//Validate Name
	if(nametxt.value == '' || nametxt.value.length<1 || nametxt.value.length>25){
		document.getElementById('errorName').innerHTML = 'Invalid Name';
		check = false;
	}
	else document.getElementById('errorName').innerHTML = '';

	//Validate Pass
	if(passtxt.value == ''){
		document.getElementById('errorPass').innerHTML = 'Invalid Password';
		check = false;
	}
	else document.getElementById('errorPass').innerHTML = '';
	
	var cekEmail = false;
	//Validate Email
	for(i = 0; i < email.value.length; i++){
		if(email.value[i] == '@'){
			for(j = i; j < email.value.length; j++){
				if(email.value[j] == '.') {
					cekEmail = true;
				}
			}
		}
	}
	if(cekEmail == false){
		document.getElementById('errorEmail').innerHTML = 'Invalid Email';
	 	check = false;
	}
	else document.getElementById('errorEmail').innerHTML = '';
	// Validate e-Mail
	// if(!(email.value.match(emailTemplate)) || email.value == ''){
	// 	document.getElementById('errorEmail').innerHTML = 'Invalid Email';
	// 	check = false;
	// }
	// else{
	// 	document.getElementById('errorEmail').innerHTML = '';
	// }

	//Validate Age
	if(age.value == '' || isNaN(age.value)){
		document.getElementById('errorAge').innerHTML = 'Invalid Age';
		check = false;
	}
	else if(age.value<8 || age.value>50){
		document.getElementById('errorAge').innerHTML = 'Your are too young or too old to register!';
		check = false;
	}
	else document.getElementById('errorAge').innerHTML = '';

	//Validate Hero
	if(herotxt.value == 'null'){
		document.getElementById('errorHero').innerHTML = 'Choose a Hero';
		check = false;
	}
	else document.getElementById('errorHero').innerHTML = '';

	//Validate Address
	if(address.value == '' || address.value.length<10 || address.value.length>100){
		document.getElementById('errorAddress').innerHTML = 'Invalid Address';
		check = false;
	}
	else document.getElementById('errorAddress').innerHTML = '';

	//Gender Validation
	if(gender1.checked == '' && gender2.checked == ''){
		document.getElementById('errorGender').innerHTML = 'Choose a Gender';
		check = false;
	}
	else document.getElementById('errorGender').innerHTML = '';

	//Phone Validation
	if(phone.value == '' || isNaN(phone.value) || phone.value.length != 12){
		document.getElementById('errorPhone').innerHTML = 'Invalid Phone Number';
		check = false;
	}
	else document.getElementById('errorPhone').innerHTML = '';

	//Post Code Validation
	if(postCode.value == '' || isNaN(postCode.value) || postCode.value.length != 5){
		document.getElementById('errorPostCode').innerHTML = 'Invalid Post Code Number';
		check = false;
	}
	else document.getElementById('errorPostCode').innerHTML = '';
	return check;
}