
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
			alert("ENVIADO");
		},(error) => {
			console.log('FAILED...', error);
		 })
		.catch((err) => {
			console.log(err.message)
		})
}

document.getElementById("form").addEventListener("submit", function(event){
	event.preventDefault();
	sendEmail();
  });

