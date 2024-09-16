console.log("Booleans")
console.log("======")

console.log("Boolsche Werte sind Wahrheitswerde, die wahr (true) oder falsch (false) annehmen können.")

// Wahrheitswerte kenne wir bereits aus der Wenn-Funktion in Exel.

console.log("Aufgabe 01")

if(true){
    console.log("Der Ausdtuck ist wahr.")
}else{
    console.log("Der Ausdruck ist unwahr / falsch / false")
}

// Weil in dieser Aufgabe die Prüfung immer wahr ist if(true), wird immer die Anweisung hinter if ausgeführt.
// Die Anweisung hinter else kommt niemals zur Ausführung.

console.log("Aufgabe 02")

// In erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein

let zahl = 4

// Hier wird mit einem Prüfoperator auf wahr oder flasch geprüft.

// Prüfoperatoren:
// ==   : Prüfung auf Gleichheit im Wert: if(1 == '1') true
// ===  : Prüfung auf Gleichheit im Wert und im Typ: if(1 === '1') false
// >    : grösser als
// <    : kleiner als
// >=   : grösser oder gleich
// <=   : kleiner oder gleich

if(zahl>5){
    console.log("das ist wahr")
}else{
    console.log("das ist falsch.")
}

console.log("Aufgabe 03")

// Wenn die Schülerin 16 oder jünger ist, muss sie "fahrradfahren"
// Wenn sie 17 ist, darf sie "begleitet fahren"
// Wenn sie 18 ist darf sie "fahren"

let alter= 16

if(alter<=16){
    console.log("fahrradfahren")
}
if(alter === 17){
    console.log("begleitet fahren")
}

if(alter > 17){
    console.log("fahren")

}



console.log("Aufgabe 04")

// Wenn die Schülerin 16 oder jünger ist, muss sie "fahrradfahren"
// Wenn sie 17 ist, darf sie "begleitet fahren"
// Wenn sie 18 ist darf sie "fahren"
// Vorrausstzung für das fahren mit dem Auto ist der Führerschein

let alter2 = 17;
let fuehrerschein = false;

if(alter2 <=16 || fuehrerschein === false){    // Wenn die Schülerin <16 ist oder (||) keinen Führerschein hat oder (||) beides, dan Fahrrad fahren
    console.log("fahrradfahren")
}
if(alter2 === 17 && fuehrerschein === true){  // Wenn 17 UNd führerschein, dann begleitet fahren
    console.log("begleitet fahren")
}

if(alter > 17 && führerschein === true){      // wenn >17 UNd Führerschein, dann fahren
    console.log("fahren")

}

// Andere Lösung:

if(fuehrerschein){   // führerschein ist schon true

    if(alter === 17){
        console.log("begleitet fahren")

    }else{
        console.log("fahren")

    }
}else{
    console.log("fahrradfahren")
}


console.log('Aufgabe 04')
// Zahlen können in Javascript true oder false sein.

let Zahl = 0

if(Zahl){
    console.log("Die Zahl " + Zahl + " nimmt den boolschen Wert true an ")
}else{
    console.log("Die Zahl " + Zahl + " nimmt den boolschen Wert false an ")
}

// Positive & negative Zahlen sind true.
// Die Ziffer 0 ist false.


console.log("Aufgabe 05")

// Auf einem Sparkonte soll bei einem positiven Kontostand auf der console stehen: "Zinsen berechnen", 
// wenn kein Guthaben existiert: "Keine Zinsen"


let kontostand = 0

if(kontostand){  // auf den prüfoperator kann verzichtet werden, da Zahlen bereits true oder false sind.
    console.log("Zinsen berechnen für Kontostand " + kontostand)
}else{
    console.log("keine Zinsen, da Kontostand 0")
}


console.log("Aufgabe 06")

// In der Bundeslieger gibt es punkte für Spiele
// Sieg: 3 Punkte
// Unentschieden: 1 Punkt
// Niederlage: 0 Punkte

let spielausgang = "Sieg"
let mannschaft = "deutschland"

if(spielausgang == "Sieg"){
    console.log("Es gibt 3 Punkte")
}
if(spielausgang == "Sieg"){
    console.log("Es gibt 1 Punkt")
}
if(spielausgang == "Sieg"){
    console.log("Es gibt 0 Punkte")
}