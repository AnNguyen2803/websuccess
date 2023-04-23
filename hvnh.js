// // var course = {
// //     name: 'Javascript',
// //     price: 1000,
// //     image: 'image-address',
// //     description: 'description value'
// // };

// // var {description ='default description'} = course
// // console.log(description);

// var brand = 'F8';
// var course = 'Javascript';
// function highlight([first, ...strings], ...value){
//     return value.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//         [first]
//   ).join('');
// }

// var html = highlight `Hoc lap trinh ${course} tai ${brand} !`;


// console.log(html);


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
let slideIndex1 = 1;
autoSlider();
function autoSlider(){
    let i;
    let slide = document.getElementsByClassName("mySlides");
    let dot = document.getElementsByClassName("dot")
    for(i=0; i< slide.length;i++){
        slide[i].style.display = "none"
    }
    slideIndex1++;
    if(slideIndex1 > slide.length){
        slideIndex1 = 1;
    }
    for(i = 0; i< dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "");
    }
    slide[slideIndex1 - 1].style.display = "block";
    dot[slideIndex1 - 1].className += " active";
    setTimeout(autoSlider, 5000);
}
//Xử lý onsubmit
    var submitbtn = document.querySelector('input[type = submit]')

    var inputValue = document.querySelector('#sf-box')
    var submitQuestion = document.querySelector('#send')
    var supTitile = document.querySelector('.support-title')
    var supContent = document.querySelector('.support-content')
     

    supTitile.onclick = function(){    
        const node = document.querySelector('.support')
        var isClosed = supContent.clientHeight === 200;
        if(isClosed){
            supContent.style.display = 'none'
        } else{
            supContent.style.display = 'block'
        }
    }
    submitQuestion.onclick = function(){
        alert('Câu hỏi của bạn đã được gửi đi!');
    }
    submitbtn.onclick = function(e){
        e.preventDefault();

        confirm(`Có phải bạn vừa nhập ${inputValue.value}`);
    }





