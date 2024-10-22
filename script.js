let slide__one=document.getElementById('slide__one');
let slide__two=document.getElementById('slide__two');

gsap.to(slide__one,{
    width:'65vw',
    duration:2.5,
    ease: "power4.out",
    scrollTrigger:{
        trigger:slide__one,
        scroller:'body',
        scrub:true,
        start:'66% 45%',
        end:'top -15%',
        // markers:true
    }

},'a')

gsap.to(slide__two,{
    width:'100vw',
    duration:2.5,
ease: "power4.out",
    scrollTrigger:{
        trigger:slide__two,
        scroller:'body',
        scrub:true,
        start:'20% 95%',
        end:'top 45%',
        markers:true
    }

},'a')