


var mainTitle = document.getElementById('title');
console.log(mainTitle);

var title = document.getElementById('title').options[5];
console.log(title);

var otherTitle = document.getElementById('other-title');
console.log(otherTitle);

//  Set this to display none
otherTitle.style.display='none';

// Add an event listener to the title element on change

//var otherTitle = document.getElementById('other-title');
var select = mainTitle.addEventListener('change', function(event){
	console.log(event.target);
	if(event.target.value === title.value){
	console.log('bob');
	otherTitle.style.display='block';
}
    else if(event.target.value !== title.value){
        otherTitle.style.display='none';
    }

});

//  Hide Element and run function 

var hide = document.getElementById('color').options;
console.log(hide);
for (i=0; i<hide.length; i++){
    hide[i].style.display = 'none';
    console.log('success');
}

    function populateColors(main , contingent){


      var main =  document.getElementById(main);
      var contingent =  document.getElementById(contingent);

      contingent.innerHTML = "";
      if (main.value== 'js puns'){
        var optionArray = ['|', "cornflowerblue|Cornflower Blue (JS Puns shirt only)", 'darkslategrey|Dark Slate Grey (JS Puns shirt only)', "gold|Gold (JS Puns shirt only)"];
        console.log(optionArray);
      }
      else if(main.value == "heart js"){
        var optionArray = ['|', "tomato|Tomato (I &#9829; JS shirt only)", 'steelblue|Steel Blue (I &#9829; JS shirt only)', "dimgrey|Dim Grey (I &#9829; JS shirt only)"];
        console.log(optionArray);
      }



      for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement('option');
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        contingent.options.add(newOption);

      }


    }






//Step 4


/*

”Register for Activities” section of the form:
Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time 
-- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects
 "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.


 /// I need to study the disabled button 

*/
var all = document.getElementsByName('all');
var frameworks = document.getElementsByName('js-frameworks');
var libs = document.getElementsByName('js-libs');
var express = document.getElementsByName('express');
var node = document.getElementsByName('node');
var build = document.getElementsByName('build-tools');
var npm = document.getElementsByName('npm');

//npm.setAttribute('disabled', 'disabled');

console.log(all);
console.log(frameworks);
console.log(libs);
console.log(express);
console.log(node);
console.log(build);
console.log(npm);


var activities = document.getElementsByClassName('activities')[0];
console.log(activities);


var choose = activities.addEventListener('change', function(event){
    console.log(event.target);
    if(event.target = frameworks || libs){
    console.log(event.target.name);
    console.log('Success');
    express.setAttribute('disabled', true);
   node.setAttribute('disabled', true);
    
}
   

});



//Step 5

/*

Payment Info section of the form:
Display payment sections based on the payment option chosen in the select menu
The "Credit Card" payment option should be selected by default, display the #credit-
card div, and hide the "Paypal" and "Bitcoin information.
When a user selects the "PayPal" payment option, the Paypal information should display, 
and the credit card and “Bitcoin” information should be hidden.
When a user selects the "Bitcoin" payment option, the Bitcoin information should display, 
and the credit card and “PayPal” information should be hidden.



*/

//Step 6


/*

Form validation:
If any of the following validation errors exist, prevent the user from submitting the form:
Name field can't be blank
Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, 
just that it's formatted like one: dave@teamtreehouse.com for example.
Must select at least one checkbox under the "Register for Activities" section of the form.
If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, 
and a 3 number CVV value before the form can be submitted.
Credit card field should only accept a number between 13 and 16 digits
The zipcode field should accept a 5-digit number
The CVV should only accept a number that is exactly 3 digits long

*/

//Step 7

/*

Form validation messages:
Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or a
 message could appear near the field or at the top of the form
There should be an error indication for the name field, email field, “Register for Activities” checkboxes, credit card number, zip code, and CVV



*/