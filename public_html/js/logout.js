/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var tokens = new Array(3);


function logout() {
    $.getScript('loginController.js', tokens);
    tokens[0] = "";
    tokens[1] = "";
    tokens[2] = "";
    //console.log(tokens[2]);
    $.getScript('routing.js', toLogin());
};




