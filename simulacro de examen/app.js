const lista = []

const agregarRegistros = (event) =>{
    event.preventDefault()
    let nombre = document.getElementById("nombre")
    let direccion = document.getElementById("direccion")
    let email = document.getElementById("nombre")
    let numero = document.getElementById("numero")
    let problema = document.getElementById("problema")

    let registros={
        nombre: nombre.value,
        direccion: direccion.value,
        email: email.value,
        numero: numero.valueAsNumber,
        problema: problema.value
    }
    lista.push(registros)
    nombre.value = ""
    direccion.value = ""
    email.value = ""
    numero.value = ""
    problema.value = ""

    mostrarLista()
}

const mostrarLista = () =>{
    let salida = document.getElementById("salida")
    salida.innerHTML = ""
    lista.map((registros)=>{
        salida.innerHTML += `
        <tr>
            <th>${registros.nombre} </th>
            <th>${registros.direccion} </th>
            <th>${registros.email} </th>
            <th>${registros.numero} </th>
            <th>${registros.problema} </th>
        </tr>
        `

    })
}