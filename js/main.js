const title = document.querySelector('.home__title');
const menu = document.querySelector('.navbar__menu');
const menuBar = document.querySelector('.navbar__menubar');
let mainTitle = "프론트엔드 개발자 신준일입니다.";
let i = 0;
function putTitle(){
    if(i < mainTitle.length){
        title.innerHTML += mainTitle[i];
        i++;
        setTimeout(putTitle,100);
    }
}


putTitle();

let toggle = true;
    const handleChange = () =>{
        if(toggle === false){
            if(window.innerWidth > 768){
                const menu = document.querySelector('.navbar__menu');
                menu.style.transform = "translateX(0px)";
            }else {
                const menu = document.querySelector('.navbar__menu');
                menu.style.transform = "translateX(-100px)";
            }
            console.log("")
        }

    }


const handleClick = () => {
    if(toggle === true){
        const menu = document.querySelector('.navbar__menu');
        menu.style.transform = "translateX(-100px)"
        toggle = false;
    } else {
        const menu = document.querySelector('.navbar__menu');
        menu.style.transform = "translateX(0)"
        toggle = true;
    }
}


menuBar.addEventListener("click", handleClick);
window.addEventListener("resize", handleChange);