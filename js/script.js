function getinfo() {
    /* llamar el identificador del input para obtener el dato que estamos escribiendo/capturar el valor y guardado el la validable charid*/
    let charId = document.getElementById("charCapture").value 
    /* limpiar imformación*/
    document.getElementById("charCapture").value = ""
    //let url = "https://rickandmortyapi.com/api/character/"+charId
    let url = `https://rickandmortyapi.com/api/character/${charId}`
    //permite consu,ir una API metodo fetch
    fetch(url)
    //recibir datos en formato json
    // => funcion flecha
    .then(res => res.json())
    //recorre datos para poder mostrar datos que estamos aduiriendo en el primet then
    .then(data => {
    console.log(data)
    let html = `<img src="${data.image}">
                        <h1>${data.name}</h1>
                        <h2>${data.status}</h2>`

            document.getElementById("charContent").innerHTML = html
        })
        .catch(err => console.log(err))
}