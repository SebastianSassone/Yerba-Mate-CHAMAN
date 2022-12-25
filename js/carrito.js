//Variables productos

let  producto_1 = document.getElementById('producto_1');
let  producto_2 = document.getElementById('producto_2');
let  producto_3 = document.getElementById('producto_3');
let  producto_4 = document.getElementById('producto_4');
let  producto_5 = document.getElementById('producto_5');
let  producto_6 = document.getElementById('producto_6');

//Variables modal detalle

let detalle_de_producto_cover = document.getElementById('detalle_de_productos_cover_id')
let detalle_de_productos = document.getElementById('detalle_de_productos')
let p_detalle = document.getElementById('p_detalle')

//Abrir modal detalle

producto_1.addEventListener('click', () => {
     detalle_de_producto_cover.classList.add('abrir_detalle')
       detalle_de_productos.classList.add('productos_div1_img') 
         let p_producto_1 = document.getElementById('p_productos_1').textContent
            p_detalle.innerText = p_producto_1
                producto_1.classList.add('producto')

} )
producto_2.addEventListener('click', () => {
     detalle_de_producto_cover.classList.add('abrir_detalle')
       detalle_de_productos.classList.add('productos_div2_img') 
         let p_producto_2 = document.getElementById('p_productos_2').textContent
            p_detalle.innerText = p_producto_2
                producto_2.classList.add('producto')
             
} )
producto_3.addEventListener('click', () => {
     detalle_de_producto_cover.classList.add('abrir_detalle')
       detalle_de_productos.classList.add('productos_div3_img') 
         let p_producto_3 = document.getElementById('p_productos_3').textContent
            p_detalle.innerText = p_producto_3
                producto_3.classList.add('producto')
} )
producto_4.addEventListener('click', () => {
     detalle_de_producto_cover.classList.add('abrir_detalle')
       detalle_de_productos.classList.add('productos_div4_img') 
         let p_producto_4 = document.getElementById('p_productos_4').textContent
            p_detalle.innerText = p_producto_4
                producto_4.classList.add('producto')
})
producto_5.addEventListener('click', () => {
     detalle_de_producto_cover.classList.add('abrir_detalle')
       detalle_de_productos.classList.add('productos_div5_img') 
         let p_producto_5 = document.getElementById('p_productos_5').textContent
            p_detalle.innerText = p_producto_5
                producto_5.classList.add('producto')
} )
producto_6.addEventListener('click', () => {
     detalle_de_producto_cover.classList.add('abrir_detalle')
       detalle_de_productos.classList.add('productos_div6_img') 
         let p_producto_6 = document.getElementById('p_productos_6').textContent
            p_detalle.innerText = p_producto_6
                producto_6.classList.add('producto')
})


//Cerrar modal detalles

let boton_cerrar_id = document.getElementById('boton_cerrar_id')
    boton_cerrar_id.addEventListener('click', () => {
        let detalle_de_producto = document.getElementById('detalle_de_productos_cover_id')
            detalle_de_producto.classList.remove('abrir_detalle')
                producto_1.classList.remove('producto')
                producto_2.classList.remove('producto')
                producto_3.classList.remove('producto')
                producto_4.classList.remove('producto')
                producto_5.classList.remove('producto')
                producto_6.classList.remove('producto')

detalle_de_productos.classList.remove('productos_div1_img')
detalle_de_productos.classList.remove('productos_div2_img')
detalle_de_productos.classList.remove('productos_div3_img')
detalle_de_productos.classList.remove('productos_div4_img')
detalle_de_productos.classList.remove('productos_div5_img')
detalle_de_productos.classList.remove('productos_div6_img')              
})

//Carrito

let productosStock = 'producto';

let productos = ['producto1','producto','producto','producto']

console.log(productos)
//Variables botones

let button_re = document.getElementById('button_re') 
let button_su = document.getElementById('button_su')

button_su.addEventListener('click', () => {
    productos.push(productosStock)
    let carrito = document.getElementById('carrito')
    carrito.classList.add('agregado')
    setTimeout(() => {
        carrito.classList.remove('agregado')
    }, 250)
    console.log('sumado')
})

button_re.addEventListener('click', () => {
    productos.pop()
    productos.shift()
    console.log('restado')
})

let productos_carrito = document.getElementById('productos_carrito')

productos_carrito.innerHTML = productos;

let carrito = document.getElementById('carrito')
carrito.addEventListener('click', () => {
    let card_carrito = document.getElementById('section_carrito')
    card_carrito.style.display = 'block'
    console.log('hahahahah')
})

let boton_cerrar_card = document.getElementById('boton_cerrar_card')
boton_cerrar_card.addEventListener('click', () => {
    let card_carrito = document.getElementById('section_carrito')
    card_carrito.style.display = 'none'})

//Carrito 1

//Productos
// const productos = [{nombre: 'chaman_clasica', gramos: 500, precio: 400, id: 'producto_1'},
// {nombre: 'chaman_clasica', gramos: 1000, precio: 800, id: 'producto_2'},
// {nombre: 'chaman_menta', gramos: 500, precio: 400, id: 'producto_3'},
// {nombre: 'chaman_menta', gramos: 1000, precio: 800, id: 'producto_4'},
// {nombre: 'Set de mates', gramos: '', precio: 3500, id: 'producto_5'},
// {nombre: 'Set de Bombillas', gramos: '', precio: 2000, id: 'producto_6'}]



// function crearArray(){
//     carritoUsuario = new Array 
//     carritoUsuario.push(productos[0])
//     console.log(carritoUsuario)
// }

// function crearNuevoProducto(){
//     carritoUsuario.push(productos[0])
// }

// producto_1.addEventListener('click', () => {
//      crearArray()
// } )

// // producto_2.addEventListener('click', () => {
// //     function crearNuevoProducto(){
// //         productos.push(productos[1])
// //     }
// //     console.log(crearNuevoProducto()) 
// // } )
// // producto_3.addEventListener('click', () => {
// //     function crearNuevoProducto(){
// //         productos[2] = new Object
// //     }
// //     console.log(crearNuevoProducto()) 
// // } )
// // producto_4.addEventListener('click', () => {
// //     function crearNuevoProducto(){
// //         productos[3] = new Object
// //     }
// //     console.log(crearNuevoProducto()) 
// // })
// // producto_5.addEventListener('click', () => {
// //     function crearNuevoProducto(){
// //         productos[4] = new Object
// //     }
// //     console.log(crearNuevoProducto()) 
// // } )
// // producto_6.addEventListener('click', () => {
// //     function crearNuevoProducto(){
// //         productos[5] = new Object
// //     }
// //     console.log(crearNuevoProducto()) 
// // })


