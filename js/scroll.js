const navbar = document.querySelectorAll(".nav__input");

function automaticChange() {
    
}
function navClick(e){
 const target = e.target;
 const link = target.dataset.link;
 const scrollTo = document.querySelector(link);
 scrollTo.scrollIntoView(
     {behavior : "smooth"}
 );

}

function aboutScroll(){
    if(window.scrollY > 300) {
        const avatar = document.querySelector(".about__contents__avatar");
        const profile = document.querySelector(".about__contents__profile");
        avatar.style.transform = "translateX(0px)"
        avatar.style.opacity = "1";
        profile.style.transform = "translateX(0px)"
        profile.style.opacity = "1";
        
    }
}

function skillScroll(){
    if(window.scrollY > 1300){
        const html = document.querySelector('.skillset__container__gauge__html').style.width = "90%";
        const css = document.querySelector('.skillset__container__gauge__css').style.width = "80%";
        const js = document.querySelector('.skillset__container__gauge__js').style.width = "70%";
        const react = document.querySelector('.skillset__container__gauge__react').style.width = "65%";;
        const ts = document.querySelector('.skillset__container__gauge__ts').style.width = "60%";;
    }
}


for(let i=0; i<5; i++){
    navbar[i].addEventListener("click",navClick);
}
window.addEventListener("scroll", skillScroll);
window.addEventListener("scroll", aboutScroll);
window.addEventListener("scroll",automaticChange);