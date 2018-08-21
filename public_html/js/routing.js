/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * villeichet so ausprobieren:
 * document.getElementsByTagName('head')[0].appendChild(galerieSkript);
 * document.getElementsByTagName('head').innerHTML = '<phad>'; */


function Routing() {
    
    function goToIndex() {
        
    };
    
    function goToLogin() {
        $('#content').load('login.html');
    };
    
    function goToStart() {
        $('#content').load('start.html');
    };
}

var rout = new Routing();

function goToStart() {
        $('#content').load('start.html');
    };

// '.click' muss hier raus!
function toLogin($scope) {
    /*$.ajax({
     url: "loginForm.html",
     cache: false,
     success: function (html) {
     $("#content").html(html);
     }
     });*/
    /*
    $('head').show(
            $.ajax({
                url: "loginHeader.html",
                cache: false,
                success: function (html) {
                    $("head").html(html);
                }
            })
            );
    */
    //$('head').load("loginHeader.html");
    
    
    $('#content').load('login.html');
}

function toStart() {
    $('#content').load('start.html');
}

var app = angular.module('myApp', [])
        .controller('myCtrl', toLogin)
        ;

/* Ok   FUNKTIONIERT
 var app = angular.module('myApp', []);
 app.controller('myCtrl', function ($scope) {
 $.ajax({
 url: "loginForm.html",
 cache: false,
 success: function (html) {
 $("#content").html(html);
 }
 });
 });
 */

/*
 var app = angular.module('myApp', []);
 app.controller('myCtrl', function ($scope, $http) {
 $http.get("loginForm.htm")
 .then(function (response) {
 $scope.content = response.data;
 });
 });
 */



