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
const imgnumpoc=document.querySelectorAll('.slider-content-left-top-dt img')
rightbtnpoc.addEventListener('click',function(){
    indexpoc=indexpoc+1
    if(indexpoc>imgnumpoc.length-1){
        indexpoc=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top-dt").style.right= indexpoc*100+"%"
    imgnumdot[indexpoc].classList.add("active")
})
leftbtnpoc.addEventListener('click',function(){
    indexpoc=indexpoc-1
    if(indexpoc<=-1){
        indexpoc=imgnumpoc.length-1
    }
    removeactive()
    document.querySelector(".slider-content-left-top-dt").style.right= indexpoc*100+"%"
    imgnumdot[indexpoc].classList.add("active")
})

const imgnumdot = document.querySelectorAll('.dot')
imgnumdot.forEach(function(image,indexpoc){
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top-dt").style.right= indexpoc*100+"%"
        image.classList.add("active")
    })
})

function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
};

const bolocbtn= document.querySelector('#bolocbtn')
bolocbtn.addEventListener('click', function() {
    if (document.querySelector('.boloc-form').style.display === "none" || document.querySelector('.boloc-form').style.display === "") {
        document.querySelector('.boloc-form').style.display="flex"
        document.querySelector('.boloc-form>i').style.display="flex"
        bolocbtn.style.borderColor = "rgb(0, 183, 255)"
        document.querySelector('.hang-form').style.display="none"
        document.querySelector('.ram-form').style.display="none"
        document.querySelector('.nhucau-form').style.display="none"
        document.querySelector('.type-form').style.display="none"
        document.querySelector('.price-form').style.display="none"
        hangbtn.style.borderColor = "gainsboro"
        pricebtn.style.borderColor = "gainsboro"
        typebtn.style.borderColor = "gainsboro"
        nhucaubtn1.style.borderColor = "gainsboro"
        rambtn1.style.borderColor = "gainsboro"
        document.querySelector('#hang>i').style.transform = 'rotate(0deg)'
        document.querySelector('#rambtn1>i').style.transform = 'rotate(0deg)'
        document.querySelector('#nhucaubtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#typebtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#price>i').style.transform = 'rotate(0deg)'
    } else {
        document.querySelector('.boloc-form').style.display="none"
        document.querySelector('.boloc-form>i').style.display="none"
        bolocbtn.style.borderColor = "gainsboro"
    }
});

const bolocclose= document.querySelector('#boloc-close')
bolocclose.addEventListener('click',function(){
    document.querySelector('.boloc-form').style.display="none"
    document.querySelector('.boloc-form>i').style.display="none"
    bolocbtn.style.borderColor = "gainsboro"
})

const pricechoicebtn= document.querySelector('.price-choice')
let indexprice=1;
pricechoicebtn.addEventListener('click',function(){
    indexprice+=1;
    if(indexprice%2!=0){
        document.querySelector('.price-input').style.display="flex"
        document.querySelector('.range-slider').style.display="block"
        document.querySelector('.range-input').style.display="block"
        document.querySelector('#caretchoice').style.transform = 'rotate(0deg)'
    }else{
        document.querySelector('.price-input').style.display="none"
        document.querySelector('.range-slider').style.display="none"
        document.querySelector('.range-input').style.display="none"
        document.querySelector('#caretchoice').style.transform = 'rotate(180deg)'
    }
})

const nhucaubtn= document.querySelector('.timhieu')
let indexnhucau=0;
nhucaubtn.addEventListener('click',function(){
    indexnhucau+=1;
    if(indexnhucau%2!=0){
        document.querySelector('.infoplus').style.display="block"
        document.querySelector('#inhucau').style.transform = 'rotate(180deg)'
    }else{
        document.querySelector('.infoplus').style.display="none"
        document.querySelector('#inhucau').style.transform = 'rotate(0deg)'
    }
})

const rambtn= document.querySelector('.timhieuRAM')
let indexram=0;
rambtn.addEventListener('click',function(){
    indexram+=1;
    if(indexram%2!=0){
        document.querySelector('.info-ram').style.display="block"
        document.querySelector('#iram').style.transform = 'rotate(180deg)'
    }else{
        document.querySelector('.info-ram').style.display="none"
        document.querySelector('#iram').style.transform = 'rotate(0deg)'
    }
})

const hangbtn= document.querySelector('#hang')
hangbtn.addEventListener('click', function() {
    if (document.querySelector('.hang-form').style.display === "none" || document.querySelector('.hang-form').style.display === "") {
        document.querySelector('.hang-form').style.display="block"
        document.querySelector('#hang>i').style.transform = 'rotate(180deg)'
        hangbtn.style.borderColor = "rgb(0, 183, 255)"
        document.querySelector('.boloc-form').style.display="none"
        document.querySelector('.ram-form').style.display="none"
        document.querySelector('.nhucau-form').style.display="none"
        document.querySelector('.type-form').style.display="none"
        document.querySelector('.price-form').style.display="none"
        document.querySelector('.boloc-form>i').style.display="none"
        bolocbtn.style.borderColor = "gainsboro"
        pricebtn.style.borderColor = "gainsboro"
        typebtn.style.borderColor = "gainsboro"
        nhucaubtn1.style.borderColor = "gainsboro"
        rambtn1.style.borderColor = "gainsboro"
        document.querySelector('#rambtn1>i').style.transform = 'rotate(0deg)'
        document.querySelector('#nhucaubtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#typebtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#price>i').style.transform = 'rotate(0deg)'
    } else {
        document.querySelector('.hang-form').style.display="none"
        document.querySelector('#hang>i').style.transform = 'rotate(0deg)'
        hangbtn.style.borderColor = "gainsboro"
    }
});

const pricebtn= document.querySelector('#price')
pricebtn.addEventListener('click', function() {
    if (document.querySelector('.price-form').style.display === "none" || document.querySelector('.price-form').style.display === "") {
        document.querySelector('.price-form').style.display="block"
        document.querySelector('#price>i').style.transform = 'rotate(180deg)';
        pricebtn.style.borderColor = "rgb(0, 183, 255)"
        document.querySelector('.boloc-form').style.display="none"
        document.querySelector('.hang-form').style.display="none"
        document.querySelector('.ram-form').style.display="none"
        document.querySelector('.nhucau-form').style.display="none"
        document.querySelector('.type-form').style.display="none"
        document.querySelector('.boloc-form>i').style.display="none"
        bolocbtn.style.borderColor = "gainsboro"
        hangbtn.style.borderColor = "gainsboro"
        typebtn.style.borderColor = "gainsboro"
        nhucaubtn1.style.borderColor = "gainsboro"
        rambtn1.style.borderColor = "gainsboro"
        document.querySelector('#hang>i').style.transform = 'rotate(0deg)'
        document.querySelector('#rambtn1>i').style.transform = 'rotate(0deg)'
        document.querySelector('#nhucaubtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#typebtn>i').style.transform = 'rotate(0deg)'
    } else {
        document.querySelector('.price-form').style.display="none"
        document.querySelector('#price>i').style.transform = 'rotate(0deg)'
        pricebtn.style.borderColor = "gainsboro"
    }
});

const typebtn= document.querySelector('#typebtn')
typebtn.addEventListener('click', function() {
    if (document.querySelector('.type-form').style.display === "none" || document.querySelector('.type-form').style.display === "") {
        document.querySelector('.type-form').style.display="block"
        document.querySelector('#typebtn>i').style.transform = 'rotate(180deg)';
        typebtn.style.borderColor = "rgb(0, 183, 255)"
        document.querySelector('.boloc-form').style.display="none"
        document.querySelector('.hang-form').style.display="none"
        document.querySelector('.ram-form').style.display="none"
        document.querySelector('.nhucau-form').style.display="none"
        document.querySelector('.price-form').style.display="none"
        document.querySelector('.boloc-form>i').style.display="none"
        bolocbtn.style.borderColor = "gainsboro"
        hangbtn.style.borderColor = "gainsboro"
        pricebtn.style.borderColor = "gainsboro"
        nhucaubtn1.style.borderColor = "gainsboro"
        rambtn1.style.borderColor = "gainsboro"
        document.querySelector('#hang>i').style.transform = 'rotate(0deg)'
        document.querySelector('#rambtn1>i').style.transform = 'rotate(0deg)'
        document.querySelector('#nhucaubtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#price>i').style.transform = 'rotate(0deg)'
    } else {
        document.querySelector('.type-form').style.display="none"
        document.querySelector('#typebtn>i').style.transform = 'rotate(0deg)'
        typebtn.style.borderColor = "gainsboro"
    }
});

const nhucaubtn1= document.querySelector('#nhucaubtn')
nhucaubtn1.addEventListener('click', function() {
    if (document.querySelector('.nhucau-form').style.display === "none" || document.querySelector('.nhucau-form').style.display === "") {
        document.querySelector('.nhucau-form').style.display="block"
        document.querySelector('#nhucaubtn>i').style.transform = 'rotate(180deg)';
        nhucaubtn1.style.borderColor = "rgb(0, 183, 255)"
        document.querySelector('.boloc-form').style.display="none"
        document.querySelector('.hang-form').style.display="none"
        document.querySelector('.ram-form').style.display="none"
        document.querySelector('.type-form').style.display="none"
        document.querySelector('.price-form').style.display="none"
        document.querySelector('.boloc-form>i').style.display="none"
        bolocbtn.style.borderColor = "gainsboro"
        hangbtn.style.borderColor = "gainsboro"
        pricebtn.style.borderColor = "gainsboro"
        typebtn.style.borderColor = "gainsboro"
        rambtn1.style.borderColor = "gainsboro"
        document.querySelector('#hang>i').style.transform = 'rotate(0deg)'
        document.querySelector('#rambtn1>i').style.transform = 'rotate(0deg)'
        document.querySelector('#typebtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#price>i').style.transform = 'rotate(0deg)'
    } else {
        document.querySelector('.nhucau-form').style.display="none"
        document.querySelector('#nhucaubtn>i').style.transform = 'rotate(0deg)'
        nhucaubtn1.style.borderColor = "gainsboro"
    }
});

const nhucaubtni= document.querySelector('.nhucau-form>.nhucau>div>.timhieu')
let indexnhucaui=0;
nhucaubtni.addEventListener('click',function(){
    indexnhucaui+=1;
    if(indexnhucaui%2!=0){
        document.querySelector('.nhucau-form>.nhucau>div>.infoplus').style.display="block"
        document.querySelector('.nhucau-form>.nhucau>div>.timhieu>#inhucau').style.transform = 'rotate(180deg)'
    }else{
        document.querySelector('.nhucau-form>.nhucau>div>.infoplus').style.display="none"
        document.querySelector('.nhucau-form>.nhucau>div>.timhieu>#inhucau').style.transform = 'rotate(0deg)'
    }
})

const rambtn1= document.querySelector('#rambtn1')
rambtn1.addEventListener('click', function() {
    if (document.querySelector('.ram-form').style.display === "none" || document.querySelector('.ram-form').style.display === "") {
        document.querySelector('.ram-form').style.display="block"
        document.querySelector('#rambtn1>i').style.transform = 'rotate(180deg)';
        rambtn1.style.borderColor = "rgb(0, 183, 255)"
        document.querySelector('.boloc-form').style.display="none"
        document.querySelector('.hang-form').style.display="none"
        document.querySelector('.nhucau-form').style.display="none"
        document.querySelector('.type-form').style.display="none"
        document.querySelector('.price-form').style.display="none"
        document.querySelector('.boloc-form>i').style.display="none"
        bolocbtn.style.borderColor = "gainsboro"
        hangbtn.style.borderColor = "gainsboro"
        pricebtn.style.borderColor = "gainsboro"
        typebtn.style.borderColor = "gainsboro"
        nhucaubtn1.style.borderColor = "gainsboro"
        document.querySelector('#hang>i').style.transform = 'rotate(0deg)'
        document.querySelector('#nhucaubtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#typebtn>i').style.transform = 'rotate(0deg)'
        document.querySelector('#price>i').style.transform = 'rotate(0deg)'
    }else{
        document.querySelector('.ram-form').style.display="none"
        document.querySelector('#rambtn1>i').style.transform = 'rotate(0deg)'
        rambtn1.style.borderColor = "gainsboro"
    }
});

const rambtni= document.querySelector('.ram-form>.ram>.timhieuRAM')
let indexrami=0;
rambtni.addEventListener('click',function(){
    indexrami+=1;
    if(indexrami%2!=0){
        document.querySelector('.ram-form>.ram>.info-ram').style.display="block"
        document.querySelector('.ram-form>.ram>.timhieuRAM>#iram').style.transform = 'rotate(180deg)'
    }else{
        document.querySelector('.ram-form>.ram>.info-ram').style.display="none"
        document.querySelector('.ram-form>.ram>.timhieuRAM>#iram').style.transform = 'rotate(0deg)'
    }
})

const iplusbtn= document.querySelector('#iplusbtn')
let indexiplus=0;
iplusbtn.addEventListener('click',function(){
    indexiplus+=1;
    if(indexiplus%2!=0){
        document.querySelector('#iplus').style.display="block"
        document.querySelector('#iplusbtn>i').style.transform = 'rotate(180deg)'
    }else{
        document.querySelector('#iplus').style.display="none"
        document.querySelector('#iplusbtn>i').style.transform = 'rotate(0deg)'
    }
})

const xt= document.querySelector('.xt-kmdq')
xt.addEventListener('click',function(){
    document.querySelector('#hide').style.display="block"
    document.querySelector('.xt-kmdq').style.display="none"
})

const xep= document.querySelector('.xep>p')
let indexxep=0;
xep.addEventListener('click',function(){
    indexxep+=1;
    if(indexxep%2!=0){
        document.querySelector('.xep>div').style.display="flex"
    }else{
        document.querySelector('.xep>div').style.display="none"
    }
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