/*!
 * Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

if (typeof Typed !== "undefined") {
    let typed = new Typed("#typed", {
        strings: ["Walnut Valley Robotics", "Team 5857"],
        smartBackspace: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
    });
}

if (typeof Glide != "undefined") {
    let glide = new Glide(".glide", {
        type: "carousel",
        startAt: 1,
        perView: 3,
        autoplay: 2500,
        focusAt: "center",
        breakpoints: {
            800: {
                perView: 1,
            }
        }
    }).mount({});
}

if (typeof window["pdfjs-dist/build/pdf"] != "undefined") {
    function book(pdflink, cb) {
        var PDFJS = window["pdfjs-dist/build/pdf"];
        PDFJS.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

        const cache = [];

        PDFJS.getDocument(pdflink)
            .promise.then((pdf) => {
                warm_cache_1(pdf, 1);
                cb(null, {
                    pdf,
                    numPages: () => pdf.numPages,
                    getPage: (n, cb) => get_page_1(pdf, n, cb),
                });
            })
            .catch((err) => cb(err || "pdf parsing failed"));

        function warm_cache_1(pdf, n) {
            if (n <= pdf.numPages) get_page_1(pdf, n, () => warm_cache_1(pdf, n + 1));
        }

        function get_page_1(pdf, n, cb) {
            if (!n || n > pdf.numPages) return cb();
            if (cache[n]) return cb(null, cache[n]);
            
            pdf.getPage(n)
            .then((page) => {
                const scale = 1.2;
                const viewport = page.getViewport({
                    scale
                });
                
                // Support HiDPI-screens.
                const outputScale = 1;
                const canvas = document.createElement("canvas");
                canvas.width = Math.floor(viewport.width * outputScale);
                    canvas.height = Math.floor(viewport.height * outputScale);
                    canvas.style.width = Math.floor(viewport.width) + "px";
                    canvas.style.height = Math.floor(viewport.height) + "px";
                    
                    const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
                    
                    const context = canvas.getContext("2d");
                    const renderContext = {
                        canvasContext: context,
                        transform,
                        viewport,
                    };
                    page.render(renderContext)
                    .promise.then(() => {
                        const img = new Image();
                        img.src = canvas.toDataURL();
                        img.addEventListener(
                            "load",
                            () => {
                                cache[n] = {
                                    img,
                                    num: n,
                                    width: img.width,
                                    height: img.height,
                                };
                                cb(null, cache[n]);
                            },
                            false
                            );
                        })
                        .catch((err) => cb(err));
                    })
                    .catch((err) => cb(err));
                }
            }

            // function main() {
            //     const opts = {
            //         width: window.screen.width*.99,
            //         height: window.screen.height*.75,
            //         backgroundColor: window.getComputedStyle(document.getElementsByTagName('footer')[0]).backgroundColor
            //     };
                
            //     const app = document.getElementById("app");
            //     const next = document.getElementById("next");
            //     const prev = document.getElementById("prev");
            //     // const zoom = document.getElementById("zoom");
                
            //     book("assets/Walnut Valley Robotics Sponsorship Packet.pdf", (err, book) => {
            //         if (err) console.error(err);
            //         else
            //         flipbook.init(book, app, opts, (err, viewer) => {
            //             if (err) return console.error(err);
                        
            //             viewer.on("seen", (n) => (document.getElementById("pages").innerHTML = n + " / " + book.numPages()));
            //             next.onclick = () => viewer.flip_forward();
            //             prev.onclick = () => viewer.flip_back();
            //             // zoom.onclick = () => viewer.zoom();
            //         });
            //     });
            // }
            // if (window.screen.width*.99 < 768) {
            //     document.getElementById("controls").style.display = "none";
            //     document.getElementById("mobilePDF").src = "https://docs.google.com/viewer?url=https://wvr5857.org/assets/Walnut%20Valley%20Robotics%20Sponsorship%20Packet.pdf&embedded=true";
            //     document.getElementById("mobilePDF").style.display = "block";
            // } else {
            //     main();
            // }
        }
        
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

    var data = "/assets/F99F9B71-C188-41FE-ABF1-5A383781363E.gif";
    //     var data = "https://raw.githubusercontent.com/birbbbbbbie/birbbbbbbie.github.io/main/F99F9B71-C188-41FE-ABF1-5A383781363E.gif";

    init(data);
}

// Change the footer year

//init all functions
birb();
strap();
window.addEventListener("scroll", reveal);
