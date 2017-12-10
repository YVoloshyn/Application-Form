/*
Created by Yaroslav Voloshyn
*/
var currPageNum = 1,
    userData = {},
    emailVal = false;


//Функция переключения на следующую страницу
function nextPage() {
    if (currPageNum == 1 && emailVal === true) {
        userData.name = document.getElementsByName('userName')[0].value;
        userData.email = document.getElementsByName('email')[0].value;
        firstPage.style.display = "none";
        secondPage.style.display = "block";
        currPageNum = 2;
    } else if (currPageNum == 1 && emailVal === false) {
        document.getElementById('wrongEmail').style.visibility = 'visible';
    } else if (currPageNum == 2) {
        var selectedCountry = document.getElementById('userCountry'),
            selectedCity = document.getElementById('userCity');
        var selCountryName = selectedCountry.options[selectedCountry.selectedIndex].text,
            selCityName = selectedCity.options[selectedCity.selectedIndex].text;

        userData.country = selCountryName;
        userData.city = selCityName;

        secondPage.style.display = "none";
        thirdPage.style.display = "block";
        currPageNum = 3;

    } else if (currPageNum == 3) {
        userData.fb = document.getElementById('fb').value;
        userData.vk = document.getElementById('vk').value;
        userData.tw = document.getElementById('tw').value;
        userData.ok = document.getElementById('ok').value;

        thirdPage.style.display = "none";
        fourthPage.style.display = "block";
        currPageNum = 4;

    } else if (currPageNum == 4) {
        var valPic = validatePic();

        if (valPic) {
            userData.picture = document.getElementById('picture').src;

            fourthPage.style.display = "none";
            fifthPage.style.display = "block";

            currPageNum = 5;
            finishResult();
        }
    }
}

//Функция переключения на предыдущую страничку
function prevPage() {
    switch (currPageNum) {
        case 1:
            alert("Вы на первой страничке !");
            break;
        case 2:
            firstPage.style.display = "block";
            secondPage.style.display = "none";
            currPageNum -= 1;
            break;
        case 3:
            secondPage.style.display = "block";
            thirdPage.style.display = "none";
            currPageNum -= 1;
            break;
        case 4:
            thirdPage.style.display = "block";
            fourthPage.style.display = "none";
            currPageNum -= 1;
            break;
    }
}

//Функция валидации емейла
function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) {
        document.getElementById('wrongEmail').style.visibility = 'visible';
        emailVal = false;
        return false;
    }
    document.getElementById('wrongEmail').style.visibility = 'hidden';
    emailVal = true;
    return true;
}

//Функция создания списка стран
(function() {
    window.onload = function() {
        var countries = countriesJSON,
            optionsCountry = '<option value="" disabled selected>Страна</option>',
            countriesLength = objLength(countries);
	
        for (var i = 1; i <= countriesLength; i++) {
            optionsCountry += '<option value="' + i + '">' + countries[i] + '</option>';
            document.getElementById('userCountry').innerHTML = optionsCountry;
        }
    }
})();

//Функция создания списка городов
function citiesFun() {
    var countryNum = document.getElementById('userCountry').value,
        optionsCity = '<option value="" disabled selected>Город</option>';
    
    for (var each in citiesJSON) {
        if (countryNum == citiesJSON[each].country) {
            optionsCity += '<option value="' + citiesJSON[each].country + '">' + citiesJSON[each].name + '</option>';
            document.getElementById('userCity').innerHTML = optionsCity;
        }
    }
}

//Функция показать/скрыть поля соц сетей
$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        var inputValue = $(this).attr("value");
        $("#" + inputValue).toggle();
    });
});

//Функция выбора картинки
function mark(el) {
    document.getElementById('wrongPic').style.visibility = 'hidden';

    var $img = $("#picture");
    if ($img[0] != null) {
        $img.removeAttr('id');
        el.setAttribute("id", "picture");
    } else {
        el.setAttribute("id", "picture");
    }
}

//Функция валидации выбранной картинки ( != 'dog')
function validatePic() {
    var img = document.getElementById("picture");
    if (img == null) {
        alert("Вы не выбрали котика !");
        return false;
    }
    if (img.name == 'dog') {
        document.getElementById('wrongPic').style.visibility = 'visible';
        return false;
    }
    if (img.name == 'cat') {
        return true;
    }
}

//Функция заполнения окончательного результата
function finishResult() {
    document.getElementById("usrPic").innerHTML =
        '<img type="image" src="' + userData.picture + '"style="height: 250px; width: 250px; padding-top: 50px;">';


    document.getElementById("usrName").innerHTML = '<font size="6" color="black">' + userData.name + '</font>';
    document.getElementById("usrEmail").innerHTML = '<font size="3" color="grey">' + userData.email + '</font>';
    document.getElementById("usrCity").innerHTML = '<font size="4" color="grey">' + userData.city + ', ' + userData.country + '</font>';

    var fb = userData.fb,
        vk = userData.vk,
        tw = userData.tw,
        ok = userData.ok;

    if (fb != "") {
        document.getElementById("usrSocial").innerHTML =
            '<p><span style="color:blue">Facebook: </span><span style="color:grey">' + fb + '</p>';
    }
    if (vk != "") {
        var prevInner = document.getElementById("usrSocial").innerHTML;
        document.getElementById("usrSocial").innerHTML = prevInner +
            '<p><span style="color:blue">Vkontakte: </span><span style="color:grey">' + vk + '</p>';
    }
    if (tw != "") {
        var prevInner = document.getElementById("usrSocial").innerHTML;
        document.getElementById("usrSocial").innerHTML = prevInner +
            '<p><span style="color:blue">Twetter: </span><span style="color:grey">' + tw + '</p>';
    }
    if (ok != "") {
        var prevInner = document.getElementById("usrSocial").innerHTML;
        document.getElementById("usrSocial").innerHTML = prevInner +
            '<p><span style="color:blue">Odnoklassniki: </span><span style="color:grey">' + ok + '</p>';
    }
}

//Функция старта нового прохождения анкеты
function oneMoreTime() {
    location.reload();
}

//Функция получения длины обьекта
function objLength(obj) {
    var i = 0;
    for (var x in obj) {
        if (obj.hasOwnProperty(x)) {
            i++;
        }
    }
    return i;
}