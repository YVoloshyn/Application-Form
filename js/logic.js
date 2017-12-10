var currPageNum = 1, userData = {};


function nextPage(){
	if(currPageNum == 1){
		userData.name = document.getElementsByName('userName')[0].value;
		userData.email = document.getElementsByName('email')[0].value;
		firstPage.style.display="none";
		secondPage.style.display="block";
		currPageNum += 1;
	}
	if(currPageNum == 2){
		userData.country = document.getElementById('userCountry').value;
		userData.city = document.getElementById('userCity').value;
	}
	
}
function prevPage(){
	switch(currPageNum){
		case 1: alert("You are on the first page !"); break;
		case 2: firstPage.style.display="block";
				secondPage.style.display="none";
				currPageNum -= 1;
				break;
	}	
}
(function () { 
	window.onload = function () {
		var countries = countriesJSON,
			cities = citiesJSON;
		var optionsCountry = '',
			optionsCity = '';
		var countriesLength = objLength(countries);

		//make list of countries	
		for(var i = 1; i <= countriesLength; i++){
			//optionsCountry += '<option value="'+countries[i]+'" />';
			optionsCountry += '<option value="'+countries[i]+'">' + i + '</option>';
			document.getElementById('country').innerHTML = optionsCountry;
		}	

		//make list of cities
		for(var each in cities){
			optionsCity += '<option value="'+ cities[each].name +'" />';
			document.getElementById('city').innerHTML = optionsCity;
		}
	}
})();

function objLength(obj){
  var i=0;
  for (var x in obj){
    if(obj.hasOwnProperty(x)){
      i++;
    }
  } 
  return i;
}