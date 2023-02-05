// MESSAGES 
function showMessage() {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})

	Toast.fire({
		icon: 'success',
		title: 'Se envió su mensaje correctamente'
	})
}

// EMAILJS

function sendEmail() {
	const name = document.getElementById("name").value,
		email = document.getElementById("email").value,
		phone = document.getElementById("phone").value,
		message = document.getElementById("message").value,
		contactParams = {
			name,
			email,
			phone,
			message
		}
	emailjs.send("service_3ez48bg", "template_voxdrdo", contactParams, "vr5VeZVQQcOECM0u-")
		.then((res) => {
			console.log('EXITO', res.status, res.text);
			showMessage();
		}, (error) => {
			console.log('FAILED...', error);
		})
		.catch((err) => {
			console.log(err.message)
		})
}

document.getElementById("form").addEventListener("submit", function (event) {
	event.preventDefault();
	sendEmail();
});

document.getElementById("poster-image").onclick = function () { fadeImage() };

function fadeImage() {
	document.getElementById("poster-image").style.opacity = "0";
}