//ACTIVE LINK:
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50 ,
          sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY << sectionTop + sectionHeight) {
            document
            .querySelector('.nav__menu .a[href*=' + sectionId + ']') .classList .add('active__link');
        } else {
            document
            .querySelector('.nav__menu .a[href*=' + sectionId + ']') .classList .remove('active__link');

        }
    });
};

window.addEventListener('scroll', scrollActive);


// scroll animate
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400,
});

ScrollReveal().reveal('.home-card-img', { delay: 200 });
ScrollReveal().reveal('.home-card-title', { delay: 300 });
ScrollReveal().reveal('.home-card-desc', { delay: 400 });
ScrollReveal().reveal('.descript-home', { delay: 500 });

// about us
ScrollReveal().reveal('.mid-title', { delay: 200 });
ScrollReveal().reveal('.box-mainabout', { delay: 200 });
ScrollReveal().reveal('.box-mainaboutus', { delay: 400 });

// social media
ScrollReveal().reveal('.img-mediasocial', { delay: 200 });
ScrollReveal().reveal('.social-akun', { delay: 200 });
ScrollReveal().reveal('.description-media', { delay: 400 });
ScrollReveal().reveal('.nama-nama', { delay: 400 });



// typewrite
var typed = new Typed('.auto-input', {
    strings: [ 'WELCOME TO OUR WEBSITE'],
    typeSpeed: 60,
    backSpeed: 80,
    backDelay: 2000,
    loop: true
  });







