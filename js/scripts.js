/*!
 * Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */

function strap() {
	// Navbar shrink function
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector("#mainNav");
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove("navbar-shrink");
		} else {
			navbarCollapsible.classList.add("navbar-shrink");
		}
	};

	// Shrink the navbar
	navbarShrink();

	// Shrink the navbar when page is scrolled
	document.addEventListener("scroll", navbarShrink);

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector(".navbar-toggler");
	const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener("click", () => {
			if (window.getComputedStyle(navbarToggler).display !== "none") {
				navbarToggler.click();
			}
		});
	});
}

// Script by birbbbbbb

function birb() {
	// type 'birb' on your keyboard
	var key = [66, 73, 82, 66];
	var ck = 0;
	var max = key.length;
	var onscreen = false;

	var unicorn = function () {
		var img = new Image();
		img.src = data;
		img.style.pointerEvents = "none";
		img.style.width = "600px";
		img.style.height = "338px";
		img.style.transition = "13s all";
		img.style.position = "fixed";
		img.style.right = "-374px";
		// img.style.bottom = 'calc(-50% + 280px)';
		img.style.top = "100px";
		img.style.zIndex = 999999;

		document.body.appendChild(img);

		window.setTimeout(function () {
			img.style.right = "calc(100% + 500px)";
		}, 50);

		window.setTimeout(function () {
			img.parentNode.removeChild(img);
		}, 10300);
		setTimeout(function () {
			onscreen = false;
		}, 5000);
	};

	var record = function (e) {
		console.log(e.key, ck);
		if (e.which === key[ck]) {
			ck++;
		} else {
			ck = 0;
		}

		if (ck >= max && !onscreen) {
			onscreen = true;
			unicorn();
			ck = 0;
		} else if (onscreen) {
			ck = 0;
		}
	};

	var init = function (data) {
		document.addEventListener("keyup", record);
	};

	var data = "https://raw.githubusercontent.com/birbbbbbbie/birbbbbbbie.github.io/main/F99F9B71-C188-41FE-ABF1-5A383781363E.gif";

	init(data);
}

if (typeof Typed !== "undefined") {
	var typed = new Typed("#typed", {
		strings: ["Walnut Valley Robotics", "Team 5857"],
		smartBackspace: true,
		typeSpeed: 50,
      	backSpeed: 25,
      	backDelay: 1000,
		loop: true
	});
}

//init all functions
birb();
strap();
