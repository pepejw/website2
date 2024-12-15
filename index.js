function main(){
    
}
function changePage(page){
    let activePage = document.querySelectorAll(".active");
    activePage.forEach(element => {element.classList.remove("active");
    document.getElementById(page).classList.add("active");
    });
}
function changeLang(lang) {
    
}