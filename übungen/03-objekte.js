console.log("Objekte")
console.log("=======")
// Bisang speichern wir Werte in Variablen.
// Beispiel: let vorname = "Hans"
// Jede Variable nimmt genau einen Wert auf. In dem Beispiel ist der Wert "Hans".

// In der realen Welt gibt es Objekte, über die mehrere Werte abgespeichert werden sollen.
// Beispiel: Schüler*innen im Schulverwaltungsprogramm
// Interessierende Eigenschaften: Vorname, Nachname, Geburtsdatum, Geburtsort, Klasse, Anschrift,...
// Bislang haben wir das so gelöst:
// let vorname = "Hans"
// let klasse = "GW23A"
// let ...
// Problem: Die Eigenschaften stehen in keinem Zusammenhang.
// Um den Zusammenhang zwischen einzelnen Werten herzustellen, gibt es Klassen und Objekte.
// Zunächst legt der Programmierer zuer Entwicklungszeit die Baupläne (Klassen) fest, nach denen Objekte zur
// Laufzeit erstellt werden. Und das geht so:

class Schueler{
    constructor(){
        this.Vorname
        this.Nachname
        this.Klasse
    }
}

// Die Objekte werden nun aus dem Bauplan (=Klasse) wie folgt erzeugt:

let schueler = new Schueler()
schueler.Vorname = "Hans"
schueler.Nachname = "Meier"
schueler.Klasse = "GW23A"

// Die Werte können wieder ausgegeben werden:

console.log("Nachname: " + schueler.Nachname + ", Vorname: " + schueler.Vorname)

let schueler2 = new Schueler()
schueler2.Vorname = "Pit"
schueler2.Nachname = "Müller"
schueler2.Klasse = "GW23A"

console.log("Nachname: " + schueler2.Nachname + ", Vorname: " + schueler2.Vorname)

// Um aus dem Bauplan ein konkretes Objekt zu erzeugen, sind 3 Schritte notwenid:
// 1. DEKLARATION: let schueler
//                 Bei der Deklaration wird bekanntgegeben, dass es ein Objekt namens schueler geben soll.
// 2. INSTANZIIERUNG: new Schueler ()
//                    Bei dere Instanziierung werden Speicherzellen im Arbeitsspeicher reserviert, um Eigenschaftswerte aufzunehemen.
// 3. INITALISIERUNG: schueler.Nachname = "Meier"
//                 Bei der Initalisierung werden knkrete Werte in die Speicherzellen geschrieben.

console.log("==========")
console.log("Aufgabe 1")
// Für eine Autovermietung sollen Autos verwaltet werden. Erstelle den Bauplan, um dann drei Ojekte zu instanziieren.

class Auto{
    constructor(){
        this.Marke
        this.Farbe
        this.Baujahr
    }
}

// Aus dem Bauplan werden nun 3 Objekte instanziiert.

let borAb123 = new Auto()
let borXyz876 = new Auto()
let bohQz253 = new Auto ()

// Intinialisierung
borAb123.Marke = "Mercedes"
borAb123.Farbe = "Schwarz"
borAb123.Baujahr = 2020  // Zahlen ohne Anführungszeichen

borXyz876.Marke = "Audi"
borXyz876.Farbe = "Silber"
borXyz876.Baujahr = "2018"

bohQz253.Marke = "Mercedes"
bohQz253.Farbe = "Schwarz"
bohQz253.Baujahr = "2020"

console.log("Marke: " +borAb123.Marke + ", Farbe: "+borAb123.Farbe + ", Baujahr "+borAb123.Baujahr)
console.log("Marke: " +borXyz876.Marke + ", Farbe: "+borXyz876.Farbe + ", Baujahr "+borXyz876.Baujahr)
console.log("Marke: " +bohQz253.Marke + ", Farbe: "+bohQz253.Farbe + ", Baujahr "+bohQz253.Baujahr)


console.log("==========")
console.log("Aufgabe 2")
// Deklariere, iniziiere und initialisiere ein Objekt der realen Welt der eigenen Wahl.

class MakeUp{
    constructor(){
        this.Name
        this.Farbe
        this.Preis
    }
}

let primer = new MakeUp()
let concealer = new MakeUp()
let bronzer = new MakeUp

primer.Name = "Hydro prime"
primer.Farbe = "/"
primer.Preis = 9.99

concealer.Name = "camouflage number3"
concealer.Farbe = "Porzellan"
concealer.Preis = 30.95

console.log("Name: " +primer.Name + ", Farbe: "+primer.Farbe + ", Preis "+primer.Preis)
