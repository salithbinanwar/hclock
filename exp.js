setInterval(() => {
var d = new Date();
var n = d.getHours();  document.getElementById("hour").innerHTML = n;

var d = new Date();
var n = d.getMinutes();  document.getElementById("minute").innerHTML = n;

    var d = new Date();
var n = d.getSeconds();  document.getElementById("second").innerHTML = n;
}, 1000);
