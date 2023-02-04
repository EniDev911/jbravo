
const expand = (pic) => {
	Swal.fire({
		title: 'Custom animation with Animate.css',
		showClass: {
			popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
			popup: 'animate__animated animate__fadeOutUp'
		}
	})
}

window.expand = expand;

// EMAILJS
(function () {
	emailjs.init("vr5VeZVQQcOECM0u");
})();

function handleSubmit(event) {
	event.preventDefault();
	const form = event.target
	alert(form)
}


function mostrarCalendario(select) {
	if (select.value === 'online') {
		document.getElementById('hidden_calendar_online').style.display = "block";
	} else {
		document.getElementById('hidden_div').style.display = "none";
	}
} 