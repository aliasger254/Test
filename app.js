const heroImg = document.querySelector('.hero-img');
const slider = document.querySelector('.slider');
const hedline = document.querySelector('.hedline');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const flyoutMenu = document.querySelector('.flyout-menu');
const flyoutMenuclose = document.querySelector('.close');
const flyoutMenuNav = document.querySelector('.flyout-menu-inner');

const tl = new TimelineMax();

tl.fromTo(heroImg, 1, {height:'0%'}, {height:'100%',width:'80%', ease: Power2.easeInOut})
.fromTo(slider, 1, {x:'-100%'}, {x:'0%', ease: Power2.easeInOut})
.fromTo(logo, .5, {x:'30%',opacity:0}, {x:'0%',opacity:1, ease: Power2.easeInOut})
.fromTo(menu, .5, {x:'-30%',opacity:0,}, {x:'0%', opacity:1, ease: Power2.easeInOut},"+=")
.fromTo(hedline, 1, {css:{scale:0, opacity:0,}}, {css:{scale:1, opacity:1,}, ease: Power2.easeInOut});


function openMenu(){
    tl.fromTo(flyoutMenu, 1, {left:'-100%',display:'flex'}, {left:'0%', ease: Power2.easeInOut})
    tl.fromTo(flyoutMenuNav, .5, {scale:'0'}, {scale:'1', ease: Power2.easeInOut})
    tl.fromTo(flyoutMenuclose, .5, {scale:'0'}, {scale:'1', ease: Power2.easeInOut},"==");
}

function closeMenu(){
    tl.fromTo(flyoutMenuNav, .5, {scale:'1'}, {scale:'0', ease: Power2.easeInOut})
    tl.fromTo(flyoutMenuclose, .5, {scale:'1'}, {scale:'0', ease: Power2.easeInOut},"==")
    tl.fromTo(flyoutMenu, 1, {left:'0%'}, {left:'-100%', ease: Power2.easeInOut});
}