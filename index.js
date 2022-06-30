btn = document.querySelector("button");

btn.addEventListener("click", function(e){
    var fname = document.querySelector("#fname");
    var lname = document.querySelector("#lname");
    var email = document.querySelector("#email");
    var ps = document.querySelector("#password");
    if(fname.value === ""){
        fname.classList.add("error");
    }
    else{
        fname.classList.remove("error");
    }
    if(lname.value === ""){
        lname.classList.add("error");
    }
    else{
        lname.classList.remove("error");
    }
    if(email.value === ""){
        email.classList.add("error");
    }
    else{
        email.classList.remove("error");
    }
    if(ps.value === ""){
        ps.classList.add("error");
    }
    else{
        ps.classList.remove("error");
    }
})