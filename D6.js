/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (string) {
  const newTitle = document.querySelector('div:first-of-type h1')
  newTitle.innerHTML = string
}
changeTitle('Nuovo TITOLO di pagina')

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  const addClass = document.querySelector('div:first-of-type h1')
  addClass.classList.add('myHeading')
}
addClassToTitle()

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (string) {
  const changeP = document.querySelectorAll('div p')
  changeP.forEach((element) => (element.innerHTML = string))
}
changePcontent('Siamo p figli di un div')

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const chahgeUrl = document.querySelectorAll('a:not(footer a)')
  chahgeUrl.forEach((element) => {
    element.baseURI = 'https://www.google.com'
    element.target = 'blank'
  })
}
changeUrls()

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function (string) {
  const posList = document.getElementById('secondList')
  const newLi = document.createElement('li')
  newLi.innerText = string
  posList.appendChild(newLi)
}
addToTheSecond('4rd')

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function (string) {
  const posDiv = document.querySelector('div')
  const newP = document.createElement('p')
  newP.innerText = string
  posDiv.appendChild(newP)
}
addParagraph('Paragrafo aggiunto al primo div')

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const pos = document.getElementById('firstList')
  pos.hidden = true
}
hideFirstUl()

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const posUl = document.querySelectorAll('ul')
  posUl.forEach((element) => {
    element.style.backgroundColor = 'green'
  })
}
paintItGreen()

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const pos = document.querySelector('div:first-of-type h1')
  const string = pos.textContent
  let i = 0
  pos.onclick = () => {
    pos.innerText = string.slice(0, string.length - i)
    i++
  }
}
makeItClickable()

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const posFooter = document.querySelector('footer')
  posFooter.onclick = () => {
    const posA = document.querySelector('footer a')
    const url = posA.href
    alert(url)
  }
}
revealFooterLink()

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {
  const pos = document.querySelector('#tableArea')
  const table = document.createElement('table')
  pos.appendChild(table)

  //table.style.border = '1px solid black'
  const row = document.createElement('th')
  row.style.border = '1px solid black'
  const cell1 = document.createElement('td')
  cell1.textContent = 'Immagine'
  const cell2 = document.createElement('td')
  cell2.textContent = 'Nome prodotto'
  const cell3 = document.createElement('td')
  cell3.textContent = 'Quantità'
  const cell4 = document.createElement('td')
  cell4.textContent = 'Prezzo'

  row.appendChild(cell1)
  row.appendChild(cell2)
  row.appendChild(cell3)
  row.appendChild(cell4)
  table.appendChild(row)
}
generateTable()

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function (immagine, nomeProdotto, quantità, prezzo) {
  const tablePos = document.querySelector('#tableArea')
  const row = document.createElement('tr')
  row.style.border = '1px solid black'
  const cell1 = document.createElement('td')
  cell1.textContent = immagine
  const cell2 = document.createElement('td')
  cell2.textContent = nomeProdotto
  const cell3 = document.createElement('td')
  cell3.textContent = quantità
  const cell4 = document.createElement('td')
  cell4.textContent = prezzo
  row.appendChild(cell1)
  row.appendChild(cell2)
  row.appendChild(cell3)
  row.appendChild(cell4)
  tablePos.appendChild(row)
}
addRow('image', 'Matita', '4', '2')

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {}
