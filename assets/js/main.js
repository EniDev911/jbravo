
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

emailjs.send("default_service")
	.then((res) => {
		comsole.log('EXITO', res.status, res.text)
	})
