gsap.from(".vertical",{
duration:1,
x:-180,
scrollTrigger:{
  trigger:".page1",
  scroller:"body",
  scrub:2,
  // markers:true,
  start:"top 10%",
  end:"bottom 50%"
}
});

gsap.from(".section2",{
  duration:1,
  opacity:0,
  x:100,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    opacity:1,
    scrub:1,
    // markers:true,
    start:"top 10%",
    end:"bottom 40%"
  }
});

gsap.from(".page2",{
  duration:1,
  opacity:0,
  y:100,
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    scrub:2,
    opacity:1,
    // markers:true,
    start:"top 70%",
    end:"bottom 130%"
  }
});

gsap.from(".page3",{
  duration:1,
  opacity:0,
  y:-100,
  scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    scrub:3,
    opacity:1,
    // markers:true,
    start:"top 80%",
    end:"bottom 100%"
  }
});
gsap.from(".page4",{
  duration:1,
  opacity:0,
  x:-10,
  scrollTrigger:{
    trigger:".page4",
    scroller:"body",
    scrub:1,
    opacity:1,
    // markers:true,
    start:"top 50%",
    end:"bottom 160%"
  }
});

gsap.from("nav",{
  duration:1,
  opacity:0,
  y:-60
});
gsap.from(".right1>img",{
  duration:2,
  opacity:0,
  x:50
});
gsap.to(".left1",{
  duration:2,
  opacity:1,
  x:50
});





// ************page one animation************
var typed = new Typed('#element', {
    strings: ['Web desiner', 'Java programmer', 'software engineer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});

// *************Flickity************
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: "1000"
});