/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * villeichet so ausprobieren:
 * document.getElementsByTagName('head')[0].appendChild(galerieSkript);
 * document.getElementsByTagName('head').innerHTML = '<phad>'; */


function toLogin() {
    $('#content').load('login.html');
}

function toStart() {
    $('#content').load('start.html');
}

function toCreatContact() {
    $('#content').load('createContact.html');
}

function toGetContact() {
    $('#content').load('getContact.html');
}

var rout = function () {
    return {
        goToIndex: function () {

        },
        goToLogin: function () {
            $('#content').load('login.html');
        },
        goToStart: function () {
            $('#content').load('start.html');
        }
    }
}

var routInstanz = angular.module('app.rout', [])
        .factory("rout", rout);
;

/* Beim Reload wird der Konnektor erneut definiertund somit auch die Login-Seite
 * aufgerufen.
 * Es ist sehr schlecht!
 * 'toLogin()' soll nur einmal am Anfang gemacht werden.
 * Atueller Kontent soll im SESION gespeichert werden,
 * z.B.: 'start.html' und beim Reload, dies als phad genommen werden!
 * 
 * var pfadToPage = SESSION[0];
 * goToContent($pfadToPage) */
var app = angular.module('myApp', ['app.rout'])
        .controller('myCtrl', toLogin)
        ;
