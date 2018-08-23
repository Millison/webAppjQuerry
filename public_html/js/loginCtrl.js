/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xmlCont;
var tokens = new Array(3);

/*
 * Folgendes ausprobieren:
 * $.get("data.xml", function(data) {
 var myData = 
 data.getElementsByTagName('data')[0].firstChild.nodeValue;
 
 $("#insert").click(function() {
 $('#data').append(myData).show('slow');
 });
 });
 */
$(function () {
    console.log(sessionStorage.getItem('content'));
    var browserLanguage = navigator.language.charAt(0) + navigator.language.charAt(1);
    //var xmlUrl = "language/" + browserLanguage + ".xml";
    $.ajax({
        type: "GET",
        url: "language/language.xml",
        dataType: "xml",
        success: function (data) {
            $(data).find(browserLanguage).find('loginContent').each(function () {
                $('#customerLbl').text($(this).find('customerLbl').html());
                $('#usernameLbl').text($(this).find('usernameLbl').html());
                $('#passwordLbl').text($(this).find('passwordLbl').html());
                $('#loginBtn').text($(this).find('button').html());
                xmlCont = $(this);
            });
        },
        error: function () {
            alert('ERROR');
        }
    });
});


/* Response Status empfange:
 * $.ajax({
 url: "/echo/xml/",
 type: "POST",
 data: {
 //Set an empty response to see the error
 xml: "<response></response>"   
 },
 dataType:"text xml",
 success: function(xml, textStatus, xhr) {
 console.log(arguments);
 console.log(xhr.status);
 },
 complete: function(xhr, textStatus) {
 console.log(xhr.status);
 } 
 });
 */
function login() {
    var formValues = validateForm();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://appload.scopevisio.com/rest/token",
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "grant_type": "password",
            "customer": formValues[0],
            "username": formValues[1],
            "password": formValues[2],
            xml: "<response></response>"
        },
        dataType: "text xml",
        success: function (xml, textStatus, xhr) {
            console.log(arguments);
            console.log(xhr.status);
        },
        complete: function (xhr, textStatus) {
            console.log(xhr.status);
        }
    };
    //console.log("Login-Func");
    token(settings);
}
;

function validateForm() {

    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var custom = $('#customerInput').val();
    var email = $('#usernameInput').val();
    var pass = $('#passwordInput').val();

    var inputVal = new Array(custom, email, pass);

    // Validate Customer
    if (inputVal[0] === "") {
        $('#customerLblError').text(xmlCont.find('customEmpty').html());
    } else if (!numberReg.test(custom)) {
        $('#customerLblError').text(xmlCont.find('customNotEmpty').html());
    } else {
        $('#customerLblError').hide();
    }
    // Validate Username/E-Mail
    if (inputVal[1] === "") {
        $('#usernameLblError').text(xmlCont.find('userEmpty').html());
    } else if (!emailReg.test(inputVal[1])) {
        $('#usernameLblError').text(xmlCont.find('userNotEmpty').html());
    } else {
        $('#usernameLblError').hide();
    }
    // Validate Password
    if (inputVal[2] === "") {
        $('#passwordLblError').text(xmlCont.find('passwordLblError').html());
    } else {
        $('#passwordLblError').hide();
    }
    return inputVal;
}
;

function token($settings) {
    console.log("Login-Func");
    $.getScript('routing.js', toStart());
    $.ajax($settings).done(function (response) {
        if (response.access_token !== '' && response.refresh_token !== '') {
            tokens[0] = response.token_type;
            tokens[1] = response.access_token;
            tokens[2] = response.refresh_token;
            console.log(tokens[1]);
            $.getScript('routing.js', toStart());
        } else {
            alert("Server reagiert nicht!\n\n" +
                    "Server does not react!\n\n" +
                    "Le serveur ne réagit pas!");
        }
    });
}
;

/*
 function tokensReset() {
 tokens[0] = "";
 tokens[1] = "";
 tokens[2] = "";
 tokens = null;
 //console.log("Aktulle Token ist : " + tokens[2]);
 //$.getScript('routing.js', toLogin());
 };
 */