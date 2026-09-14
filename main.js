var page = document.querySelector("body");
var lengthOfFile = 0;
var places = [];

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
    });
    console.log(lengthOfFile);

    // lastShown = json.length;
})

function show(div){
    document.getElementById(div).style.top = "38vh";
    document.getElementById(div).style.left = "38vw";
    document.getElementById(div).classList.add("shown");

    for (var i = 0; i < lengthOfFile; i++){
        if (document.getElementById(i).style.top != "75vh" && i != div){
            document.getElementById(div).classList.remove("shown");
            document.getElementById(i).style.top = "75vh";
            document.getElementById(i).style.left = places[i]-places[0]/1000*999+"vw"; // needs the 1k/999 because places[i] on its own jumps over right for some reason
            // document.getElementById(i).style.transition = "all 0.2s";
        }
    }
}
