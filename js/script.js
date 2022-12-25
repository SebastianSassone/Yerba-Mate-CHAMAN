// Menu Adaptable

let boton_desplegar = document.getElementById('boton_desplegar')
let header = document.querySelector('.div_button')


function crearBoton(){
  let boton_plegar = document.createElement('button')
  header.appendChild(boton_plegar)
  boton_desplegar.style.display = 'none'
  boton_plegar.innerText = '|||'
  boton_plegar.classList.add('boton')
  boton_plegar.addEventListener('click', () => {
  boton_plegar.style.display = 'none'
  ul.classList.remove('menu_desplegado')
  boton_desplegar.style.display = 'block'
  })
}

boton_desplegar.addEventListener('click', () => {
 ul.classList.add('menu_desplegado')
 crearBoton()
})


