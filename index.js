// write js code here corresponding to index.html
// You should add submit event on the form

var sc1 = document.querySelector("#masaiForm");
var arr = JSON.parse(localStorage.getItem("schedule")) || [];

sc1.addEventListener("submit", ScoreMasai);

function ScoreMasai(){
    event.preventDefault();
    var obj = {
        num : masaiForm.matchNum.value,
        teamA :masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        location : masaiForm.venue.value,
        date: masaiForm.date.value,
    }
    arr.push(obj);
    console.log(obj);
    console.log(arr);

    localStorage.setItem("schedule",JSON.stringify(arr))

    document.querySelector("#matchNum").value = "";
    document.querySelector("#teamA").value = "";
    document.querySelector("#teamB").value = "";
    document.querySelector("#venue").value = "";
    document.querySelector("#date").value = "";
}


