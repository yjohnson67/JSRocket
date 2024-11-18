// Explanations
var favColor = 'red';    
//var is the variable which refers to something else
//can not have spaces or dashes
//value is assigned red but can be changed.
//
//text is called a string
//
var myArray = [];

//Variables
var favColor = 'red';
   //variable is something that refers to something else
   //names can not have spaces or dashes (ex favColor)
   //value is assigned 'red' but can be changed
   
   // Types of Values
      //string or text '' (ex shown above)
      //Array or List (could contain text, numbers, variables, objects, functions, etc.)
var myArray = [];
var myFavColors = ['blue', 'red', 'green'];
      //Boolean is a true or false statement or yes no value (0is false 1 is true)
var hasGotFavColors = true;
      //Object is like an array but you can give it a name for every list item
var richObject = {
   firstName: 'Rich',
   lastName: 'Armstrong',
   favColors: ['blue', 'red', 'green'],
   yearsAlive: 103, //numbers do not have quotations
   isMale: true
};
 
//Functions
//function is something that can be reused stored in a variable or it can referred to by a variable.

var fullname = function (firstname, secondname) {
  return firstname + ' ' +secondname;
}

var area = function (width,height) {
  return width * height;
}

function whatIsMyFavColor () //parenthesis are what make it a function. {
    return false;  //Anything after the first return will not show it will stop the function.
    return true;
    return 'blue';
}

var function whatIsMyFavColor = function () {}

var function whatIsMyFavColor = function () {
  console.log('do Something!!!'); 
}

   //If the above code is pasted in the console and we call it without the () [doSomething] it returns the entire var...
      //function () {console.log("do Something!!!");}
   //If we call it with the () [doSomething()] it returns the function...
      //doSomething!!!

      //If Else Statement

      if (true) {
        //do something
        alert ('male');
      };
      //If something... then do something.

      if ('male' == 'male')  {  //we can not use only one = because we are looking to see if this statement is true of false not to do math.
        alert('male');
      }

      var number1 = 10;
      var number2 = 100;

      if (number1 > number2) { //this doesn't work with male.
        alert('male');
      };

      if (number1 > number2) {
        alert('true');
      } else {
        alert('false!!!');
      }

      // If true do this...otherwise [else], do this... returns false

      //More than one comparison statement possible in an  if-else statement
      var name1 = 'Rich';
      var name2 = 'Bob';
      if (name1 == 'Rich') { //comparison 1
        alert('true 1 !!!');
      } else if (name2 == 'Rich') { //comparison 2
        alert('true 2 !!!');
      } else { //If both are false.
        alert('false!!!');
      }
         //&& and
        //|| or
       if (name1 == 'Rich' && name2 == 'Bob') { //if both conditions are true
        alert("true1");
     } else if (name2 == 'Rich') {
        alert("true2");
     } else {
        alert("false");
     };
   
     if (name1 == 'Rich' || name2 == 'Bob') { //if this is true.... or this is true
        alert("true1");
     } else if (name2 == 'Rich') {
        alert("true2");
     } else {
        alert("false");
     };
