var doCoolStuff = function(){
   var currentClassName = document.getElementById('cool').className;
 
   if (currentClassName == 'cool') {
      document.getElementById('cool').className = 'cool red';
   } else {
      document.getElementById('cool').className = 'cool';
   }
};
var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
       'seat 1',
       'seat 2',
       'seat 3',
       'seat4'],
    turnOn: function() {
       this.isTurnedOn= true;
    },
    fly: function() {
       alert('fly');
    },
    switchCar: function(isOn) {
       console.log('turncar ' +isOn)
       if(isOn == true) {
          this.isTurnedOn = true;
       } else {
          this.isTurnedOn = false;
       }
    }
 };

 console.log("hello there friends!");