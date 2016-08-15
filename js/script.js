/**
 * Created by saroj on 8/13/16.
 */
"use strict"

var a = document.querySelector("#a-value");
var b = document.querySelector("#b-value");
var sel= document.querySelector("#lists");
var cal= document.querySelector("#cal");
var p= document.querySelector("#result");

function calculation(a,b) {
    var aValue= a.value;
    var bValue= b.value;
    var select= sel.value;
    if(select =='Add'){
        var x = Number(aValue) + Number(bValue);
        p.innerHTML = x;
    }
    if(select =='Sub'){
        var x = Number(aValue) - Number(bValue);
        p.innerHTML = x;
    }
    if(select =='Mul'){
        var x = Number(aValue) * Number(bValue);
        p.innerHTML = x;
    }
    if(select =='Div'){
        var x = Number(aValue) / Number(bValue);
        p.innerHTML = x;
    }
}

cal.onclick = function () {
    calculation(a,b);
}




