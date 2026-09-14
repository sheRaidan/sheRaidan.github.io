var page = document.querySelector("body");
var lastShown = 0;

fetch("conlangs.json")
.then(data => data.json())
.then(json => {
    var num = 0;
    json.forEach(lang =>{
        page.innerHTML += `<div id="${num}" onclick="show(${num})">${lang.name}</div>`;
        document.getElementById(num).style.left = num*100/json.length+"vw";
        document.getElementById(num).style.width = num*100/json.length+"vw";
        document.getElementById(num).style.background = `hsl(${num*360/json.length}, 80%, 80%)`;
        num++;
    });

    // lastShown = json.length;
})

function show(div){
    document.getElementById(div).style.top = "38vh";
    document.getElementById(div).style.left = "45vw";

    // document.getElementById(lastShown).style.left = lastShown*100/json.length+"vw"; // fix later
    // document.getElementById(lastShown).style.top = "75vh";
    // lastShown = div;
}
