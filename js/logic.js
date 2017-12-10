var currPageNum = 1,
	name, email, country, city, 
	fb, vk, tweet, ok, catNum;

function nextPage(){
	if(currPageNum == 1){
		name  = document.getElementsByName('userName')[0].value;
		email = document.getElementsByName('email')[0].value;
		window.location.href = "pages/second.html";
		currPageNum = 2;
	}
}
function prevPage(){
	window.location.href = "../index.html";		
}
