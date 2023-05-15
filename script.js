$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var veModal = document.getElementById("veModal");
    var veBtn = document.getElementById("openModalVideoEditor");
    var veSpan = document.getElementsByClassName("close")[0];

    var qaModal = document.getElementById("qaModal");
    var qaBtn = document.getElementById("openModalQA");
    var qaSpan = document.getElementsByClassName("close")[1];

    var cwModal = document.getElementById("cwModal");
    var cwBtn = document.getElementById("openModalCopywriter");
    var cwSpan = document.getElementsByClassName("close")[2];


    veBtn.onclick = function() {
        veModal.style.display = "block";
    }

    veSpan.onclick = function() {
        veModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == veModal) {
            veModal.style.display = "none";
        }
    }


    qaBtn.onclick = function() {
        qaModal.style.display = "block";
    }

    qaSpan.onclick = function() {
        qaModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == qaModal) {
            qaModal.style.display = "none";
        }
    }



    cwBtn.onclick = function() {
        cwModal.style.display = "block";
    }

    cwSpan.onclick = function() {
        cwModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == cwModal) {
            cwModal.style.display = "none";
        }
    }
});
