let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
let cancel = document.getElementById("cancel");
let body = document.querySelector("body");
let save = document.getElementById("save");
let about = document.getElementById("about");
let hidden1 = document.getElementById("hidden1");
let hidden2 = document.getElementById("hidden2");
let chev1 = document.getElementById("chev1");
let chev2 = document.getElementById("chev2");

menuBtn.addEventListener("click", function(){
    menu.style.left = "0";
})

cancel.addEventListener("click", function(){
    menu.style.left = "-620px";
})

let count2 = 0;
about.addEventListener("click", function(){

    count2++;
    if(count2%2!=0){
        chev1.setAttribute("src" , "/Images//icons8-chevron-up-50.png");
        hidden1.style.opacity = "100";
        hidden1.style.display = "flex";
        hidden1.style.justify-content ; "space-between";
    } else{
        hidden1.style.opacity = "0";
        hidden1.style.display = "none";
        chev1.setAttribute("src" , "/Images/icons8-chevron-down-50.png");
    }
    
})

let count = 0;
save.addEventListener("click", function(){
    count++;
    if(count%2!=0){
        hidden2.style.display = "block";
        chev2.setAttribute("src" , "/Images//icons8-chevron-up-50.png")
    } else{
        hidden2.style.display = "none";
        chev2.setAttribute("src" , "/Images/icons8-chevron-down-50.png")
    }
})


