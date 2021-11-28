$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1570334/fields/field1/last.txt?api_key=6YL1A5OTGXBXAL8K',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(x) {
      var caja = document.getElementById('status-1');
      var car = document.getElementById('car-icon1');
      console.log(x);
      if(x == 1){
        caja.style.backgroundColor = '#00db25';
        car.style.opacity = '0';
        car.style.top = '90px';
      }
      else if(x == 0){
        caja.style.backgroundColor = '#FF0054';
        car.style.transition = 'all 1s ease 0s';
        car.style.opacity = '1';
        car.style.top = '20px';
      }
      setTimeout(function(){
        done();
      }, 2000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});

$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1570334/fields/field2/last.txt?api_key=6YL1A5OTGXBXAL8K',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(y) {
      var caja = document.getElementById('status-2');
      var car = document.getElementById('car-icon2');
      console.log(x);
      if(y == 1){
        caja.style.backgroundColor = '#00db25';
        car.style.opacity = '0';
        car.style.top = '90px';
      }
      else if(y == 0){
        caja.style.backgroundColor = '#FF0054';
        car.style.transition = 'all 1s ease 0s';
        car.style.opacity = '1';
        car.style.top = '20px';
      }
      setTimeout(function(){
        done();
      }, 2000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});

$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1570334/fields/field3/last.txt?api_key=6YL1A5OTGXBXAL8K',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(y) {
      var caja = document.getElementById('status-3');
      var car = document.getElementById('car-icon3');
      console.log(x);
      if(y == 1){
        caja.style.backgroundColor = '#00db25';
        car.style.opacity = '0';
        car.style.top = '90px';
      }
      else if(y == 0){
        caja.style.backgroundColor = '#FF0054';
        car.style.transition = 'all 1s ease 0s';
        car.style.opacity = '1';
        car.style.top = '20px';
      }
      setTimeout(function(){
        done();
      }, 2000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});

$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1570334/fields/field4/last.txt?api_key=6YL1A5OTGXBXAL8K',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(y) {
      var caja = document.getElementById('status-4');
      var car = document.getElementById('car-icon4');
      console.log(x);
      if(y == 1){
        caja.style.backgroundColor = '#00db25';
        car.style.opacity = '0';
        car.style.top = '90px';
      }
      else if(y == 0){
        caja.style.backgroundColor = '#FF0054';
        car.style.transition = 'all 1s ease 0s';
        car.style.opacity = '1';
        car.style.top = '20px';
      }
      setTimeout(function(){
        done();
      }, 2000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});

$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1570334/fields/field5/last.txt?api_key=6YL1A5OTGXBXAL8K',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(y) {
      var caja = document.getElementById('status-5');
      var car = document.getElementById('car-icon5');
      console.log(x);
      if(y == 1){
        caja.style.backgroundColor = '#00db25';
        car.style.opacity = '0';
        car.style.bottom = '90px';
      }
      else if(y == 0){
        caja.style.backgroundColor = '#FF0054';
        car.style.transition = 'all 1s ease 0s';
        car.style.opacity = '1';
        car.style.bottom = '20px';
      }
      setTimeout(function(){
        done();
      }, 2000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});

$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1570334/fields/field6/last.txt?api_key=6YL1A5OTGXBXAL8K',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(y) {
      var caja = document.getElementById('status-6');
      var car = document.getElementById('car-icon6');
      console.log(x);
      if(y == 1){
        caja.style.backgroundColor = '#00db25';
        car.style.opacity = '0';
        car.style.bottom = '90px';
      }
      else if(y == 0){
        caja.style.backgroundColor = '#FF0054';
        car.style.transition = 'all 1s ease 0s';
        car.style.opacity = '1';
        car.style.bottom = '20px';
      }
      setTimeout(function(){
        done();
      }, 2000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});

$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1570334/fields/field7/last.txt?api_key=6YL1A5OTGXBXAL8K',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(y) {
      var caja = document.getElementById('status-7');
      var car = document.getElementById('car-icon7');
      console.log(x);
      if(y == 1){
        caja.style.backgroundColor = '#00db25';
        car.style.opacity = '0';
        car.style.bottom = '90px';
      }
      else if(y == 0){
        caja.style.backgroundColor = '#FF0054';
        car.style.transition = 'all 1s ease 0s';
        car.style.opacity = '1';
        car.style.bottom = '20px';
      }
      setTimeout(function(){
        done();
      }, 2000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});

$(document).ready(function done() {
  $.ajax({
    url: 'https://api.thingspeak.com/channels/1570334/fields/field8/last.txt?api_key=6YL1A5OTGXBXAL8K',
    type: 'GET',
    data: {
      format: 'text'
    },
    success: function(y) {
      var caja = document.getElementById('status-8');
      var car = document.getElementById('car-icon8');
      console.log(x);
      if(y == 1){
        caja.style.backgroundColor = '#00db25';
        car.style.opacity = '0';
        car.style.bottom = '90px';
      }
      else if(y == 0){
        caja.style.backgroundColor = '#FF0054';
        car.style.transition = 'all 1s ease 0s';
        car.style.opacity = '1';
        car.style.bottom = '20px';
      }
      setTimeout(function(){
        done();
      }, 2000);
    },
    error: function() {
      $('#errors').text("Error");
    }
  });
});