/// <reference path="../typings/browser.d.ts"/>

(function () {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die1Label = document.getElementById("die1Label");
    var die2Label = document.getElementById("die2Label");

    $('#rollButton').click(function(){
        var die1roll = Math.floor((Math.random() * 6) + 1);
        var die2roll = Math.floor((Math.random() * 6) + 1);
        
        die1Label.innerHTML = die1roll;
        die2Label.innerHTML = die2roll;
        
        die1.setAttribute("src",("../Assets/images/" + die1roll + ".png"));
        die2.setAttribute("src",("../Assets/images/" + die2roll + ".png"));
    });
    
})();