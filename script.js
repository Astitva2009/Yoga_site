document.addEventListener('DOMContentLoaded', () =>{
    anime({
        targets:'.logo',
        translateX:[-200,0],
        easing:'easeOutExpo',
        opacity:[0,1],
        duration:1000,
        delay:1000
    })

    anime({
        targets:'.services ',
        translateY:[-200,0],
        easing:'easeOutExpo',
        opacity:[0,1],
        duration:1200,
        delay: (el, i) => {
            return 1100 + 100 * i;
        }
    })

    anime({
        targets:'.hamburger',
        translateY:[-200,0],
        easing:'easeOutExpo',
        opacity:[0,1],
        duration:1200,
        delay: 1000
    })

    anime({
        targets:'.col-1',
        top:40,
        easing:'easeOutExpo',
        opacity:[0,1],
        duration:1200,
        delay: 1000
    })

    anime({
        targets:'.col-2',
        translateX:[200,0],
        easing:'easeOutExpo',
        opacity:[0,1],
        duration:1200,
        delay: 1000
    })

    anime({
        targets:'body',
        opacity:[0.2,2],
        easing:'easeOutExpo',
        duration:1000,
        delay: (el, i) => {
            return 1100 + 100 * i;
        }
    })
    
}) 