console.log("Klausur 20240604")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Varibalen mit sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) Berechnen Sie das Volumen eines Würfels mit Hilfe der Grundrechenoperatoren (+ , - , * , /) , bei dem die Kantenlänge mit der Varablen a festgelegt wird.

let a= 2;


console.log(" Das Volumen des Würfels beträgt: " + (a*a*a) +  " Kubikmeter ")



// 1b) - Nur Klausurschreiber
// Wiederholen Sie die Berechnung mit Hilfe der Math-Bibliothek, indem Sie die bekannte Funktion .sqrt() verwenden.



console.log("Aufgabe 2")
// Für Kreise gilt:
// Flächeninhalt = Pi * Radius²
// Umfang = 2 * pi * Radius
// Durchmesser = 2 * Radius



// 2a)
// Testschreiber deklarieren pi und initialisieren pi mit dem Wert 3.14.

let pi= 3.14



// Klausurschreiber deklarieren pi und initialisieren pi mit dem Wert aus der bekannten Bibliothek namens Math. Geben Sie Math.PI an, um den Wert von Pi in einer Variablen speichern zu können.




// 2b)
// Berechnen Sie Flächeninhalt.

let Radius= 2*2;

console.log(" Der Flächeninhalt des Kreises beträgt: " + Radius * pi+ " Quadratmeter. ")





// 2c)
// Berechnen Sie den Umfang

let b= 2;

console.log(" Der Umfang des Kreises beträgt: " + b * pi * Radius + " Meter. ")







// 2d)
// Berechnen Sie den Durchmesser

console.log(" Der Durchmesser des Kreises beträgt: " + Radius * b + " Meter.")





console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Listenpreis einer Papierlieferung beträgt 16780,00 EUR; Rabatt 5 %, Mehrwertsteuer 19 %, Skonto 1,5 %.


// 3a)
// Berechnen Sie den Rabatt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

let listenpreis = 50;
let rabattProzentsatz = 10;
let prozent = 100;

console.log(" Der Rabatt beträgt: " + listenpreis * rabattProzentsatz / prozent + " Euro.")



// 3b)
// Berechnen Sie den Netto-Rechnungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

let rabatt = 5;

console.log(" Der Netto-Rechnungsbetrag liegt bei: " + (listenpreis - rabatt) + " Euro." )



// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

let mwstProzentsatz = 20;
let nettoRechnungsbetrag = (listenpreis - rabatt)


console.log(" Die MwSt liegen bei: " + (nettoRechnungsbetrag + mwstProzentsatz / prozent) + " Euro. ")




// 3d) - Nur Klausurschreiber
// Berechnen Sie den Brutto-Rechnungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.




// 3e) - Nur Klausurschreiber
// Berechnen Sie den Skonto in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.




// 3f) - Nur Klausurschreiber
// Berechnen Sie den Zahlungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.



console.log("Aufgabe 4")

// Die Allgemeine Zinsformel lautet: Z = K * (p / 100) * ( t / 360)
// Z = Zinsbetrag
// K = Kapital
// p = Zinssatz (in Prozent)
// t = Verzinsungszeit (in Tagen)

// 4a)
// Ein Kunde nimmst bei einer Bank einen Kredit über 5000 € auf. Die Laufzeit beträgt 6 Monate bei einem Zinssatz von 10%. Berechne die Zinszahlungen, die in diesem Zeitraum anfallen. Arbeiten Sie mit Variablen. Antwortsatz!

let kapital = 5000;
let zinssatz = 10;
let zeit = 90;
let jahr = 360;
let Zinsbetrag = ( kapital * (zinssatz / prozent)* (zeit / jahr))

console.log(" Die Zinszahlung beträgt: " +  (kapital * (zinssatz / prozent)* (zeit / jahr))+ " Euro. ")




// 4b) - Nur Klausurschreiber
// Am Jahresende erhält ein Kunde auf dem Sparbuch eine Zinsgutschrift über 500 €. Es befand sich aber lediglich für einen Zeitraum von 3 Monaten Geld auf dem Sparbuch. Der Zinssatz betrug 5%. Welche Geldsumme befand sich auf dem Sparbuch?








console.log("Aufgabe 5")

// Der Body-Mass-Index wird laut Wikipedia folgendermaßen berechnet:
// BMI = m / (l²)  
// wobei m die Körpermasse (in Kilogramm) und l die Körperlänge (in Metern) angibt. Der BMI wird also in der Maßeinheit kg/m² angegeben. 

// 5a)
// Erstellen Sie die notwendigen Variablen und weisen Sie beispielhaft Werte zu. 
// Erstellen Sie zusätzlich eine Variable für den Namen der Person.

let Name = "Leon";
let m = 70;
let l = 190;






// 5b)
// Führen Sie die Berechnung durch.

console.log(" Der BMI von Leon beträgt: " + ( m / (l * l)) + " . ")

// 5c) 
// Geben Sie den Antwortsatz nach folgendem Muster aus. Die Werte werden aus den Variablen und der vorherigen Berechnung erzeugt: "Pit hat bei einer Körpergröße von 170 cm und einem Körpergewicht von 68 kg einen BMI von 24."

let Bmi = ( m / (l * l));

 console.log( Name   + " hat bei einer Körpergrösse von " + l + " cm und einem Körpergewicht von " + m + " ein BMI von " + Bmi+ ".")



// 5d - Nur Klausurschreiber
// Interpretieren Sie das Ergebnis aus 7c nach folgender Vorgabe:
// Wenn der BMI zwischen 18,5 und 25 liegt, dann "Normalgewicht". Ansonsten "Untergewicht" oder "Übergewicht".
// Geben Sie eine entsprechende Rückmeldung auf der Konsole aus. Bsp: "Pit hat Normalgewicht." 
// Um die Aufgabe zu lösen, brauchen Sie die "Wenn-Funktion"
// Dazu ein erklärendes Beispiel:
// if (a > b) { console.log("A ist größer als B") }
// if (a <= b) { console.log("A ist kleiner als B oder gleich groß") }    


