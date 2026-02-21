

        //    go to stuff on click

document.getElementById("aboutus").addEventListener("click",function tostuff(){
    document.getElementById("stuff").scrollIntoView({
        behavior: "smooth"
    });
});


        //    go to pricing on click

document.getElementById("pric").addEventListener("click", function topricing(){
    document.getElementById("pricing").scrollIntoView({
        behavior: "smooth"
    });
});

        //    go to features on click

document.getElementById("serv").addEventListener("click",function toservices(){
    document.getElementById("services").scrollIntoView({
        behavior : "smooth"
    });
});

        //    go to gallery on click

document.getElementById("galle").addEventListener("click",function togallery(){
    document.getElementById("galler").scrollIntoView({
        behavior : "smooth"
    });
});


        // go to ourClients on click

document.getElementById("ourclients").addEventListener("click",function toourclients(){
    document.getElementById("ourclientsid").scrollIntoView({
        behavior : "smooth"
    });
});

        //  go to FAQ Section on click

document.getElementById("FAQ").addEventListener("click",function tofaq(){
    document.getElementById("FAQ-section").scrollIntoView({
        behavior : "smooth"
    });
});


        //   Here Is the first time i make event in JS and i made it on Features Logo❤️
let features = document.querySelector(".features");
let features_p = document.querySelectorAll(".features img");

window.onscroll = function(){
    if(window.scrollY >= features.offsetTop - 100){
        features_p.forEach((ele) => {
            ele.style.width = "250px";
            ele.style.height = "230px";
            ele.style.transition = "0.4s";

        });
    }else{
        features_p.forEach((ele) => {
            ele.style.width = "145px";
            ele.style.height = "130px";
            ele.style.transition = "0.4s";
        })

    }
};

window.onscroll = function fixednavbar() {
    const navbar = document.querySelector(".fixed-top");
    const scrollY = window.scrollY;
    
    // تحديد اللون بناءً على position التمرير
    let bgColor, textColor;
    
    if (scrollY >= 2900) {
        bgColor = "var(--dusty-Blue-color)";
        textColor = "white";
    } else if (scrollY >= 2000) {
        bgColor = "var(--Buttercream-color)";
        textColor = "var(--dusty-Blue-color)";
    } else if (scrollY >= 300) {
        bgColor = "var(--dusty-Blue-color)";
        textColor = "white";
    } else {
        bgColor = "transparent";
        textColor = "white";
    }
    
    // تطبيق الألوان
    navbar.style.backgroundColor = bgColor;
    document.querySelector(".navbar-brand-name").style.color = textColor;
    
    // تغيير لون جميع روابط القائمة
    const navLinks = ["home", "aboutus", "pric", "blog", "serv", "galle", "ourclients", "FAQ", "contact"];
    navLinks.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.color = textColor;
    });
};

