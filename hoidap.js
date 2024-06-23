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

const dangnhapbtn= document.querySelector('#dangnhap-form')
const dangnhapclose= document.querySelector('#dangnhap-close')
dangnhapbtn.addEventListener('click',function(){
    document.querySelector('.dangnhap').style.display="flex"
})
dangnhapclose.addEventListener('click',function(){
    document.querySelector('.dangnhap').style.display="none"
})

const androidbtn = document.querySelector('.cdnb-left>a');
androidbtn.addEventListener('click', function() {
    const dsspElement = document.querySelector('.dssp');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "flex";
    } else {
        dsspElement.style.display = "none";
    }
});

const androidbtn1 = document.querySelector('.cdnb-left>a:nth-child(4)');
androidbtn1.addEventListener('click', function() {
    const dsspElement = document.querySelector('.cdnb-left>div:nth-child(5)');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "flex";
    } else {
        dsspElement.style.display = "none";
    }
});

const androidbtn2 = document.querySelector('.cdnb-left>a:nth-child(6)');
androidbtn2.addEventListener('click', function() {
    const dsspElement = document.querySelector('.cdnb-left>div:nth-child(7)');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "flex";
    } else {
        dsspElement.style.display = "none";
    }
});

const androidbtn3 = document.querySelector('.cdnb-left>a:nth-child(8)');
androidbtn3.addEventListener('click', function() {
    const dsspElement = document.querySelector('.cdnb-left>div:nth-child(9)');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "flex";
    } else {
        dsspElement.style.display = "none";
    }
});

const androidbtn4 = document.querySelector('.cdnb-left>a:nth-child(10)');
androidbtn4.addEventListener('click', function() {
    const dsspElement = document.querySelector('.cdnb-left>div:nth-child(11)');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "flex";
    } else {
        dsspElement.style.display = "none";
    }
});

const androidbtn5 = document.querySelector('.cdnb-left>a:nth-child(12)');
androidbtn5.addEventListener('click', function() {
    const dsspElement = document.querySelector('.cdnb-left>div:nth-child(13)');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "flex";
    } else {
        dsspElement.style.display = "none";
    }
});

const androidbtn6 = document.querySelector('.cdnb-left>a:nth-child(14)');
androidbtn6.addEventListener('click', function() {
    const dsspElement = document.querySelector('.cdnb-left>div:nth-child(15)');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "flex";
    } else {
        dsspElement.style.display = "none";
    }
});

let index = 0;
const imgnum1 = document.querySelectorAll('.slider1-content-img a');
function imgAuto() {
    index = (index + 1) % imgnum1.length;
    removeactive();
    document.querySelector(".slider1-content-img").style.right = index * 100 + "%";
    imgnum2[index].classList.add("active");
}
setInterval(imgAuto, 5000);

const imgnum2 = document.querySelectorAll('.dot');
imgnum2.forEach(function(image, index){
    image.addEventListener("click",function(){
        removeactive();
        document.querySelector(".slider1-content-img").style.right = index * 100 + "%";
        image.classList.add("active");
    })
})

function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}

const xt= document.querySelector('.xt-hd')
xt.addEventListener('click',function(){
    document.querySelector('.cdnb-right-news>a:nth-child(12)').style.display="flex"
    document.querySelector('.cdnb-right-news>a:nth-child(13)').style.display="flex"
    document.querySelector('.cdnb-right-news>a:nth-child(14)').style.display="flex"
    document.querySelector('.cdnb-right-news>a:nth-child(15)').style.display="flex"
    document.querySelector('.cdnb-right-news>a:nth-child(16)').style.display="flex"
    document.querySelector('.xt-hd').style.display="none"
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