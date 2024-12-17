function main(){
    
}

function changePage(page){
    let activePage = document.querySelectorAll(".active");
    activePage.forEach(element => {element.classList.remove("active");
    });
    document.getElementById(page).classList.add("active");
    if (document.getElementById("lang").innerText === "toki pona") {
        if (page === "about") {
            document.getElementById("content").innerHTML = about_en;
        }
        else if (page === "socials") {
            document.getElementById("content").innerHTML = socials_en;
        }
        else if (page === "home") {
            document.getElementById("content").innerHTML = home_en;
        }
    }
    if (document.getElementById("lang").innerText === "english") {
        if (page === "about") {
            document.getElementById("content").innerHTML = about_tok;
        }
        else if (page === "socials") {
            document.getElementById("content").innerHTML = socials_tok;
        }
        else if (page === "home") {
            document.getElementById("content").innerHTML = home_tok;
        }
    }
}
function changeLang() {
    switch (document.getElementById("lang").innerText){
        case "english":

            document.getElementById("lang").innerText = "toki pona";
            document.getElementById("title").innerText = "pepe's site";
            document.getElementById("home").innerText = "home";
            document.getElementById("about").innerText = "about";
            document.getElementById("socials").innerText = "socials";
            break;
        case "toki pona":
            document.getElementById("title").innerText = "lipu jan pepe";
            document.getElementById("home").innerText = "tomo";
            document.getElementById("about").innerText = "sona";
            document.getElementById("socials").innerText = "lipu kulupu";
            document.getElementById("lang").innerText = "english";
            break;
    }
    let currentPage = document.getElementsByClassName("active")
    currentPage = currentPage.item(0).id
    changePage(currentPage);
}

let about_en = `
    <h1>hi, i'm pepe!</h1>
    <h3>i'm an autistic nerd with too many obsessions to count</h3><br>
    i like learning languages, messing with computers, programming<br>
    modding consoles, and I use arch btw.
    i'm terrible at writing bios (can you tell?)<br>
    oh, and i'm gay asf
`
let socials_en = ``
let home_en = ``
let about_tok = `
    <h1>toki a! mi jan pepe!</h1>
    <h3>i'm an autistic nerd with too many obsessions to count</h3><br>
    i like learning languages, messing with computers, programming<br>
    modding consoles, and I use arch btw.
    i'm terrible at writing bios (can you tell?)<br>
    oh, and i'm gay asf
`
let socials_tok = ``
let home_tok = ``