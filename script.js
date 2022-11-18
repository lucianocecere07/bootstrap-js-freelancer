/*A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :slightly_smiling_face:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).*/

//------------------esercizio----------------------//

//bottone send al click
//funzione "clickSend" al click

//codici promozionali in un array
arrayCodici = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

// !! DICHIARARE la variabile(??) ---> let codiceSconto = ""; !!
for(let i = 0; i < arrayCodici.length; i++){
    codiceSconto = arrayCodici[i]; //---> !! operatore += (errore) !!
};



//--------------------------------------------//



//-------------------funzioni-------------------//

//funzione per click del bottone

function clickSend(event) {
    event.preventDefault();

    let tipoDiLavoro = document.getElementById("inputWork").value;
    let numeroOre = parseInt(document.getElementById("inputHours").value);
    let inputCodice = document.getElementById("inputCode").value;

    if(tipoDiLavoro == 1){
        prezzoOre = (numeroOre * 20.50).toFixed(2);
    }else if(tipoDiLavoro == 2){
        prezzoOre = (numeroOre * 15.30).toFixed(2);
    }else if(tipoDiLavoro == 3){
        prezzoOre = (numeroOre * 33.60).toFixed(2);
    };

    // !! if di CODICE SCONTO NON FUNZIONA !!
    if(inputCodice == codiceSconto){
        prezzoOre = (prezzoOre * 0.75).toFixed(2);
    } else {
        alert("Discont Code non valido o mancante. Calcolo tariffa prezzo pieno.");
        prezzoOre = prezzoOre;
    };
 
    console.log("Il prezzo finale del lavoro è di: " + prezzoOre + " € ");
    document.getElementById("prezzo-totale").innerHTML = "Il prezzo finale è di: <b>" + prezzoOre + " € </b>";

};

//-------------------------------------------------------//

























//----------------------PROVE-----------------------//




/*
function clickSend(event) {
    event.preventDefault();

    let tipoDiLavoro = document.getElementById("inputWork").value;
    let numeroOre = parseInt(document.getElementById("inputHours").value);

    let prezzoOreBackend = (numeroOre * 20.50).toFixed(2);
    let prezzoOreFrontend = (numeroOre * 15.30).toFixed(2);
    let prezzoOreProject = (numeroOre * 33.60).toFixed(2);

    if(tipoDiLavoro == 1){
        console.log("Il prezzo finale del lavoro backend è di: " + prezzoOreBackend + " € ");
        document.getElementById("prezzo-totale").innerHTML = "Il prezzo finale è di: " + prezzoOreBackend + " € ";
    }else if(tipoDiLavoro == 2){
        console.log("Il prezzo finale del lavoro frontend è di: " + prezzoOreFrontend + " € ");
        document.getElementById("prezzo-totale").innerHTML = "Il prezzo finale è di: " + prezzoOreFrontend + " € ";
    }else if(tipoDiLavoro == 3){
        console.log("Il prezzo finale del lavoro project analisys è di: " + prezzoOreProject + " € ");
        document.getElementById("prezzo-totale").innerHTML = "Il prezzo finale è di: " + prezzoOreProject + " € ";
    };
};
*/

/*

//stampa al click del bottone totale
let totale = document.getElementById("totale");
totale.addEventListener('click', prezzoPerOre);


//funzione per bottone totale

function prezzoPerOre() {

    let tipoDiLavoro = document.getElementById("inputWork").value;
    let numeroOre = parseInt(document.getElementById("inputHours").value);

    let prezzoOreBackend = (numeroOre * 20.50).toFixed(2);
    let prezzoOreFrontend = (numeroOre * 15.30).toFixed(2);
    let prezzoOreProject = (numeroOre * 33.60).toFixed(2);

    if(tipoDiLavoro == 1){
        console.log("Il prezzo finale del lavoro backend è di: " + prezzoOreBackend + " € ");
        document.getElementById("prezzo-totale").innerHTML = "Il prezzo finale è di: " + prezzoOreBackend + " € ";
    }else if(tipoDiLavoro == 2){
        console.log("Il prezzo finale del lavoro frontend è di: " + prezzoOreFrontend + " € ");
        document.getElementById("prezzo-totale").innerHTML = "Il prezzo finale è di: " + prezzoOreFrontend + " € ";
    }else if(tipoDiLavoro == 3){
        console.log("Il prezzo finale del lavoro project è di: " + prezzoOreProject + " € ");
        document.getElementById("prezzo-totale").innerHTML = "Il prezzo finale è di: " + prezzoOreProject + " € ";
    };
};
*/
//---------------------------------------------------//