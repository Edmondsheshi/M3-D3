    function deleterow  (elem){
    let row = elem.parentNode.parentNode;
    row.remove()}

function nuovaTraccia () {
    let numeroTraccia = document.querySelector("#n-traccia").value //variabile uguale al valore inserito nell'input
    let titoloTraccia = document.querySelector("#t-traccia").value
    let nomeArtista = document.querySelector("#n-artista").value
    let durataTraccia = document.querySelector("#d-traccia").value

    let tabellaMod = document.querySelector("#tabella")

    if (!numeroTraccia || !titoloTraccia || !nomeArtista || !durataTraccia) {
        alert("Inserire tutti i dati")
    
    } else{
        let nuovaRiga = document.createElement("tr")
        let col1 = document.createElement("th")
        col1.innerText = numeroTraccia
        let col2 = document.createElement("td")
        col2.innerText = titoloTraccia
        let col3 = document.createElement("td")
        col3.innerText = nomeArtista
        let col4 = document.createElement("td")
        col4.innerText = durataTraccia
        let col5 = document.createElement("td")
        col5.innerText = '<button onclick="deleterow(this)" id="remove-c" type="button" class="btn btn-outline-danger">Rimuovi</button>'

        tabellaMod.appendChild(nuovaRiga)

        nuovaRiga.appendChild (col1)
        nuovaRiga.appendChild (col2)
        nuovaRiga.appendChild (col3)
        nuovaRiga.appendChild (col4)
        nuovaRiga.appendChild (col5)


    }
}



