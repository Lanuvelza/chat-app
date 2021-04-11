alert('hello from the JS file');

$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var text = $('#message').val(); 
    alert(text);
    return false;
  })
})