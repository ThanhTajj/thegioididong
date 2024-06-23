document.querySelector('.tnn-menu').style.display='none';
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;

        if (scrollPosition >= (bodyHeight - windowHeight) * 0.1) {
            document.querySelector('.tnn-menu').style.display = 'flex';
        }
        else{
            document.querySelector('.tnn-menu').style.display='none';
        }
    });
});

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

const tnnbtn = document.querySelector('.dchtst>div>div>p');
tnnbtn.addEventListener('click', function() {
    const dsspElement = document.querySelector('.dchtst>div>div>i:last-child');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "block";
        document.querySelector('.dchtst>div>div:last-child>i:last-child').style.display = "none";
        document.querySelector('.dchtst>div>div:last-child>div').style.display = "none";
    } else {
        dsspElement.style.display = "none";
    }
    const dsspElement1 = document.querySelector('.dchtst>div>div>div');
    if (dsspElement1.style.display === "none" || dsspElement1.style.display === "") {
        dsspElement1.style.display = "block";
    } else {
        dsspElement1.style.display = "none";
    }
});

const tnnbtn1 = document.querySelector('.dchtst>div>div:last-child>p');
tnnbtn1.addEventListener('click', function() {
    const dsspElement = document.querySelector('.dchtst>div>div:last-child>i:last-child');
    const dsspElement1 = document.querySelector('.dchtst>div>div:last-child>div');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "block";
        document.querySelector('.dchtst>div>div>div').style.display = "none";
        document.querySelector('.dchtst>div>div>i:last-child').style.display = "none";
    } else {
        dsspElement.style.display = "none";
    }
    if (dsspElement1.style.display === "none" || dsspElement1.style.display === "") {
        dsspElement1.style.display = "block";
    } else {
        dsspElement1.style.display = "none";
    }
});

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