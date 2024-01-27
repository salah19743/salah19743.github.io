// script.js

document.addEventListener('DOMContentLoaded', function() {
    var chatBox = document.getElementById('chatBox');
    var chatInput = document.getElementById('chatInput');
    var sendButton = document.getElementById('sendButton');

    // Connect to the WebSocket server
    var socket = io();

    sendButton.addEventListener('click', function() {
        var message = chatInput.value.trim();
        if (message !== '') {
            // Send the message to the server
            socket.emit('message', message);
            // Clear the input field
            chatInput.value = '';
        }
    });

    // Receive messages from the server and display them in the chat box
    socket.on('message', function(message) {
        chatBox.innerHTML += '<p class="message">' + message + '</p>';
    });
});
 
