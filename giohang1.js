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

const androidbtn = document.querySelector('.giohang1>div>div:last-child>div:nth-child(2)>p>span');
androidbtn.addEventListener('click', function() {
    const dsspElement = document.querySelector('.chs');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "block";
    } else {
        dsspElement.style.display = "none";
    }
});

const androidbtn1 = document.querySelector('.km>a:first-child');
androidbtn1.addEventListener('click', function() {
    document.querySelector('.km>a:first-child').style.display = "none";
    document.querySelector('.km>ul').style.display = "block";
    document.querySelector('.km>a:last-child').style.display = "block";
});

const androidbtn2 = document.querySelector('.km>a:last-child');
androidbtn2.addEventListener('click', function() {
    document.querySelector('.km>a:first-child').style.display = "block";
    document.querySelector('.km>ul').style.display = "none";
    document.querySelector('.km>a:last-child').style.display = "none";
});

const soluong1 = document.querySelector('#minum');
soluong1.addEventListener('click', function() {
    const dsspElement = document.querySelector('#sl');
    const dsspElement1 = document.querySelector('#plus');
    const dsspElement2 = document.querySelector('.tamtinh>p:first-child>span');
    const dsspElement3 = document.querySelector('.tamtinh>p:last-child>span');
    const dsspElement4 = document.querySelector('.tongtien>p:last-child>span');
    soluong1.style.color="black";
    dsspElement1.style.color="rgb(0, 183, 255)"
    dsspElement.textContent='1';
    dsspElement2.textContent='1';
    dsspElement3.textContent='410.000';
    dsspElement4.textContent='410.000';
});

const soluong = document.querySelector('#plus');
soluong.addEventListener('click', function() {
    const dsspElement = document.querySelector('#sl');
    const dsspElement1 = document.querySelector('#minum');
    const dsspElement2 = document.querySelector('.tamtinh>p:first-child>span');
    const dsspElement3 = document.querySelector('.tamtinh>p:last-child>span');
    const dsspElement4 = document.querySelector('.tongtien>p:last-child>span');
    soluong.style.color="black";
    dsspElement1.style.color="rgb(0, 183, 255)"
    dsspElement.textContent='2';
    dsspElement2.textContent='2';
    dsspElement3.textContent='820.000';
    dsspElement4.textContent='820.000';
});

const tnnbtn = document.querySelector('.dchtst>div>div>p');
tnnbtn.addEventListener('click', function() {
    const dsspElement = document.querySelector('.dchtst>div>div>i:last-child');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "block";
        document.querySelector('.dchtst>div>div:last-child>i:last-child').style.display = "none";
        document.querySelector('.dchtst>div>div:last-child>div').style.display = "none";
        document.querySelector('.phgxa>i:last-child').style.display = "none";
        document.querySelector('.phgxa>div').style.display = "none";
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
        document.querySelector('.phgxa>i:last-child').style.display = "none";
        document.querySelector('.phgxa>div').style.display = "none";
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

const tnnbtn2 = document.querySelector('.phgxa>p');
tnnbtn2.addEventListener('click', function() {
    const dsspElement = document.querySelector('.phgxa>i:last-child');
    const dsspElement1 = document.querySelector('.phgxa>div');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "block";
        document.querySelector('.dchtst>div>div>div').style.display = "none";
        document.querySelector('.dchtst>div>div>i:last-child').style.display = "none";
        document.querySelector('.dchtst>div>div:last-child>i:last-child').style.display = "none";
        document.querySelector('.dchtst>div>div:last-child>div').style.display = "none";
    } else {
        dsspElement.style.display = "none";
    }
    if (dsspElement1.style.display === "none" || dsspElement1.style.display === "") {
        dsspElement1.style.display = "block";
    } else {
        dsspElement1.style.display = "none";
    }
});

const checkbx1 = document.querySelector('#checkbx1>input');
checkbx1.addEventListener('click', function() {
    const dsspElement = document.querySelector('#ngkhac1');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "block";
    } else {
        dsspElement.style.display = "none";
    }
});

const checkbx2 = document.querySelector('#checkbx2>input');
checkbx2.addEventListener('click', function() {
    const dsspElement = document.querySelector('#ngkhac2');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "block";
    } else {
        dsspElement.style.display = "none";
    }
});

const magg = document.querySelector('#maggbtn');
magg.addEventListener('click', function() {
    const dsspElement = document.querySelector('#magginput');
    if (dsspElement.style.display === "none" || dsspElement.style.display === "") {
        dsspElement.style.display = "flex";
    } else {
        dsspElement.style.display = "none";
    }
});