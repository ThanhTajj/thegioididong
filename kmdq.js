const addressbtn= document.querySelector('#address-form')
const addressclose= document.querySelector('#address-close')
addressbtn.addEventListener('click',function(){
    document.querySelector('.address-form').style.display="flex"
})
addressclose.addEventListener('click',function(){
    document.querySelector('.address-form').style.display="none"
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

const rightbtnpoc= document.querySelector('#rbtnpoc')
const leftbtnpoc= document.querySelector('#lbtnpoc')
let indexpoc=0;
const imgnumpoc=document.querySelectorAll('.kmdq-main>.dealads:nth-child(2) .product-one-content-items')
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

const xt= document.querySelector('.xt-kmdq')
xt.addEventListener('click',function(){
    document.querySelector('#hide').style.display="block"
    document.querySelector('.xt-kmdq').style.display="none"
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