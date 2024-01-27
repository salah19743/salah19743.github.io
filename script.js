document.addEventListener('DOMContentLoaded', function() {
    var chatBox = document.getElementById('chatBox');
    var chatInput = document.getElementById('chatInput');
    var sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', function() {
        var message = chatInput.value.trim();
        if (message !== '') {
            // Add the message to the chat box
            chatBox.innerHTML += '<p class="message">' + message + '</p>';
            // Clear the input field
            chatInput.value = '';
            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
