const clientID = setInterval(function() {
    if (NetworkIsSessionStarted()) {
        emitNet("zqueue:shiftQueue");
        clearInterval(clientID);
    }
}, 500);
