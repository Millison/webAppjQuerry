/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myViews = new Array(2);

$(function () {
    var browserLanguage = navigator.language.charAt(0) + navigator.language.charAt(1);
    var xmlUrl = "language/language.xml";
    $.ajax({
        type: "GET",
        url: xmlUrl,
        dataType: "xml",
        success: function (data) {
            $(data).find(browserLanguage).each(function () {
                myViews[0] = $(this).find('loginContent');
                xmlCont = $(this);
                //console.log(xmlCont.find('customerLbl').html()); Kundennummer
                //console.log("language ist da");
            });
        },
        error: function () {
            alert('ERROR language.ja');
        }
    });
});

function getLanguage() {
    return myViews;
}


