const navbar = document.querySelectorAll(".nav__input");
const navigation = document.querySelector("#navbar");
const upBtn =document.querySelector('.upBtn');
const categories = document.querySelector('.work__categories');
const projects = document.querySelectorAll('.work__projects');
const workContainer = document.querySelector('.work__container');

function handleSortWork(e){
    workContainer.classList.remove('clickEvent__in')
    workContainer.classList.add('clickEvent__out');
    setTimeout(()=>{
        workContainer.classList.remove
        workContainer.classList.add('clickEvent__in')
        const target = e.target;
    let filter = target.dataset.filter || target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    projects.forEach(project=>{
        if(filter === "*" || filter === project.dataset.type){
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });
    },300)  
}
function opacityNav(){
    const scrollY = window.scrollY;
    if(scrollY === 0){
        navigation.style.background = "transparent";
    } else {
        navigation.style.background = "rgba(0,0,0,0.8)";
    }
    if(scrollY > 300){
        upBtn.style.opacity = "1";
        upBtn.style.pointerEvents = "auto";
        upBtn.style.cursor = "pointer";
    } else {
        upBtn.style.opacity = "0";
        upBtn.style.pointerEvents = "none";
        upBtn.style.cursor = "auto";
    }
}
function opacityHome() {
    const home = document.querySelector(".home__opacityBox");
    const scrollY = window.scrollY;
    const opacity = 1 - (scrollY / 300);
    home.style.opacity = opacity;
}
function navClickScroll(e){
    const target = e.target;
    const id = target.id;
    if(target.dataset.link === "#home"){
        window.scroll(
            {
                top : 0,
                left : 0,
                behavior : "smooth"
            }
            
            )
        } 
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
            navbar[i].addEventListener("click",navClickScroll);
        }
        window.addEventListener("scroll", skillScroll);
        window.addEventListener("scroll", aboutScroll);
        window.addEventListener("scroll", opacityHome);
        window.addEventListener("scroll", opacityNav);
        upBtn.addEventListener("click",navClickScroll);
        categories.addEventListener('click',handleSortWork);
        