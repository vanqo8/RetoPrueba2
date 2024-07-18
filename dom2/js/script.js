//Seleccionar el boton por su ID
const deleteButton = document.getElementById("deleteButton");
//Añadir un eventListener al boton para que se ejecute con el click
deleteButton.addEventListener("click", ()=> {
    //Mostrar una alerta de confirmacion
    Swal.fire ({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No, cancelar"
    }).then((result) => {
        //Si el usuario confirma la eliminacion
        if(result.isConfirmed) {
            document.getElementById("itemToDelete").remove();
            //Mostrar una alerta de exito
            Swal.fire(
                "Eliminado",
                "El elemento ha sido removido exitosamente",
                "success"
            )
        }
    })
})