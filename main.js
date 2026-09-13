var page = document.querySelector("body");

fetch("conlangs.json")
.then(data => data.json())
.then(json => {
    var num = 0;
    json.forEach(lang =>{
        page.innerHTML += `<div id="${num}" onclick="show(${num})">${lang.name}</div>`
        document.getElementById(num).style.left = num*json.length+"vw";
        num++;
    });
})

function show(div){
    document.getElementById(div).style.top = "38vh";
    document.getElementById(div).style.left = "45vw";

    var num = 0;
    json.forEach(lang =>{
        if (num != div){
            document.getElementById(num).style.left = num*json.length+"vw";
            document.getElementById(num).style.top = "75vh";
            num++;
        }
    });
}
