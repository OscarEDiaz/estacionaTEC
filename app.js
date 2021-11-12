$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1563378/fields/field1/last.txt?api_key=MLLL5QF64O9ZP959',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(x) {
      var caja = document.getElementById("box1");
      console.log(x);
      caja.style.backgroundColor = 'green';
      // document.write(x);
      // document.write('<br>');
      // setTimeout(function(){
      //   done();
      // }, 10000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});



console.log("out");