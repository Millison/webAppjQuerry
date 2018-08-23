/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
    console.log(sessionStorage.getItem('content'));
    var browserLanguage = navigator.language.charAt(0) + navigator.language.charAt(1);
    var xmlUrl = "language/" + browserLanguage + ".xml";
    $.ajax({
        type: "GET",
        url: xmlUrl,
        dataType: "xml",
        success: function (data) {
            $(data).find('startContent').each(function () {
                $('#headerTitle').text($(this).find('headerTitle').html());
                $('#abstract').text($(this).find('abstract').html());
                $('#createNewContactBtn').text($(this).find('createNewContactBtn').html());
                $('#getContactByIdBtn').text($(this).find('getContactByIdBtn').html());
                $('#logoutBtn').text($(this).find('logoutBtn').html());
                xmlCont = $(this);
            });
        },
        error: function () {
            alert('ERROR');
        }
    });
});

function toStart() {
    $.getScript('routing.js', toStart());
}

function logout() {
    $.getScript('loginCtrl.js', tokensReset());
    $.getScript('routing.js', toLogin());
}

