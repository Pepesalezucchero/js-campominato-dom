/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//richiamo di elementi
const container = document.querySelector(".container"); //luogo centrale
const playButton = document.getElementById("play-btn"); //bottone play

//funzione bottone e per creare la tabella
playButton.addEventListener("click", 

    function () {

        //aggiungo numeri e caselle
        for (let i = 1; i <= 100; i++) {

            //creo i quadrati
            const square = document.createElement("div");
            square.classList.add("square");
            container.append(square);

            //ci metto dentro i numeri
            square.append(i);

            //qui creo la funzione che mi permette di colorare i quadrati al tocco e mi mostra il numero nella console
            square.addEventListener("click",

                function () {

                    square.classList.add("azure"); //colore
                    console.log("Selezionata la casella numero:", i); //console per visualizzare
                }
            );
        }
    }
);

/*
const userSquare = createMyGrid("div", "square");

//funzione per creare la tabella
function createMyGrid(tagtype, classname) {

    //aggiungo i numeri nell caselle
    for (let i = 1; i <= 100; i++) {
        //creo il div con la classe square
        const square = document.createElement(tagtype);
        square.classList.add(classname);
        //gli dico di metterci il numero
        square.append(i);
        //monto il tutto
        container.append(square);
    }
    return;
}
*/