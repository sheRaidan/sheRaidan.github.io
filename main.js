var page = document.querySelector("body");

fetch("conlangs.json")
.then(data => data.json())
.then(json => {
    json.forEach(lang =>{
        // page.innerHTML += "<div id='"+i+"' onclick='show("+i+")'>"+i+"</div>";
        page.innerHTML += `<div id="${indexOf(lang)}" onclick="show(${indexOf(lang)})">${lang.name}</div>`
        document.getElementById(i).style.left = i*json.length+"vw";
    });
})

// page.innerHTML = "<h1>test</h1>";

// for (var i = 0; i < 10; i++){
//     page.innerHTML += "<div id='"+i+"' onclick='show("+i+")'>"+i+"</div>";
//     document.getElementById(i).style.left = i*10+"vw";
// }

function show(div){
    document.getElementById(div).style.top = "38vh";
    document.getElementById(div).style.left = "45vw";

    // for (var i = 0; i < 10; i++){
    //     // page.innerHTML += "<div id='"+i+"' onclick='show("+i+")'>"+i+"</div>";
    //     if (i != div){
    //         document.getElementById(i).style.left = i*10+"vw";
    //         document.getElementById(i).style.top = "75vh";
    //     }
    // }

    json.forEach(lang =>{
        if (i != div){
            document.getElementById(i).style.left = i*json.length+"vw";
            document.getElementById(i).style.top = "75vh";
        }
    });
}