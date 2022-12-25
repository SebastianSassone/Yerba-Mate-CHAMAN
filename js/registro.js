// Variables formulario registro

let nombre_user = document.querySelector('#registro_nombre');
let apellido_user = document.querySelector('#registro_apellido');
let email_user = document.querySelector('#registro_email');
let clave_user = document.querySelector('#registro_contraseña');
let validar_clave_user = document.querySelector('#registro_contraseña1');
let button_finalizar = document.querySelector('#boton_registrar');

let inciarSesion = document.querySelector('#inciarSesion')
// Variables formulario iniciar sesion

let email_inciarSesion = document.querySelector('#email_inciarSesion');
let contraseñainciarSesion = document.querySelector('#contraseñainciarSesion');
let boton_inciarSesion = document.querySelector('#boton_inciarSesion');




// Array datos de las cuentas

// COLS     1 (i:0)    2 (i:1) 3 (i: 2)	
var personas_mtrx = [["Macarena", "Lopez", 45],    // F. 1  (Ind: 0)
["Sofía", "Gonzales", 36],    // F. 2  (Ind: 1)
["Ricardo", "Gomez", 24],     // F. 3  (Ind: 2)
["Nombre", "Apellido", 50]]   // F. 4  (Ind: 3)

let datos_cuentas = [["Faviana","Marquez", "FavianaMarquez@gmail.com", 12345678],
                       ["Gaston","Junior", "GastonJunior@gmail.com", 12345678],
                       ["Marck","Spector", "MarckSpector@gmail.com", 12345678],
                       ["Silvia","Niro", "SilviaNiro@gmail.com", 12345678]];

                       
// Agregar y traer array del local storage

localStorage.setItem('Datosdelascuentas',  JSON.stringify(datos_cuentas))

// Funciones formulario de registro                       

function registro_cuenta(nombre, apellido, email ,clave){  
let traerdellocalstorage = localStorage.getItem('Datosdelascuentas');
let transformarAjs = JSON.parse(traerdellocalstorage);
 let datos_nuevo_user = [nombre, apellido, email, clave];
transformarAjs.push(datos_nuevo_user);

console.log(transformarAjs)
};                       

function confirmar_contraseña(){
        let contraseña1 = clave_user.value;
        let contraseña2 = validar_clave_user.value;

               if (contraseña1 == contraseña2){
                      alert("Las contraseñas coinciden")
                   }else{alert("Las contraseñas no coinciden")}
};

function mostrarNuevoUser(){
      document.getElementById('form_registro').style.display = 'none';
      document.getElementById('section_div_new_user').style.display = 'block';
      document.getElementById('nav_registro').innerText = 'Cuenta'
};

function mostrarDatosNuevoUser(nombre, apellido, email){
       let p_new_user = document.getElementById('p_new_user');

       let parrafo_nombre_pellido = document.createElement('parrafo');
        parrafo_nombre_pellido.innerHTML = 'Nombre de usuario:  ' + nombre + '  ' + apellido + '<br>';
        p_new_user.appendChild(parrafo_nombre_pellido);

       let parrafo_email = document.createElement('parrafo1');
        parrafo_email.innerHTML ='Email:  ' + email;
        p_new_user.appendChild(parrafo_email);
}
 
// Finalizar registro

button_finalizar.addEventListener('click', () => 
        confirmar_contraseña()
);
button_finalizar.addEventListener('click', () =>
        registro_cuenta(nombre_user.value, apellido_user.value, email_user.value, validar_clave_user.value)
);

//  Mostrar el nuevo usuario

button_finalizar.addEventListener('click', () => 
        mostrarNuevoUser()
);
button_finalizar.addEventListener('click', () =>  
mostrarDatosNuevoUser(nombre_user.value, apellido_user.value, email_user.value));

// Funciones formulario iniciar sesion

function inicioDeSesion(email, contraseña){
        for(i = 0; i < datos_cuentas.length; i++){
           if(email == datos_cuentas[0][2]){
           if( contraseña == datos_cuentas[0][3]){
                mostrarUser()
           }else{alert('Contraseña incorecta')}
            }else{
            alert('Email Invalido')
           }
        }
        console.log(email, contraseña)
    }

function mostrarUser(){
        document.getElementById('_form_inciarSesion').style.display = 'none';
        document.getElementById('section_div_new_user').style.display = 'block';
        document.getElementById('nav_registro').innerText = 'Cuenta'
        document.getElementById('h2_section_div_new_user').innerText = 'Bievenido nuevamente'
  };

function mostrarIniciarSesion(){
    document.getElementById('form_registro').style.display = 'none';
    document.getElementById('_form_inciarSesion').style.display = 'block';
}

// Iniciar 

inciarSesion.addEventListener('click', () => {
        mostrarIniciarSesion()
})

boton_inciarSesion.addEventListener('click', () => {
        inicioDeSesion(email_inciarSesion.value, contraseñainciarSesion.value)
  
})

        // document.querySelector('.btn-agregar-color').addEventListener('click', e => {
        //     const nuevoColor = prompt('Ingresá un color:');
        //     if (!nuevoColor) {
        //         return;
        //     }

        //     //const textoColores = '["amarillo","naranja","verde"]';
        //     const textoColores = localStorage.getItem('colores') || '[]';
        //     console.log('textoColores:', textoColores);

        //     const arrayColores = JSON.parse(textoColores);
        //     arrayColores.push(nuevoColor);

        //     const nuevoTextoColores = JSON.stringify(arrayColores);
        //     localStorage.setItem('colores', nuevoTextoColores);
            
        // });