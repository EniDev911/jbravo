
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