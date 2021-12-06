// node est un gestionnaire d evenement

var events = require('events');

//creation d un emetteur d evenement

var eventEmitter = new events.EventEmitter();

eventEmitter.on('evenementDramatique', function() { console.log("DRAME!!!") })

console.log("j'ecoute l'evenement evenementDramatique");

// exceciute la fonction d'emission dans 5 secondes.

setTimeout(function(){ eventEmitter.emit('evenementDramatique') }, 5000);