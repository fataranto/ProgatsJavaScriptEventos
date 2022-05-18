function enviarFormulario(e) {
    e.preventDefault();

    // Ejercicio 3: Queremos mostrar por consola todos los datos que nos envia el usuario en este formulario. Podéis simular la escritura del cuerpo de un email. 
    // BONUS: Ocultar todo el formulario y mostrar el mensaje de agradecimiento que está en el tag <div id="mensaje-agradecimiento">

    // Modificar a partir de aquí
    // Porgats quiere recibir un correo con el nombre y el asunto 

    let nombre = document.querySelector("#fname").value + " " +document.querySelector("#lname").value;
    let asunto = document.querySelector("#subject").value;
    let pais = document.querySelector("#country").value


    // Simular que enviamos un correo usando el console.log
    /* console.log(`Hola soy ${nombre} y estoy preocupado porque ${asunto}`); */

    let mensaje = 
    `De: ${nombre}
    Asunto: Nuevo mensaje del servicio de consultas de Progats procedente de ${pais}.

    Mensaje:
    Hola, soy ${nombre} y estoy preocupado porque ${asunto}`;
    
    console.log(mensaje);

    document.querySelector("form").style.display = "none";
    document.querySelector("#mensaje-gracias").style.display = "block";


}