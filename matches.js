// write js code here corresponding to matches.html
var scharr = JSON.parse(localStorage.getItem("schedule"));
console.log(scharr);

var favArr = JSON.parse(localStorage.getItem("favourites")) || [];

scharr.forEach(function(el,index){

    var tr1 = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = el.num

    var td2 = document.createElement("td");
    td2.innerText = el.teamA

    var td3 = document.createElement("td");
    td3.innerText = el.teamB

    var td4 = document.createElement("td");
    td4.innerText = el.date

    var td5 = document.createElement("td");
    td5.innerText = el.location

    var td6 = document.createElement("td");
    td6.innerText = "Favourites";
    td6.style.color = "blue";
    td6.style.cursor = "pointer"
    td6.addEventListener("click",function(){
        console.log(el)
        favArr.push(el);
        localStorage.setItem("favourites",JSON.stringify(favArr));
    })

    tr1.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr1);
})