function main(){
    
}
function changePage(page){
    let activePage = document.querySelectorAll(".active");
    activePage.forEach(element => {element.classList.remove("active");
    document.getElementById(page).classList.add("active");
    });
}
function changeLang() {
    switch (document.getElementById("lang").innerText){
        case "english":
            document.getElementById("title").innerText = "pepe's site"
            document.getElementById("home").innerText = "home"
            document.getElementById("about").innerText = "about"
            document.getElementById("socials").innerText = "socials"
            document.getElementById("lang").innerText = "toki pona";
            break;
        case "toki pona":
            document.getElementById("title").innerText = "lipu jan pepe"
            document.getElementById("home").innerText = "tomo"
            document.getElementById("about").innerText = "sona"
            document.getElementById("socials").innerText = "lipu kulupu"
            document.getElementById("lang").innerText = "english";
            break;
    }
}

let about_en = `
<h2>Hi, I'm Pepe</h2>


`