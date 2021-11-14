$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1563378/fields/field1/last.txt?api_key=VWXGS6E0DLG8BYH4',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(x) {
      var caja = document.getElementById("satus-1");
      console.log(x);
      if(x == 1){
        caja.style.backgroundColor = 'green';
      }
      else if(x == 0){
        caja.style.backgroundColor = 'red';
      }
      setTimeout(function(){
        done();
      }, 10000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});

$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1563378/fields/field2/last.txt?api_key=VWXGS6E0DLG8BYH4',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(x) {
      var caja = document.getElementById("satus-2");
      console.log(x);
      if(x == 1){
        caja.style.backgroundColor = 'green';
      }
      else if(x == 0){
        caja.style.backgroundColor = 'red';
      }
      setTimeout(function(){
        done();
      }, 10000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});



console.log("out");