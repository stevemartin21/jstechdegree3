
//General Variables and Error Messages

var mainTitle = document.getElementById('title');
var title = document.getElementById('title').options[5];
var otherTitle = document.getElementById('other-title');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var activitiesError = document.getElementById('activitiesError');
var ccNumError = document.getElementById('ccNumError');
var zipError = document.getElementById('zipError');
var cvvError = document.getElementById('cvvError');

//  Set this to display none  also set other things to display none

otherTitle.style.display='none';
nameError.style.display='none';
emailError.style.display='none'; 
activitiesError.style.display='none'; 
ccNumError.style.display='none'; 
zipError.style.display='none'; 
cvvError.style.display='none'; 

////////Select Activities /////////////////////////////////////////////

var all = document.querySelector(`[name="all"]`);
//console.log(all);
var frameworks = document.querySelector(`[name="js-frameworks"]`);
var libs = document.querySelector(`[name="js-libs"]`);
var express = document.querySelector(`[name="express"]`);
var node = document.querySelector(`[name="node"]`);
var build = document.querySelector(`[name="build-tools"]`);
var npm = document.querySelector(`[name="npm"]`);
//npm.setAttribute('disabled', 'disabled');
var total;
var activities = document.getElementsByClassName('activities')[0];
var labels = document.querySelectorAll('.activities label');

//   Validation ///

var userName = document.querySelector('fieldset #name');
var email = document.querySelector('fieldset #mail');
var ccNum = document.querySelector('#cc-num');
var zip = document.querySelector('#zip');
var cvv = document.querySelector('#cvv');
var submit = document.querySelector(`[type="submit"]`);

//////////////////////Select Different Payment Plans ////////////////////////
var select = document.querySelector(`[value="select_method"]`);
var creditSelect = document.querySelector(`[value="credit card"]`);
var paypalSelect = document.querySelector(`[value="paypal"]`);
var bitcoinSelect = document.querySelector(`[value="bitcoin"]`);
var creditCard = document.getElementById('credit-card');
var paypal = document.querySelectorAll('fieldset div p')[0];
var bitcoin = document.querySelectorAll('fieldset div p')[1];
paypal.style.display = 'none';
bitcoin.style.display = 'none';
var payment = document.getElementById('payment');

////////////////////////////// Add an event listener to the title element on change

var select = mainTitle.addEventListener('change', function(event){
	if(event.target.value === title.value){
	otherTitle.style.display='block';
}
    else if(event.target.value !== title.value){
        otherTitle.style.display='none';
    }
});

//  Hide Element and run function 
var hide = document.getElementById('color').options;
for (i=0; i<hide.length; i++){
    hide[i].style.display = 'none';
}

////////////Function to Populate Function /////////////////////////////////
    function populateColors(main , contingent){
      var main =  document.getElementById(main);
      var contingent =  document.getElementById(contingent);
      contingent.innerHTML = "";
      if (main.value== 'js puns'){
        var colorsArray = [ "cornflowerblue|Cornflower Blue (JS Puns shirt only)", 'darkslategrey|Dark Slate Grey (JS Puns shirt only)', "gold|Gold (JS Puns shirt only)"];
      }
      else if(main.value == "heart js"){
        var colorsArray = [ "tomato|Tomato (I &#9829; JS shirt only)", 'steelblue|Steel Blue (I &#9829; JS shirt only)', "dimgrey|Dim Grey (I &#9829; JS shirt only)"]; 
      }
      for(var colors in colorsArray){
        var pair = colorsArray[colors].split("|");
        var newOptions = document.createElement('option');
        newOptions.value = pair[0];
        newOptions.innerHTML = pair[1];
        contingent.options.add(newOptions);
      }
    }

//////////////////////Event Lisener for Activities and Disable some buttons /////////////////////
activities.addEventListener('change', function(event){  

          if (((event.target.name == frameworks.name) && (event.target.checked)) || ((event.target.name == libs.name) && (event.target.checked))){
              express.setAttribute('disabled', true);
              node.setAttribute('disabled', true);  
          } 
          else if (((event.target.name == express.name) && (event.target.checked)) || ((event.target.name == node.name) && (event.target.checked))){   
              frameworks.setAttribute('disabled', true);
              libs.setAttribute('disabled', true);  
          } 
          else if (((!frameworks.checked && !libs.checked)) && ((!express.checked && !node.checked)) ){
            express.removeAttribute('disabled');
            node.removeAttribute('disabled');
            frameworks.removeAttribute('disabled');
            libs.removeAttribute('disabled');
          }

          if (all.checked){
            sumAll =200;
          }else{
            sumAll = 0;
          }
           if(frameworks.checked){
            sumFrameworks = 100;
           }else{
            sumFrameworks =0;
           }
           if(libs.checked){
            sumLibs = 100;
           }else{
            sumLibs = 0;
           }
          if(express.checked){
            sumExpress = 100;
           }else{
            sumExpress = 0;
           }
           if(node.checked){
            sumNode = 100;
           }else{
            sumNode = 0;
           }
           if(build.checked){
            sumBuild = 100;
           }else{
            sumBuild = 0;
           }
           if(npm.checked){
            sumNpm = 100;
           }else{
            sumNpm = 0;
           }
           total = (sumAll + sumFrameworks + sumLibs + sumExpress + sumNode +sumBuild + sumNpm)
          var yourTotal = document.createElement('span');
           yourTotal.innerHTML = total + ' ';
           activities.appendChild(yourTotal);
});


/////Event Listener when user selects payment options

payment.addEventListener('click', function(e){
  if(e.target.value === paypalSelect.value ){
    creditCard.style.display ='none';
    paypal.style.display ='block';
    bitcoin.style.display = 'none';
  }
  else if(  e.target.value === bitcoinSelect.value   ){
      creditCard.style.display ='none';
      bitcoin.style.display = 'block';
      paypal.style.display ='none';
  }
  else if( e.target.value === creditSelect.value    ){
       creditCard.style.display ='block';
      bitcoin.style.display = 'none';
      paypal.style.display ='none';
  }
});

////////////  Event Listener for when user presses submit button ////////////////////////

submit.addEventListener('click', function(e){
      e.preventDefault();
         if (userName.value == '' ){
            alert('You must fill our your username');
            nameError.style.display='block';
            }         
        if(email.value == '' ){
            alert('You must fill our your email'); 
            emailError.style.display='block'; 
            }

        if(!all.checked && !frameworks.checked && !libs.checked && !express.checked && !node.checked  && !build.checked && !npm.checked){
               alert('You must choose an activity'); 
              activitiesError.style.display='block'; 
        }else{
              //alert("big bird")
            }

        if(creditSelect.value && !paypalSelect.value || !bitcoinSelect.value){
             if(ccNum.value == '' || zip.value == '' || cvv.value == ''  ){
                  alert('you are missing some credit card info ');

                if(isNaN(ccNum.value) == true ){
                        alert('Your Credit Card must only have numbers ')
                    } 
                  if(isNaN(zip.value) == true ){
                        alert('Your Zip must only have numbers ')
                    } 
                  if(isNaN(cvv.value) == true ){
                        alert('Your CVV must only have numbers ')
                 }     
            }
        }
     
        if(creditSelect.value){
          if(ccNum.value == ''){
            ccNumError.style.display='block'; 
          }
        }
        if(creditSelect.value){
          if(zip.value == ''){
            zipError.style.display='block'; 
          }
        }
        if(creditSelect.value){
          if(cvv.value == ''){
            cvvError.style.display='block'; 
          }
        }
      


        if(creditSelect.value ){
             if(ccNum.value !== ''){
                  
                if(isNaN(ccNum.value) == true ){
                        alert('Your Credit Card must only have numbers ');
                    } 
                if(ccNum.value.length < 13 || ccNum.value.length>16 ){
                        
                        alert('You have too few or too many numbers');
                        ccNumError.style.display='block'; 
                    } 
                }
              }

        if(creditSelect.value){
             if(zip.value !== ''){
                  
                if(isNaN(zip.value) == true ){
                        alert('Your zip must only have numbers ');
                    } 
                  else if( isNaN(zip.value)== false && zip.value.length !== 5){
                        alert('Your Zip Code must only have 5 digits');
                    }  
                }
              }

        if(creditSelect.value){
             if(cvv.value !== ''){
                  
                if(isNaN(cvv.value) == true ){
                        alert('Your cvv must only have numbers ');
                    } 
                  else if( isNaN(cvv.value)== false && cvv.value.length !== 3){
                        alert('Your cvv Code must only have 3 digits');
                    } 
                }
              }
          function elValidator(){
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
                  
                  return (true)
                }else{
                  alert("You have entered an invalid email address!")
                  return (false)            
                }
          }
          elValidator();

//Closing Tag for Submit Hangler
});


