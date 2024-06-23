document.querySelector('.stickyads').style.display='none';

const addressbtn= document.querySelector('#address-form')
const addressclose= document.querySelector('#address-close')
addressbtn.addEventListener('click',function(){
    document.querySelector('.address-form').style.display="flex"
})
addressclose.addEventListener('click',function(){
    document.querySelector('.address-form').style.display="none"
})

const rightbtn= document.querySelector('#rbtn')
const leftbtn= document.querySelector('#lbtn')
let index=0;
const imgnum=document.querySelectorAll('.slider-content>div>div')
rightbtn.addEventListener('click',function(){
    index=index+1
    if(index>imgnum.length-1){
        index=0
    }
    document.querySelector(".slider-content").style.right= index*110+"%"
})
leftbtn.addEventListener('click',function(){
    index=index-1
    if(index<=-1){
        index=imgnum.length-1
    }
    document.querySelector('.slider-content').style.right= index*110+"%"
})

const rightbtnh= document.querySelector('#rbtnh')
const leftbtnh= document.querySelector('#lbtnh')
let indexh=0;
const imgnumh=document.querySelectorAll('.header-content>div>div')
rightbtnh.addEventListener('click',function(){
    indexh=indexh+1
    if(indexh>imgnumh.length-1){
        indexh=0
    }
    document.querySelector(".header-content").style.right= indexh*110+"%"
})
leftbtnh.addEventListener('click',function(){
    indexh=indexh-1
    if(indexh<=-1){
        indexh=imgnumh.length-1
    }
    document.querySelector('.header-content').style.right= indexh*110+"%"
})

function imgAuto(){
    index=index+1
    if(index>imgnum.length-1){
        index=0
    }
    document.querySelector(".slider-content").style.right= index*110+"%"
}
setInterval(imgAuto,5000)

document.addEventListener('DOMContentLoaded', () => {
    const countdownElementh = document.querySelector('.slider-product-one>div>.head>p>span:nth-child(1)');
    const countdownElementm = document.querySelector('.slider-product-one>div>.head>p>span:nth-child(2)');
    const countdownElements = document.querySelector('.slider-product-one>div>.head>p>span:nth-child(3)');
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(20);
    targetTime.setMinutes(59);
    targetTime.setSeconds(0);
    if (targetTime <= now) {
        targetTime.setDate(targetTime.getDate() + 1);
    }
    function updateCountdown() {
        const currentTime = new Date();
        const timeRemaining = targetTime - currentTime;
        if (timeRemaining <= 0) {
            countdownElementh.textContent = "00";
            countdownElementm.textContent = "00";
            countdownElements.textContent = "00";
            return;
        }
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        countdownElementh.textContent = `${String(hours).padStart(2, '0')}`;
        countdownElementm.textContent = `${String(minutes).padStart(2, '0')}`;
        countdownElements.textContent = `${String(seconds).padStart(2, '0')}`;
        requestAnimationFrame(updateCountdown);
    }
    updateCountdown();
});

const rightbtnp= document.querySelector('#rbtnp')
const leftbtnp= document.querySelector('#lbtnp')
let indexp=0;
const imgnump=document.querySelectorAll('.main>.slider-product-one-content>.box')
rightbtnp.addEventListener('click',function(){
    indexp=indexp+1
    if(indexp>imgnump.length-1){
        indexp=0
    }
    document.querySelector(".slider-product-one-content").style.right= indexp*100+"%"
})
leftbtnp.addEventListener('click',function(){
    indexp=indexp-1
    if(indexp<=-1){
        indexp=imgnump.length-1
    }
    document.querySelector('.slider-product-one-content').style.right= indexp*100+"%"
})

document.addEventListener("DOMContentLoaded", function() {
    const productItems = document.querySelectorAll('.product-one-content-items');
    const btns = document.querySelectorAll('.product-one-content-btn > i');
    function addHoverEffect() {
        btns.forEach(btn => {
            btn.style.opacity = '0.9';
        });
    }
    function removeHoverEffect() {
        btns.forEach(btn => {
            btn.style.opacity = '0.4';
        });
    }
    productItems.forEach(item => {
        item.addEventListener('mouseenter', addHoverEffect);
        item.addEventListener('mouseleave', removeHoverEffect);
    });
    btns.forEach(btn => {
        btn.addEventListener('mouseenter', addHoverEffect);
        btn.addEventListener('mouseleave', removeHoverEffect);
    });
});

const rightbtnpoc= document.querySelector('#rbtnpoc')
const leftbtnpoc= document.querySelector('#lbtnpoc')
let indexpoc=0;
const imgnumpoc=document.querySelectorAll('body>div>.dealads:nth-child(9) .product-one-content-items')
rightbtnpoc.addEventListener('click',function(){
    indexpoc=indexpoc+1
    if(indexpoc>imgnumpoc.length-1){
        indexpoc=0
    }
    document.querySelector(".product-one-content-items-content").style.right= indexpoc*100+"%"
})
leftbtnpoc.addEventListener('click',function(){
    indexpoc=indexpoc-1
    if(indexpoc<=-1){
        indexpoc=imgnumpoc.length-1
    }
    document.querySelector(".product-one-content-items-content").style.right= indexpoc*100+"%"
})

const rightbtnpoc1= document.querySelector('#rbtnpoc1')
const leftbtnpoc1= document.querySelector('#lbtnpoc1')
let indexpoc1=0;
const imgnumpoc1=document.querySelectorAll('body>div>.dealads:nth-child(10) .product-one-content-items')
rightbtnpoc1.addEventListener('click',function(){
    indexpoc1=indexpoc1+1
    if(indexpoc1>imgnumpoc1.length-1){
        indexpoc1=0
    }
    document.querySelector("body>div>.dealads:nth-child(10) .product-one-content-items-content").style.right= indexpoc1*100+"%"
})
leftbtnpoc1.addEventListener('click',function(){
    indexpoc1=indexpoc1-1
    if(indexpoc1<=-1){
        indexpoc1=imgnumpoc1.length-1
    }
    document.querySelector("body>div>.dealads:nth-child(10) .product-one-content-items-content").style.right= indexpoc1*100+"%"
})

const rightbtnss= document.querySelector('#rbtnss')
const leftbtnss= document.querySelector('#lbtnss')
let indexss=0;
const imgnumss=document.querySelectorAll('.tuanlebox-items')
rightbtnss.addEventListener('click',function(){
    indexss=indexss+1
    if(indexss>imgnumss.length-1){
        indexss=0
    }
    document.querySelector(".tuanlebox-content").style.right= indexss*99.1+"%"
})
leftbtnss.addEventListener('click',function(){
    indexss=indexss-1
    if(indexss<=-1){
        indexss=imgnumss.length-1
    }
    document.querySelector(".tuanlebox-content").style.right= indexss*99.1+"%"
})

function imgAutoss(){
    indexss=indexss+1
    if(indexss>imgnumss.length-1){
        indexss=0
    }
    document.querySelector(".tuanlebox-content").style.right= indexss*99.1+"%"
}
setInterval(imgAutoss,5000)

const rightbtnpoc2= document.querySelector('#rbtnpoc2')
const leftbtnpoc2= document.querySelector('#lbtnpoc2')
let indexpoc2=0;
const imgnumpoc2=document.querySelectorAll('body>div>.dealads:nth-child(12) .product-one-content-items')
rightbtnpoc2.addEventListener('click',function(){
    indexpoc2=indexpoc2+1
    if(indexpoc2>imgnumpoc1.length-1){
        indexpoc2=0
    }
    document.querySelector("body>div>.dealads:nth-child(12) .product-one-content-items-content").style.right= indexpoc2*100+"%"
})
leftbtnpoc2.addEventListener('click',function(){
    indexpoc2=indexpoc2-1
    if(indexpoc2<=-1){
        indexpoc2=imgnumpoc2.length-1
    }
    document.querySelector("body>div>.dealads:nth-child(12) .product-one-content-items-content").style.right= indexpoc2*100+"%"
})

const xemthem= document.querySelector('#xemthem')
xemthem.addEventListener('click',function(){
    document.querySelector('#xemthem').style.display="none"
    const newtext = [
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' },
        { text: 'Tích điểm Quà tặng VIP', href: '' }
    ];
    newtext.forEach(function(link) {
        const newa = document.createElement('a');
        newa.href = link.href;
        newa.textContent = link.text;
        document.querySelector('.col1').appendChild(newa);
    });
})

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;

        if (scrollPosition >= (bodyHeight - windowHeight) * 0.05) {
            document.querySelector('.stickyads').style.display = 'block';
        }
        else{
            document.querySelector('.stickyads').style.display='none';
        }
    });
});