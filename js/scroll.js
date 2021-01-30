const navbar = document.querySelectorAll(".click");
const navInput = document.querySelectorAll('.nav__input');
const navigation = document.querySelector("#navbar");
const upBtn =document.querySelector('.upBtn');
const categories = document.querySelector('.work__categories');
const projects = document.querySelectorAll('.work__projects');
const workContainer = document.querySelector('.work__container');
const sections = document.querySelectorAll('.section');


const homeTop = sections[0].offsetTop;
const aboutTop = sections[1].offsetTop;
const skillsTop = sections[2].offsetTop;
const workTop = sections[3].offsetTop;
const contactTop = sections[4].offsetTop;

function navActivation(){
    console.log(scrollY);
    console.log(navInput)
    if(homeTop <= scrollY <= aboutTop){
        navInput[0].checked = true;
    } else {
        navInput[0].checked = false;
    }
}

function handleSortWork(e){ //work에서 menu 클릭 시 animation
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
function opacityNav(){ //scroll 했을 때 nav의 opacity 추가
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
function opacityHome() { //scroll 했을 때 home의 opacity 감소
    const home = document.querySelector(".home__opacityBox");
    const scrollY = window.scrollY;
    const opacity = 1 - (scrollY / 300);
    home.style.opacity = opacity;
}
function navClickScroll(e){ //해당 nav를 클릭했을 때 scroll 됌
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
function aboutScroll(){ //about이 화면에 들어왔을 때 animation
            if(window.scrollY > 300) {
                const avatar = document.querySelector(".about__contents__avatar");
                const profile = document.querySelector(".about__contents__profile");
                avatar.style.transform = "translateX(0px)"
                avatar.style.opacity = "1";
                profile.style.transform = "translateX(0px)"
                profile.style.opacity = "1";
                
            }
}      
function skillScroll(){ //skills가 화면에 들어왔을 때 animation
            if(window.scrollY > 1300){
                const html = document.querySelector('.skillset__container__gauge__html').style.width = "90%";
                const css = document.querySelector('.skillset__container__gauge__css').style.width = "80%";
                const js = document.querySelector('.skillset__container__gauge__js').style.width = "70%";
                const react = document.querySelector('.skillset__container__gauge__react').style.width = "65%";;
                const ts = document.querySelector('.skillset__container__gauge__ts').style.width = "60%";;
            }
}

window.addEventListener("scroll", navActivation)
window.addEventListener("scroll", skillScroll);
window.addEventListener("scroll", aboutScroll);
window.addEventListener("scroll", opacityHome);
window.addEventListener("scroll", opacityNav);
upBtn.addEventListener("click",navClickScroll);
categories.addEventListener('click',handleSortWork);
for(let i=0; i<5; i++){
    navbar[i].addEventListener("click",navClickScroll);
}
