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