

// const text = "I am recently given my SSC exam .Then, I do many types of courses for web design.For doing web design I learn HTML5,CSS,SASS Language .And I also learn a framework which is: Bootstrap.And I am assure that any type of  web design work I will do by taking Responsive and in time.You can be satisfy to my work also.";
// const textElement = document.getElementById("text");

// let index = 0;

// function type() {
//     if (index < text.length) {
//         textElement.textContent += text.charAt(index);
//         index++;
//         setTimeout(type, 100); // Adjust speed here (100ms for slow motion)
//     }
// }

// type()







/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if (top >= offset && top < offset + height){
			navLinks.forEach(link => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			})
		}	
	})	
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100);
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
	menuIcon.classList.remove('#banner bx-x');
	navbar.classList.remove('#banner active');
};
/*==================== scroll reveal ====================*/
ScrollReveal({ 
    // reset: true
	distance: '80px',
	duration: 2000,
	delay: 200,
});
ScrollReveal().reveal('#banner .home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('#banner .home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('#banner .home-content .h1,#banner .home-content .h2,#banner .home-content .h3 .about-img', { origin: 'left' });
ScrollReveal().reveal('#banner .home-content p,  .about-content', { origin: 'right' });
/*==================== typed js ====================*/
const typed = new Typed ('.multiple-text', {
	strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});



