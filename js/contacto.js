let nombre = document.getElementById('nombre_input')
let apellido = document.getElementById('apellido_input')
let email = document.getElementById('email_input')
let telefono = document.getElementById('numero_t_input')
let mensaje = document.getElementById('mensaje_textarea')

let boton = document.getElementById('boton')

function extraerValores(){
   let datos_mensaje =  [nombre.value, apellido.value, email.value,telefono.value, mensaje.value]
   console.log(datos_mensaje)
   nombre.value='', 
   apellido.value='', 
   email.value='',
   telefono.value='', 
   mensaje.value='';
   
}

boton.addEventListener('click', () => {
    extraerValores()
   setTimeout(() => {(alert('Su mensaje se envio con exito, responderemos a la brevedad gracias por contactarnos!'))},  1000)
})



// let boton = document.getElementById('boton')

// function traerContenidDelForm(contenido){
       
//     let keys = contenido.keys()
//     let values = contenido.values()

//     do{
//         let claves = keys.next();
//         let valores = values.next();
//         console.log(valores)
//         if(claves.done || valores.done){
//             break
//         } 
//     }while(true)
//     console.log('tamo')
// }

// formulario[0].addEventListener('submit', (e) => {
//     e.preventDefault()
  
//     let contenido = new FormData(formulario[0])
    
//     traerContenidDelForm(contenido)
//     console.log(contenido)
//     console.log('form')
// })
