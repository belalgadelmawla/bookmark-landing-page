let FeaturesText = document.getElementsByClassName("simple");
let MyFeatureH1 =document.querySelector(".features-right h1");
let MyFeaturep =document.querySelector(".features-right p");
let MyFeatureImg =document.querySelector(".features-left img");


FeaturesText[0].addEventListener("click",function() {
    
    MyFeatureH1.innerHTML="Bookmark In One Click";
    MyFeaturep.innerHTML="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    MyFeatureImg.src = "./images/illustration-features-tab-1.svg";
});


FeaturesText[1].addEventListener("click",function() {
    
    MyFeatureH1.innerHTML="intelligent search";
    MyFeaturep.innerHTML="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks";
    MyFeatureImg.src = "./images/illustration-features-tab-2.svg";
}); 
FeaturesText[2].addEventListener("click",function() {
    
    MyFeatureH1.innerHTML="Share your bookmarks";
    MyFeaturep.innerHTML=" Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    MyFeatureImg.src = "./images/illustration-features-tab-3.svg";

});

let MyQuestionDiv = document.getElementsByClassName("text");
let MyQuestionText = document.getElementsByClassName("hidden-text");


MyQuestionDiv[0].onclick =function() {

    if (MyQuestionText[0].style.display=="none") {
        MyQuestionText[0].style.display="block";
    }
    else {
        MyQuestionText[0].style.display="none";
    }
}

MyQuestionDiv[1].onclick =function() {

    if (MyQuestionText[1].style.display=="none") {
        MyQuestionText[1].style.display="block";
    }
    else {
        MyQuestionText[1].style.display="none";
    }
}

MyQuestionDiv[2].onclick =function() {

    if (MyQuestionText[2].style.display=="none") {
        MyQuestionText[2].style.display="block";
    }
    else {
        MyQuestionText[2].style.display="none";
    }
}

MyQuestionDiv[2].onclick =function() {

    if (MyQuestionText[2].style.display=="none") {
        MyQuestionText[2].style.display="block";
    }
    else {
        MyQuestionText[2].style.display="none";
    }
}

MyQuestionDiv[3].onclick =function() {

    if (MyQuestionText[3].style.display=="none") {
        MyQuestionText[3].style.display="block";
    }
    else {
        MyQuestionText[3].style.display="none";
    }
}

function validateForm() {
    let email = document.getElementById("email");
    let alert = document.getElementById("alert");
    let form = document.getElementById("formbox");
    let error = document.getElementById("img");

    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;  

    if (email.value.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        email.style.borderTop = "2px solid hsl(231, 69%, 60%)";
        email.style.borderLeft = "2px solid hsl(231, 69%, 60%)";
        email.style.borderRight = "2px solid hsl(231, 69%, 60%)";
        email.style.borderBottom = "25px solid hsl(231, 69%, 60%)";
        alert.innerHTML = " "; 
        error.style.opacity = "0";
        document.getElementById("formbox").reset(); 
        return true
    }

    else{
        error.style.opacity = "1";
        alert.innerHTML="whoops,make sure it is an email"
        return false
    }
}




