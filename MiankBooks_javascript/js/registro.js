const form = document.getElementById('myFormId');

function registerValidate() {
	let acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	var inputEmail = document.getElementById('inputEmail');
	
	var inputPassword1 = document.forms["myForm"]["inputPassword1"];
	var inputPassword2 = document.forms["myForm"]["inputPassword2"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var inputZip = document.forms["myForm"]["inputZip"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

	if (inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Obligatorio";
		acumErrores ++;
    }else if (!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Formato incorrecto";
		acumErrores ++;
	}

	if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "Obligatorio";
		acumErrores ++;
	}
	

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Obligatorio";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Obligatorio";
		acumErrores ++;
	}
	
	if(inputZip.value == "" || inputZip.length!=5) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "Incorrecto";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta las bases";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}


form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
