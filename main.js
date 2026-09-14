var page = document.querySelector("body");
var lengthOfFile = 0;
var places = [];

fetch("conlangs.json")
.then(data => data.json())
.then(json => {
    var num = 0;
    json.forEach(lang =>{
        page.innerHTML += `<div id="${num}" onclick="show(${num})">${lang.name}</div>`;
        document.getElementById(num).style.left = num*100/json.length+"vw";
        document.getElementById(num).style.width = 200/json.length+"vw";
        document.getElementById(num).style.background = `hsl(${num*360/json.length}, 80%, 80%)`;
        num++;
        lengthOfFile++;
        places.push(num*100/json.length);
    });
    console.log(lengthOfFile);

    // lastShown = json.length;
})

function show(div){
    document.getElementById(div).style.top = "38vh";
    document.getElementById(div).style.left = "40vw";

    for (var i = 0; i < lengthOfFile; i++){
        if (document.getElementById(i).style.top != "75vh" && i != div){
            document.getElementById(i).style.top = "75vh";
            document.getElementById(i).style.left = places[i]-1+"vw"; 
        }
    }

    // document.getElementById(lastShown).style.left = lastShown*100/json.length+"vw"; // fix later
    // document.getElementById(lastShown).style.top = "75vh";
    // lastShown = div;
}
