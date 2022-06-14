var elForm = document.querySelector('.js-form');
var elinput = document.querySelector('.js-input');
var elMan = document.querySelector('.list__man');
var elBike = document.querySelector('.list__bike');
var elCar = document.querySelector('.list__car');
var elPlane = document.querySelector('.list__plane');
var warning = document.querySelector(".warning")

elForm.addEventListener('submit', function (e) {
	e.preventDefault();

	var miles = +elinput.value;

	if (miles <= 0 || isNaN(miles)){
	    warning.textContent = "0 dan katta || va son kirgizin"		
		elinput.classList.add("is-invalid")
		elinput.classList.remove("is-valid")	
		return;
	}else{
		elinput.classList.add("is-valid")
		elinput.classList.remove("is-invalid")
		warning.textContent = ""
		
	}
	

	function odam(a) {
		var hours = Math.floor(a / 3.6);
		var minut = Math.floor((a / 3.6 - hours) * 60);
		var sekund = Math.floor(((a / 3.6 - hours) * 60 - minut) * 60);

		return `${hours} : ${minut} : ${sekund}`;
	}

	function bike(a) {
		var hours = Math.floor(a / 20.1);
		var minut = Math.floor((a / 20.1 - hours) * 60);
		var sekund = Math.floor(((a / 20.1 - hours) * 60 - minut) * 60);

		return `${hours} : ${minut} : ${sekund}`;
	}


	function car(a) {
		var hours = Math.floor(a / 70);
		var minut = Math.floor((a / 70 - hours) * 60);
		var sekund = Math.floor(((a / 70 - hours) * 60 - minut) * 60);

		return `${hours} : ${minut} : ${sekund}`;
	}

	function plane(a) {
		var hours = Math.floor(a / 800);
		var minut = Math.floor((a / 800 - hours) * 60);
		var sekund = Math.floor(((a / 800 - hours) * 60 - minut) * 60);

		return `${hours} : ${minut} : ${sekund}`;
	}


	elMan.textContent = odam(miles);
	elBike.textContent = bike(miles);
	elCar.textContent = car(miles);
	elPlane.textContent = plane(miles);
});
