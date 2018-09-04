var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

// los on son para escuchar 
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Héctor',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta servidor: ', resp);
});

//Escuchando información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
})