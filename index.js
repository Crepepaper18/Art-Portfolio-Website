document.querySelector(".menuButton").addEventListener("click",function() {
    document.querySelector(".nav").classList.add("navAnimation");
    document.querySelector(".nav").classList.remove("closeAnimation");
    document.body.style.overflow = 'hidden';
})

document.querySelector(".closeButton").addEventListener("click",function() {
    document.querySelector(".nav").classList.add("closeAnimation");
    document.querySelector(".nav").classList.remove("navAnimation");
    document.body.style.overflow = '';
})

document.querySelector(".artGal").addEventListener("click",function() {
    document.querySelector(".nav").classList.add("closeAnimation");
    document.querySelector(".nav").classList.remove("navAnimation");
    document.body.style.overflow = '';
})

document.querySelector(".topBut").addEventListener("click",function (){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
})
