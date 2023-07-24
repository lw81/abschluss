// Your frontend code here
const socket = io('http://10.100.0.56:5000'); // Change the URL accordingly

const messages = document.getElementById('messages');
const input = document.getElementById('input');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
  const message = input.value;
  if (message.trim() !== '') {
    // Emit a 'message' event to the backend with the message data
    socket.emit('message', { text: message });
    input.value = '';
  }
});

// Listen for incoming messages from the backend
socket.on('message', (data) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = data.text;
  messages.appendChild(messageElement);
});
