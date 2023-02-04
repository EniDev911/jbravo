
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

// function handleSubmit(event) {
// 	event.preventDefault();
// 	const form = event.target
// 	emailjs.send("service_3ez48bg", "template_voxdrdo", form, "vr5VeZVQQcOECM0u")
// 		.then((res) => {
// 			console.log('EXITO', res.status, res.text)
// 		})
// 		.catch((err) => {
// 			console.log(err.message)
// 		})
// }
function sendEmail() {

	const name = document.getElementById("name").value,
		email = document.getElementById("email").value,
		phone = document.getElementById("email").value,
		message = document.getElementById("message").value,
		contactParams = {
			name,
			email,
			phone,
			message
		}

	emailjs.send("service_3ez48bg", "template_voxdrdo", contactParams, "vr5VeZVQQcOECM0u")
		.then((res) => {
			console.log('EXITO', res.status, res.text);
			alert("ENVIADO");
		})
		.catch((err) => {
			console.log(err.message)
		})
}




function mostrarCalendario(select) {
	if (select.value === 'online') {
		document.getElementById('hidden_calendar_online').style.display = "block";
	} else {
		document.getElementById('hidden_div').style.display = "none";
	}
} 