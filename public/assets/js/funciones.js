const registrarVenta = () => {
    const codigo = document.querySelector('#codigo') 
    const total = document.querySelector('#total')
    const cuotas = document.querySelector('#cuotas')

    if(codigo.value.length == 0 || total.value.length == 0 || cuotas.value.length == 0) {

        alert('Tiene que rellenar todos los campos')
        
        // document.getElementById('respuesta').innerHTML = 'Tiene que rellenar todos los campos'
    }
    else{
        alert('Registro exitoso')
        // document.getElementById('respuesta').innerHTML = 'Registro exitoso'
    }
}

const btnRegistrar = document.querySelector('#btnRegistrar')
btnRegistrar.addEventListener('click',registrarVenta)