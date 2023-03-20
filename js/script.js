const header = document.querySelector("header");

/*--------------- Fixed Header --------------*/
/* window.addEventListener ("scroll", function() {
	if (window.scrollY > 0) {
		header.classList.toggle ("sticky", window.scrollY > 0);
	$("header").css({"position": "fixed", "margin-top": "-2.5%"});
	} else {
		header.classList.toggle ("sticky", window.scrollY < 0);
		$("header").css({"position": "fixed", "margin-top": "0%"});
	}
}); */

//Navbar menu responsive
let navmenu    = document.querySelector('#navbar-icon');
let navbarlist = document.querySelector('.navbar-nav');
navmenu.onclick = () => {
	navmenu.classList.toggle('bx-x');
	navbarlist.classList.toggle('active');
};

//Navbar menu responsive
let menu       = document.querySelector('#menu-icon');
let navlist    = document.querySelector('.navlist');
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navmenu.classList.remove('bx-x');
	navlist.classList.remove('active');
	navbarlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})
sr.reveal('.condition,.participation,.news',{delay:100, origin:'bottom'})

