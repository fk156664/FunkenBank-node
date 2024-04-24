/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
//Die Anweisungen werden von oben nach unten abgearbeitet. 
//Der Wert 3000 wird von rechts nach links zugewiesen an die Konstante namens PORT. 
//Das einfache Gkleichheitszeichen lässt sich mit "... wird zugewiesen an..."
const PORT = 3000;
//Der Wert '0.0.0.0' wird zugewiesen an eine Konstante namen HOST.
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

	//res ist die Antwort des Serves an den Browser.
	//send() ist die Anweisung etwas an den Browser zu senden.
	//&'hello world..' ist der Wert, der an die Anweisung send() übergeben wird.
	//res.send('Hello remote world!\n');

	//Das res-Objekt kann nochmehr, als nur eine Zeichenkette an den Browser zu senden.
	//Das res-Objekt kann mit der Funktion render() eine HTML-Datei an den Browser senden.
	res.render('index.ejs',{});
});

// Mit listen() wird der Server angewiesen, auf den angegebenen HOST und PORT
//zu lauschen.
app. listen(PORT, HOST);

//Mit der Anweisung console.log() wird dem Server-Administerator auf der 
//Konsole angezeigt, was der Server macht. Der Programmierer schreibt 
//dazu in die runden Klammern den Ausdruck, der auf der Konsole angezeigt werden soll.
//Die Werte der beiden Konstanten HOST und pOrt werden in den Ausdruck übergeben.
//Ein Verb mit anschliessenden runden Klammern steht immer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);