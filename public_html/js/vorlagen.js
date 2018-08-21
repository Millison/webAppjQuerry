/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Nur für Entwicklung!! Danach etfernen!!

/*  Routing für login-Seite */
function toLogin($scope) {
    $('head').show(
            $.ajax({
                url: "loginHeader.html",
                cache: false,
                success: function (html) {
                    $("head").html(html);
                }
            })
            );
    $('body').show(
            $.ajax({
                url: "login.html",
                cache: false,
                success: function (html) {
                    $("body").html(html);
                }
            })
            );
}

var app = angular.module('myApp', [])
        .controller('myCtrl', toLogin)
        ;

/* JS->PHP & PHP->JS */
function clickJStoPHP(event) {
// Daten an Server senden
    $.ajax({
// pfad zur PHP Datei (ab HTML Datei)
        url: "php/getInfo.php",
        // Daten, die an Server gesendet werden soll in JSON Notation
        data: {name: "AxxG", id: event.target.id},
        datatype: "json",
        // Methode POST oder GET
        type: "POST",
        // Callback-Funktion, die nach der Antwort des Servers ausgefuehrt wird
        success: function (data) {
            clickJStoPHPResponse(data);
        }
    });
}

function clickJStoPHPResponse(data) {
// Antwort des Server ggf. verarbeiten
    var response = $.parseJSON(data);
    alert("Mein Ergebnis bei AxxG-AJAX: " + response);
}


