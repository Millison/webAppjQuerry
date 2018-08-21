/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tokens = new Array(3);

function validateForm() {

    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //Alternative:  /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/
    var custom = $('#customerInput').val();
    var email = $('#usernameInput').val();
    var pass = $('#passwordInput').val();

    var inputVal = new Array(custom, email, pass);
    var inputMessage = new Array("customer nummer", "Email address", "password");

    $('.error').hide();
    if (inputVal[0] === "") {
        $('#customerLbl').after('<span class="error"> Please enter your ' + inputMessage[0] + '!</span>');
    } else if (!numberReg.test(custom)) {
        $('#customerLbl').after('<span class="error"> Numbers only!</span>');
    } else if (inputVal[1] === "") {
        $('#usernameLbl').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
    } else if (!emailReg.test(email)) {
        $('#usernameLbl').after('<span class="error"> Please enter a valid email address</span>');
    } else if (inputVal[2] === "") {
        $('#passwordLbl').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
    }

    return inputVal;
}
;

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
            "password": formValues[2]
        }
    };
    token(settings);
    /*$('#loginBtn').submit(function () {
     $.ajax({
     type: "POST",
     url: "greetings.php",
     data: "username=" + $("#username").val()
     + "email=" + $('#email').val(),
     success: function (html) {
     $("#content").html(html);
     }
     });
     return false;
     });*/
}

function token($settings) {

    $.ajax($settings).done(function (response) {
        console.log(response);
        if (response.access_token !== '' && response.refresh_token !== '') {
            tokens[0] = response.token_type;
            tokens[1] = response.access_token;
            tokens[2] = response.refresh_token;
            // gehe zu start.html
            // Routing.toStart();
            $.getScript('routing.js', function(){
                goToStart();
            });
            //$rout.goToStart();
        } else {
            alert("Server reagiert nicht!\n\n" +
            "Server does not react!\n\n" +
            "Le serveur ne réagit pas!");
        }
    });
};

