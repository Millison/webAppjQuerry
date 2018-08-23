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
    sessionStorage.setItem('content', 'login.html');
    $('#content').load('login.html');
}

function toStart() {
    sessionStorage.setItem('content', 'start.html');
    $('#content').load('start.html');
}

function toCreatContact() {
    sessionStorage.setItem('content', 'createContact.html');
    $('#content').load('createContact.html');
}

function toGetContact() {
    sessionStorage.setItem('content', 'getContact.html');
    $('#content').load('getContact.html');
}

function callContent() {
    //var index = "index.html";
    //var page = pageContent.localeCompare('index.html');
    var cont = sessionStorage.getItem('content');
    if (cont != null) {
        var page = cont.localeCompare('index.html');
        if (page == 0) {
            sessionStorage.setItem('content', 'login.html');
            $('#content').load('login.html');
        } else {
            $('#content').load(cont);
        }
    } else {
        sessionStorage.setItem('content', 'login.html');
        $('#content').load('login.html');
    }

    //console.log(cont);
    //var page = cont.localeCompare('index.html');

    console.log(cont);
}

/*
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
 */

/* Beim Reload wird der Konnektor erneut definiertund somit auch die Login-Seite
 * aufgerufen.
 * Es ist sehr schlecht!
 * 'toLogin()' soll nur einmal am Anfang gemacht werden.
 * Atueller Kontent soll im SESION gespeichert werden,
 * z.B.: 'start.html' und beim Reload, dies als phad genommen werden!
 * 
 * var pfadToPage = SESSION[0];
 * goToContent($pfadToPage) */
var app = angular.module('myApp', [])
        //.controller('myCtrl', toLogin)
        .controller('myCtrl', callContent)
        //console.log(pageContent);
        ;
