//Seleccionar el boton por su ID
const alertButton= document.getElementById("alertButton");
//Añadir un eventListener al boton para que se ejecute al hacer click
alertButton.addEventListener("click", ( )=> {
    //Mostrar una alerta con la libreria SweetAlert2
    Swal.fire ({
        title:"Bienvenidos",
        text: "Esta es la práctica para el DOM",
        icon: "success"
    });
});