
const expand = (pic) => {
  Swal.fire({
    imageUrl: pic,
    imageAlt: 'Custom image',
    confirmButtonText: "Cerrar",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

window.expand = expand;