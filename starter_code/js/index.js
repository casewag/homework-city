$(document).ready(function(){

//when user submits an input on the html form, run a function called "addCity"
 $('form').submit(addCity);

//Prevent a form submission using the event.preventDefault() function
 function addCity(event) {
 	event.preventDefault();

//Store user input values as "city"
 var city = $('#city-type').val();

// If city is ...
//then run function that adds new class that contains respective bckgrnd)

	if (city === 'New York' || city === 'NYC' || city === 'New York City' || city === 'ny' || city === 'new york' || city === 'nyc' || city === 'new york city') {
		$('body').addClass('nyc');
	} else if (city === 'San Francisco' || city === 'SF' || city === 'san fran' || city === 'san francisco' || city === 'sf' || city === 'frisco') {
		$('body').addClass('sf');
	} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la' || city === 'lax') {
		$('body').addClass('la');
	} else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
		$('body').addClass('austin');
	} else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
		$('body').addClass('sydney');
// If input does not match above conditions, then run function that adds class that contains citipix bckgrnd 
	} else {
		$('body').addClass('citi-less');
//alerts user of incorrect city		
		alert('CITY DOES NOT EXIST, PLEASE TRY AGAIN.');
		}
    }

  });