var NavPhone = document.getElementById("NavPhone")
var Page_1 = document.getElementById("Page_1")

function Open_Close(){
   
    if(NavPhone.style.display == "none"){
        NavPhone.style.display = "block"
        // Page_1.style.display = "none"
    }

    else{
        NavPhone.style.display = "none"
        Page_1.style.display = "block"
    }



}

window.addEventListener("DOMContentLoaded" , ()=>{

    NavPhone.style.display = "none"
    console.log("Dassads")

})
