console.log("Grundlagen");
console.log('==========');

console.log('Aufgabe 1');
console.log('Erstelle zwei Variablen namens a und b. Initalisiere mit den Werten 1 und 2.')

let a = 1;
let b = 2;

//Mit dem +Operator findet eine String-Verkettung statt.Ein String ist eine Zeichenkette, eingerahmt mit Hochkommas.
console.log('Der Wert der Variable a ist:' + a);

console.log('Aufgabe 2');
console.log('Gib das Ergebnis der Addition von a und b an')

//Wenn links oder rechts vom +Operator ein String steht, wird verkettet.
//Wenn links oder rechts Zahlen stehen, wird addiert.
console.log( a + b);
console.log('Das Ergebnis der Addition:',+ a + b);

console.log('Aufgabe 3');
console.log('Gib das Ergebnis der Subtraktion, Multiplikation, Division von a und b an');

console.log('Das Ergebnis der Subtraktion:', + a - b);
console.log('Das Ergebnis der Multiplikation:', + a * b);
console.log('Das Ergebnis der Division:', + a / b);

console.log('Aufgabe 4');
console.log('Der Wert von c soll das Ergebnis von a und b sein');

let c = a + b;

console.log("c hat den Wert:" + c);

console.log('Aufgabe 5');
console.log('a und b sind die Seitenlängen der Katheten eines rechtwinkligen Dreiecks. Bestimme die Länge der Hypotenuse c');

//cQuadrat ist in Kamelhöcker_Notation geschrieben. Dh: zuerst ein Kleinbuchstabe. verbundene Wörter beginnen groß.
let cQuadrat = a * a + b * b;

//Javascript kennt eine Bibliothek namens Math., in der es eine Funktionion namens sqrt gibt.
//Als Parameter in den runden Klammern erwartet sqrt eine zahl, aus der dann die Wurzel gezogen wird.
c = Math.sqrt(cQuadrat);

console.log('Die Hypotenuse ist ' + c + 'lang.');

console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr berkommt er 10% Zinsen. Wie viel bekommt der Kunde nach zwei Jahren ausgezahlt. Zinseszins');

let laufzeit = 2;
let startkapital = 100;
let zinssatz = 0.1;

let kapitalNachEinemJahr = startkapital * (1 + zinssatz);

console.log("Kapital nach einem Jahr: " + kapitalNachEinemJahr + " EUR.");

let kapitalnachZweiJahren= kapitalNachEinemJahr * (1 + zinssatz);

console.log("Kapital nach zwei Jahren: " + kapitalnachZweiJahren + " EUR.");

let endkapital = startkapital * Math.pow ((1 + zinssatz) , laufzeit);

console.log("Endkapital nach " + laufzeit + " Jahren: " + endkapital + " EUR.");

console.log('Aufgabe 7');
console.log('Die Werte aus der vorherigen Aufgabe werden als Reihe dargestellt.');

//Im Zeitpunkt 0 ist das Endkapital = Startkapital
endkapital = startkapital;
console.log (endkapital);

//Nach dem ersten Jahr erhöht sich das Endkapital um den Faktor 1,1
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

//Nach dem zweiten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen.
endkapital = endkapital* (1 + zinssatz);
console.log(endkapital);

//Nach dem dritten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen.
endkapital = endkapital* (1 + zinssatz);
console.log(endkapital);

//Nach dem vierten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen.
endkapital = endkapital* (1 + zinssatz);
console.log(endkapital);

console.log('Aufgabe 8');
console.log('In Aufgabe 7 wurde die Anweisung endkapital = ... mehrfacch wiederholt.');
console.log('Um sich Tipparbeit zu sparen und die Wiederholung der Anweisung in der gewünschten Häufigkeit durchzuführen,');
console.log('nutzt der Programmierer eine Schleife (loop).');

startkapital = 100;
endkapital = startkapital;
zinssatz = 0.1;
laufzeit = 3;


for (let i = 0; i < laufzeit; i++) {
    endkapital = endkapital* (1 + zinssatz);
    console.log("Endkapital nach Jahr "+ (i+1) + ":" + endkapital + "EUR.");   
}


