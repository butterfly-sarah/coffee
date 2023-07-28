var menudon1 = document.getElementById("donuts1")
var menudon2 = document.getElementById("donuts2")
var menudon3 = document.getElementById("donuts3")
var menudon4 = document.getElementById("donuts4")
var donutsParent = document.querySelector(".donut1")
var donut1 = document.querySelector("#don1")
var donut2 = document.querySelector("#don2")
var donut3 = document.querySelector("#don3")
var donut4 = document.querySelector("#don4")
var totalPrice = 0
var sub1 = document.querySelector(".cart sub")
var buttons = document.querySelectorAll("button")
buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        sub1.style.background = "red"
        sub1.style.color = "white"
        sub1.style.borderRadius = "50%"
        sub1.innerHTML = parseInt(sub1.innerHTML, 10) + 1
    })
})
menudon1.onclick = function() {
    donut1.style.display = "inline-block";
    donut2.style.display = "none";
    donut3.style.display = "none";
    donut4.style.display = "none";
    donutsParent.style.background = "rgb(103, 165, 103)";
}
menudon2.onclick = function() {
    donut1.style.display = "none";
    donut2.style.display = "inline-block";
    donut3.style.display = "none";
    donut4.style.display = "none";
    donutsParent.style.background = "rgb(87, 132, 193)";
}
menudon3.onclick = function() {
    donut1.style.display = "none";
    donut2.style.display = "none";
    donut3.style.display = "inline-block";
    donut4.style.display = "none";
    donutsParent.style.background = "rgb(231, 84, 128)";
}
menudon4.onclick = function() {
    donut1.style.display = "none";
    donut2.style.display = "none";
    donut3.style.display = "none";
    donut4.style.display = "inline-block";
    donutsParent.style.background = "#D8B378";
}
var btn1 = document.querySelector("#don1 button")
var product1 = document.querySelector("#don1 h3")
var price1 = document.querySelector("#don1 h4")
var total = document.getElementById("total")
var first = document.querySelector(".first")
var sec = document.querySelector(".sec")
btn1.onclick = function() {
    first.innerHTML += product1.textContent + "<br>"
    sec.innerHTML += price1.textContent + "<br>"
    totalPrice += +price1.getAttribute("price");
}
var btn2 = document.querySelector("#don2 button")
var product2 = document.querySelector("#don2 h3")
var price2 = document.querySelector("#don2 h4")
btn2.onclick = function() {
    first.innerHTML += product2.textContent + "<br>"
    sec.innerHTML += price2.textContent + "<br>"
    totalPrice += +price2.getAttribute("price");
}
var btn3 = document.querySelector("#don3 button")
var product3 = document.querySelector("#don3 h3")
var price3 = document.querySelector("#don3 h4")
btn3.onclick = function() {
    first.innerHTML += product3.textContent + "<br>"
    sec.innerHTML += price3.textContent + "<br>"
    totalPrice += +price3.getAttribute("price");
}
var btn4 = document.querySelector("#don4 button")
var product4 = document.querySelector("#don4 h3")
var price4 = document.querySelector("#don4 h4")
btn4.onclick = function() {
    first.innerHTML += product4.textContent + "<br>"
    sec.innerHTML += price4.textContent + "<br>"
    totalPrice += +price4.getAttribute("price");
}

var menudri1 = document.getElementById("drinks1")
var menudri2 = document.getElementById("drinks2")
var menudri3 = document.getElementById("drinks3")
var menudri4 = document.getElementById("drinks4")
var menudri5 = document.getElementById("drinks5")
var drinksParent = document.querySelector(".drink1")
var drink1 = document.querySelector("#dri1")
var drink2 = document.querySelector("#dri2")
var drink3 = document.querySelector("#dri3")
var drink4 = document.querySelector("#dri4")
var drink5 = document.querySelector("#dri5")
menudri1.onclick = function() {
    drink1.style.display = "inline-block";
    drink2.style.display = "none";
    drink3.style.display = "none";
    drink4.style.display = "none";
    drink5.style.display = "none";
    drinksParent.style.background = "rgb(103, 165, 103)";
}
menudri2.onclick = function() {
    drink1.style.display = "none";
    drink2.style.display = "inline-block";
    drink3.style.display = "none";
    drink4.style.display = "none";
    drink5.style.display = "none";
    drinksParent.style.background = "rgb(231, 84, 128)";
}
menudri3.onclick = function() {
    drink1.style.display = "none";
    drink2.style.display = "none";
    drink3.style.display = "inline-block";
    drink4.style.display = "none";
    drink5.style.display = "none";
    drinksParent.style.background = "rgb(92,64,51)";
}
menudri4.onclick = function() {
    drink1.style.display = "none";
    drink2.style.display = "none";
    drink3.style.display = "none";
    drink4.style.display = "inline-block";
    drink5.style.display = "none";
    drinksParent.style.background = "rgb(155, 103, 60)";
}
menudri5.onclick = function() {
    drink1.style.display = "none";
    drink2.style.display = "none";
    drink3.style.display = "none";
    drink4.style.display = "none";
    drink5.style.display = "inline-block";
    drinksParent.style.background = "rgb(87, 132, 193)";
}
var dbtn1 = document.querySelector("#dri1 button")
var dproduct1 = document.querySelector("#dri1 h3")
var dprice1 = document.querySelector("#dri1 h4")
dbtn1.onclick = function() {
    first.innerHTML += dproduct1.textContent + "<br>"
    sec.innerHTML += dprice1.textContent + "<br>"
    totalPrice += +dprice1.getAttribute("price");
}
var dbtn2 = document.querySelector("#dri2 button")
var dproduct2 = document.querySelector("#dri2 h3")
var dprice2 = document.querySelector("#dri2 h4")
dbtn2.onclick = function() {
    first.innerHTML += dproduct2.textContent + "<br>"
    sec.innerHTML += dprice2.textContent + "<br>"
    totalPrice += +dprice2.getAttribute("price");
}
var dbtn3 = document.querySelector("#dri3 button")
var dproduct3 = document.querySelector("#dri3 h3")
var dprice3 = document.querySelector("#dri3 h4")
dbtn3.onclick = function() {
    first.innerHTML += dproduct3.textContent + "<br>"
    sec.innerHTML += dprice3.textContent + "<br>"
    totalPrice += +dprice3.getAttribute("price");
}
var dbtn4 = document.querySelector("#dri4 button")
var dproduct4 = document.querySelector("#dri4 h3")
var dprice4 = document.querySelector("#dri4 h4")
dbtn4.onclick = function() {
    first.innerHTML += dproduct4.textContent + "<br>"
    sec.innerHTML += dprice4.textContent + "<br>"
    totalPrice += +dprice4.getAttribute("price");
}
var dbtn5 = document.querySelector("#dri5 button")
var dproduct5 = document.querySelector("#dri5 h3")
var dprice5 = document.querySelector("#dri5 h4")
dbtn5.onclick = function() {
    first.innerHTML += dproduct5.textContent + "<br>"
    sec.innerHTML += dprice5.textContent + "<br>"
    totalPrice += +dprice5.getAttribute("price");
}
var cart = document.querySelector(".cart")
var table = document.querySelector("table")
cart.onclick = function() {
    first.innerHTML += "<br>" + "total"
    sec.innerHTML += "<br>" + totalPrice + " $"
    sub1.style.background = "none"
    sub1.style.color = "black"
    sub1.style.borderRadius = "0%"
    sub1.innerHTML = 0
    total.style.opacity = 1
    table.style.opacity = 1
}