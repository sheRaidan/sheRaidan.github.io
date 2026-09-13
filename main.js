var page = document.querySelector("body");

fetch("conlangs.json")
.then(data => data.json())
.then(json => {
    json.forEach(lang =>{
        page.innerHTML += `<div id="${indexOf(lang)}" onclick="show(${indexOf(lang)})">${lang.name}</div>`
        document.getElementById(i).style.left = i*json.length+"vw";
    });
})

function show(div){
    document.getElementById(div).style.top = "38vh";
    document.getElementById(div).style.left = "45vw";

    json.forEach(lang =>{
        if (i != div){
            document.getElementById(i).style.left = i*json.length+"vw";
            document.getElementById(i).style.top = "75vh";
        }
    });
}
