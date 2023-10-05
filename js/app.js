// # Calcolo del prezzo del biglietto del treno

// - L'utente inserisce il numero di km che vuole percorrere all'interno di un input:
//   - Creare nel DOM un div al cui interno sarà presente un input type="text" dove 
//     appunto l'utente potrà inserire il dato.
//   - Dichiarare una variabile kmtoTravel tramite id specificato nell'input 
//     type="text" del DOM.
//   - Prelevare il valore della variabile kmtoTravel tramite id dopo che l'utente 
//     appunto abbia inserito il valore desiderato all'interno dell'input.
//   - Stamparlo in console per visualizzarlo.
const kmDOMElement = document.getElementById ('km-to-travel');
console.log(kmDOMElement);

// - L'utente dovrà selezionare se è minorenne, maggiorenne oppure over 65 tramite una select.

//    - Creare nel DOM successivamente all'input type="text" una select, nel quale 
//      andremmo ad inserire tre opzioni: minonerre, maggiorenne o over 65.

//        - Ad ognuna delle option attribuire un value diverso: minonerre value=1, 
//          maggiorenne value=0, over65 value=2. 

// - L'utente dovrà premere su un bottone per generare il prezzo del biglietto.
//   - Creare nel DOM, successivamente alla select, un pulsante button che abbia la 
//     funzionalità di calcolare il valore del prezzo del biglietto subito dopo averci 
//     cliccato sopra.
const btnDOMElement = document.getElementById ('btn-calc');
console.log(btnDOMElement);

const ticketPriceDOMElement = document.querySelector ('.ticket-price');
console.log(ticketPriceDOMElement);

const kmPrice = 0.21;

let basicPrice = kmDOMElement.value * kmPrice;
console.log(basicPrice);

// let ticketPrice = kmDOMElement.value + kmPrice;
// console.log(ticketPrice);



//      - Creare un addEventListener di tipo click inerente al bottone.
//      - Crearci all'interno una funzione.
//         - All'interno della funzione inserire le varie condizioni calcolate in base 
//           alla scelta della categoria dell'utente: minorenne, maggiorenne e over65.
//         - Ad ogni categoria selezionata equivarrà uno sconto differente:
//             - Se minorenne, lo sconto sarà del 20% (quindi quando value == 1)
//             - Se maggiorenne, sconto = 0 (quindi quando value == 0)
//             - Se minorenne, lo sconto sarà del 40% (quindi quando value == 2)
btnDOMElement.addEventListener ('click', function () {
// console.log('funziona');



    const discountDOMElement = document.getElementById ('discount');

    const discountValue = discountDOMElement.value;
    console.log('discountValue', discountValue);

    if (discountValue === 'minorenne') {
        console.log('ticketPrice', ticketPrice);
        let discount20 = basicPrice * 0.20;
        ticketPrice = basicPrice - discount20;
        console.log(ticketPrice);
    }

    else if (discountValue === 'maggiorenne') {
        discount = 0;
        ticketPrice = basicPrice;
        console.log(ticketPrice);
    }

    else if (discountValue === 'over65') {
        let discount40 = basicPrice * 0.40;
        ticketPrice = basicPrice - discount40;
        console.log(ticketPrice);
    }

    const priceDOMElement = document.getElementById('price');
console.log('priceDOMElement', priceDOMElement)
priceDOMElement.innerHTML = ticketPrice.toFixed(2);
})

 // ## Il programma dovrà stampare il prezzo definitivo del biglietto.
       

// ## Il programma dovrà stampare il prezzo definitivo del biglietto.

