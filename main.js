document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " +sum;
});
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1-num2;
    document.getElementById("result2").innerHTML = "SUM : " +sum;
});
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1*num2;
    document.getElementById("result3").innerHTML = "SUM : " +sum;
});
document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1/num2;
    document.getElementById("result4").innerHTML = "SUM : " +sum;
});
function myalert(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert(sum)
}
function myalert2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1 / 100;
    var sum1 = num2 / (sum * sum);
    alert(sum1.toFixed(2))
}
const img = document.createElement("img");
img.src = "img/pic.jpg"
img.style.width = "300px"

document.getElementById("myDiv").appendChild(img);