/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// Original source from here:
// https://github.com/tholman/elevator.js
/*!
 * Elevator.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

/*********************************************
 * Elevator.js
 *********************************************/

 var Elevator = (function() {

    'use strict';

    // Elements
    var body = null;

    // Scroll vars
    var animation = null;
    var duration = null; // ms
    var customDuration = false;
    var startTime = null;
    var startPosition = null;
    var elevating = false;

    var mainAudio;
    var endAudio;

    /**
     * Utils
     */

    // Soft object augmentation
    function extend( target, source ) {
        for ( var key in source ) {
            if ( !( key in target ) ) {
                target[ key ] = source[ key ];
            }
        }
        return target;
    };

    // Thanks Mr Penner - http://robertpenner.com/easing/
    function easeInOutQuad( t, b, c, d ) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    function extendParameters(options, defaults){
        for(var option in defaults){
            var t = options[option] === undefined && typeof option !== "function";
            if(t){
                options[option] = defaults[option];
            }
        }
        return options;
    }

    /**
     * Main
     */

    // Time is passed through requestAnimationFrame, what a world!
    function animateLoop( time ) {
        if (!startTime) {
            startTime = time;
        }

        var timeSoFar = time - startTime;
        var easedPosition = easeInOutQuad(timeSoFar, startPosition, -startPosition, duration);                        
        
        window.scrollTo(0, easedPosition);

        if( timeSoFar < duration ) {
            animation = requestAnimationFrame(animateLoop);
        } else {
            animationFinished();
        }
   };

//            ELEVATE!
//              /
//         ____
//       .'    '=====<0
//       |======|
//       |======|
//       [IIIIII[\--()
//       |_______|
//       C O O O D
//      C O  O  O D
//     C  O  O  O  D
//     C__O__O__O__D
//    [_____________]
    function elevate() {

        if( elevating ) {
            return;
        }

        elevating = true;
        startPosition = (document.documentElement.scrollTop || body.scrollTop);
        
        // No custom duration set, so we travel at pixels per millisecond. (0.75px per ms)
        if( !customDuration ) {
            duration = (startPosition * 1.5);
        }

        requestAnimationFrame( animateLoop );

        // Start music!
        if( mainAudio ) {
            mainAudio.play();
        }
    }

    function resetPositions() {
        startTime = null;
        startPosition = null;
        elevating = false;
    }

    function animationFinished() {
        
        resetPositions();

        // Stop music!
        if( mainAudio ) {
            mainAudio.pause();
            mainAudio.currentTime = 0;
        }

        if( endAudio ) {
            endAudio.play();
        }
    }

    function onWindowBlur() {

        // If animating, go straight to the top. And play no more music.
        if( elevating ) {

            cancelAnimationFrame( animation );
            resetPositions();

            if( mainAudio ) {
                mainAudio.pause();
                mainAudio.currentTime = 0;
            }

            window.scrollTo(0, 0);
        }
    }

    //@TODO: Does this need tap bindings too?
    function bindElevateToElement( element ) {
        element.addEventListener('click', elevate, false);
    }

    function main( options ) {

        // Bind to element click event, if need be.
        body = document.body;

        var defaults = {
            duration: undefined,
            mainAudio: false,
            endAudio: false,
            preloadAudio: true,
            loopAudio: true,
        };

        options = extendParameters(options, defaults);
        
        if( options.element ) {
            bindElevateToElement( options.element );
        }

        if( options.duration ) {
            customDuration = true;
            duration = options.duration;
        }

        window.addEventListener('blur', onWindowBlur, false);

        // If the browser doesn't support audio, stop here!
        if ( !window.Audio ) {
            return;
        }

        if( options.mainAudio ) {
            mainAudio = new Audio( options.mainAudio );
            mainAudio.setAttribute( 'preload', options.preloadAudio ); 
            mainAudio.setAttribute( 'loop', options.loopAudio );
        }

        if( options.endAudio ) {
            endAudio = new Audio( options.endAudio );
            endAudio.setAttribute( 'preload', 'true' );
        }
    }

    return extend(main, {
        elevate: elevate
    });
})();


// trigger it

var elementButton = document.querySelector('.elevator');
var elevator = new Elevator({
  element: elementButton,
  // mainAudio from here:
  // https://github.com/tholman/elevator.js
  // Audio in the Demo (sourced from BenSound) is licenced under Creative Commons.
  mainAudio: 'https://weichiachang.github.io/Easter-egg/images/music/elevator.mp3',
  // endAudio from here:
  // https://www.findsounds.com/ISAPI/search.dll?keywords=ding+dinging
  endAudio:  'https://inventwithpython.com/pickup.wav'
});
