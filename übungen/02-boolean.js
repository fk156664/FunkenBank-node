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

console.log("Aufgabe 02")

// In erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein

let zahl = 4
if(zahl>5){
    console.log("das ist wah.r")
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
