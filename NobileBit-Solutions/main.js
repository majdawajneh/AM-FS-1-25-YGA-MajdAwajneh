

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

window.onscroll = function fixednavbar(){
    let navbar = document.querySelector(".fixed-top");
    if(window.scrollY >= 300){
        navbar.style.backgroundColor = "var(--dusty-Blue-color)";   
    }else{
        navbar.style.backgroundColor = "transparent";
    }

};
let btn = document.getElementById("landbtn");
let output = document.getElementById("output");
let landvid = document.querySelector(".landing");
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            if(btn.clicked === true){
                resolve(output.textContent = "Button Clicked Successfully", output.style.color="green");
            }else{
                reject(output.textContent = "Button Not Clicked");
            }
            
        }, 500);
    });
}

btn.addEventListener("click",async()=>{
    try{
        btn.clicked = true;
        let result = await getdata();
        console.log(result);
    }catch(error){
        console.log("button not clicked");
    }
});

// let tryp = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         window.onscroll = function(){
//             let galio = document.querySelectorAll(".galio");
//             let galio2 = document.querySelectorAll(".galio2");
//             galio.forEach((ele) => {
//                 if(window.scrollY >= ele.offsetTop - 100){
//                     resolve(ele.style.transform = "rotate(360deg)", ele.style.transition = "0.8s");
//                 }else{
//                     reject(ele.style.transform = "rotate(0deg)", ele.style.transition = "0.3s");
//                 }          
//             });
//             galio2.forEach((ele) => {
//                 if(window.scrollY >= ele.offsetTop - 100){
//                     resolve(ele.style.transform = "rotate(360deg)", ele.style.transition = "0.8s");
//                 }else{
//                     reject(ele.style.transform = "rotate(0deg)", ele.style.transition = "0.3s");
//                 }
//             });
//     }, 1000});
// });