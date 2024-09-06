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
        strings: ["Developer","Student", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings:["Developer","Student",  "Freelancer"],
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
const images = [
    {
        src: 'Photos/Photo3.jpg',
        text: ''                                                                                                                                                                                                               
    },
    {
        src: 'Photos/Photo4.jpg',
        text: ''
    },
    {
        src: 'Photos/profile-1.jpg',
        text: ''
    },
    {
        src: 'https://iili.io/d36pP1f.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36pQ72.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36pgXn.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36pLdl.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36p8bt.jpg"',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36ptm7.jpg"',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36pig4.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36pmXe.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36y9qb.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36pbI9.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d36pZeS.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://iili.io/d3PBjB2.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    // Voeg hier meer afbeeldingen en beschrijvingen toe als nodig
];
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById('modal-img').src = images[index].src;
    document.getElementById('modal-text').innerText = images[index].text;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModal();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModal();
}

function updateModal() {
    document.getElementById('modal-img').src = images[currentIndex].src;
    document.getElementById('modal-text').innerText = images[currentIndex].text;
}