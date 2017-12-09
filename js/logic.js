var currPageNum = 1;

function nextPage(){
	if (currPageNum == 1){
		var email = document.getElementsByName('email')[0].value;
		if (email.search('@') > 0){
			var elems = document.getElementsByClassName('nameAndEmail');
			for (var i=0; i<elems.length; i++) elems[i].style.display='none';

			var nextDiv = document.getElementsByClassName('countryCity');
			for (var i=0; i<nextDiv.length; i++) nextDiv[i].style.display='block';

			currPageNum += 1;
		} else {
			var forBord = document.getElementsByName('email');
			for (var i=0; i<forBord.length; i++) forBord[i].style.border = "1px solid red";
		}
	}
}
function prevPage(){
	if (currPageNum == 1) {
		alert("You are on the first page!");
	}
	if (currPageNum == 2 ){
		var elems = document.getElementsByClassName('nameAndEmail');
		for (var i=0; i<elems.length; i++) elems[i].style.display='block';

		var nextDiv = document.getElementsByClassName('countryCity');
		for (var i=0; i<nextDiv.length; i++) nextDiv[i].style.display='none';

		currPageNum -= 1;
	}
}