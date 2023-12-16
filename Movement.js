// Scott A. Daulbaugh
var interValid = 0;
let change = 100;


function startMove()
{
    var down = 1;
    var image = document.getElementById("imggunner");
    interValid = setInterval(function() {
        image.style.top = change + "px";
        document.getElementById("startMove").innerHTML = "x = 50px" + image.style.left + "y = 50px" + image.style.top;

        change += 5;// change = change = 5;
    },200);
}

function stopMove()
{
    function interValid()
    {clearInterval(invalid)}
}