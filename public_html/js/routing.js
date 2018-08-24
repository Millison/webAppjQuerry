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
    sessionStorage.clear();
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

function toCreatPersonContact() {
    sessionStorage.setItem('content', '#.html');
    $('#content').load('#.html');
}

function toCreatComüpanyContact() {
    sessionStorage.setItem('content', '#.html');
    $('#content').load('#.html');
}

function toEditContact() {
    sessionStorage.setItem('content', '#.html');
    $('#content').load('#.html');
}

function toEditPersonContact() {
    sessionStorage.setItem('content', '#.html');
    $('#content').load('#.html');
}

function toEditComüpanyContact() {
    sessionStorage.setItem('content', '#.html');
    $('#content').load('#.html');
}

function toGetContact() {
    sessionStorage.setItem('content', 'getContact.html');
    $('#content').load('getContact.html');
}

function toCreatOffer() {
    sessionStorage.setItem('content', '#.html');
    $('#content').load('#.html');
}

function toEditOffer() {
    sessionStorage.setItem('content', '#.html');
    $('#content').load('#.html');
}

function toGetOffer() {
    sessionStorage.setItem('content', '#.html');
    $('#content').load('#.html');
}

function callContent() {
    var browserLanguage = navigator.language.charAt(0) + navigator.language.charAt(1);
    sessionStorage.setItem('language', browserLanguage);
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
}

var app = angular.module('myApp', [])
        //.controller('myCtrl', toLogin)
        .controller('myCtrl', callContent)
        //console.log(pageContent);
        ;
