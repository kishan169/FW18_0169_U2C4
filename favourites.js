// write js code here corresponding to favourites.html

var farr = JSON.parse(localStorage.getItem("favourites")) || [];
//console.log(farr)

farr.forEach(function(el,index){

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
    td6.innerText = "Delete";
    td6.style.color = "red";
    td6.style.cursor = "pointer"
    td6.addEventListener("click",function(){
        event.target.parentNode.remove();
        console.log(el)
        farr.splice(index,1);
        console.log(farr)
        
        localStorage.setItem("favourites",JSON.stringify(farr));
    })

    tr1.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr1);
})