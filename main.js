var page = document.querySelector("body");
var lengthOfFile = 0;
var places = [];
var dataCollect = [];

fetch("conlangs.json")
.then(data => data.json())
.then(json => {
    var num = 0;
    json.forEach(lang =>{
        page.innerHTML += `<div id="${num}" onclick="show(${num})"><p class="side">${lang.name}</p></div>`;
        document.getElementById(num).style.left = num*100/json.length+"vw";
        document.getElementById(num).style.width = 150/json.length+"vw";
        document.getElementById(num).style.background = `hsl(${num*360/json.length}, 80%, 80%)`;
        num++;
        lengthOfFile++;
        places.push(num*100/json.length);
        dataCollect.push(lang);
    });
    // console.log(lengthOfFile);
})

function show(div){
    var block = document.getElementById(div);
    // block.style.top = "38vh";
    // block.style.left = "38vw";
    block.classList.add("shown");
    block.style.setProperty("--left",  "50vw");
    block.innerHTML = `<h2>${dataCollect[div].name}</h2><p>Created by: <b>${dataCollect[div].creator} in ${dataCollect[div].year}</b></p>
        <div class="bubble"><p>${dataCollect[div].desc}</p></div><hr><div class="bubble"><p>Hello -> ${dataCollect[div].sample}</p></div>`;

    for (var i = 0; i < lengthOfFile; i++){
        if (document.getElementById(i).style.top != "75vh" && i != div){
            document.getElementById(i).classList.remove("shown");

            document.getElementById(i).innerHTML = `<p class="side">${dataCollect[i].name}</p>`;
            // document.getElementById(i).style.top = "75vh";
            // document.getElementById(i).style.left = places[i]-places[0]/1000*999+"vw"; // needs the 1k/999 because places[i] on its own jumps over right for some reason
            // document.getElementById(i).style.transition = "all 0.2s";
        }
    }
}
