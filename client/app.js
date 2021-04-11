// alert('hello from the JS file');

const socket = io();

$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    const text = $('#message').val(); 
    socket.emit('message', text);
    $('#message').val('');
    return false;
  });

  socket.on('message', function(msg) {
    $('<li>').text(msg).appendTo('#history');
  });

})