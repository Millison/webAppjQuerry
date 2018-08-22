/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xmlCont;

$(function () {
    var browserLanguage = navigator.language.charAt(0) + navigator.language.charAt(1);
    var xmlUrl = "language/" + browserLanguage + ".xml";
    $.ajax({
        type: "GET",
        url: xmlUrl,
        dataType: "xml",
        success: function (data) {
            $(data).find('indexHTML').each(function () {
                $('#imprint').text($(this).find('imprint').html());
                $('#privacyPolicy').text($(this).find('privacyPolicy').html());
                $('#legal').text($(this).find('legal').html());
                $('#sitemap').text($(this).find('sitemap').html());
                xmlCont = $(this);
            });
        },
        error: function () {
            alert('ERROR');
        }
    });
});

