const sections = document.querySelectorAll('section');
const origin = document.location.origin;
const pathname = document.location.pathname;
let slides = [];
let counter = 0;
let ink;

sections.forEach(section => {
    slides.push(section.attributes.id.nodeValue)
})

let slideHandler = (e) => {
    const key = e.key

    // scroll to bottom
    if(key === "ArrowRight" && counter <= slides.length - 1){
        ink = slides[counter]
        if(ink != undefined) {
            document.location.href = origin + pathname + ink
            document.getElementById(ink).scrollIntoView()
        }
        console.log(counter)
        if(counter <= slides.length - 1){
            counter++
        }  
    }
    
    // scroll to top
    if(key === "ArrowLeft" && counter > 0 ){   
        ink = slides[counter - 1]
        if(ink != undefined) {
            document.location.href = origin + pathname + ink
            document.getElementById(ink).scrollIntoView()
        }
        console.log(counter)
        if(counter > 0){
            counter--
        }  

    }

} 
document.addEventListener('keyup', slideHandler, false)