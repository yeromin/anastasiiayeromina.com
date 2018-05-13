(function (window, document) {
  "use strict";

  var backToTop = document.querySelector(".back-to-top");
  // var mainNavList = document.querySelector(".main-nav__list--fixed");
  var mainNav = document.querySelector(".main-nav");
  var mainLogo = document.querySelector(".logo");
  
  // show on / show off the UP-urrow
  window.onscroll = function () {
    var pageScrollPoint = window.pageYOffset || document.documentElement.scrollTop;
    var innerHeight = document.documentElement.clientHeight;
    if (pageScrollPoint >= innerHeight) {
      backToTop.classList.add("back-to-top-visible");
      // mainNavList.classList.add("main-nav__list--fixed-visible")
      mainNav.classList.add("main-nav--fixed")
      mainLogo.classList.add("logo--fixed")
    } else {
      backToTop.classList.remove("back-to-top-visible");
      // mainNavList.classList.remove("main-nav__list--fixed-visible");
      mainNav.classList.remove("main-nav--fixed");
      mainLogo.classList.remove("logo--fixed")
    }
  } // onscroll ends
  // show on / show off the UP-urrow ENDS 

  backToTop.addEventListener("click", smoothScroll);


  // Smooth scroll to top
  function getScrollTop(scrollable) {
    return scrollable.scrollTop || document.body.scrollTop || document.documentElement.scrollTop;
  }

  function scrollTo(scrollable, coords, millisecondsToTake) {
    var currentY = getScrollTop(scrollable),
      diffY = coords.y - currentY,
      startTimestamp = null;

    if (coords.y === currentY || typeof scrollable.scrollTo !== 'function') {
      return;
    }


    function doScroll(currentTimestamp) {
      if (startTimestamp === null) {
        startTimestamp = currentTimestamp;
      }

      var progress = currentTimestamp - startTimestamp,
        fractionDone = (progress / millisecondsToTake),
        pointOnSineWave = Math.sin(fractionDone * Math.PI / 2);
      scrollable.scrollTo(0, currentY + (diffY * pointOnSineWave));

      if (progress < millisecondsToTake) {
        window.requestAnimationFrame(doScroll);
      } else {
        // Ensure we're at our destination
        scrollable.scrollTo(coords.x, coords.y);
      }
    }

    window.requestAnimationFrame(doScroll);
  }


  function smoothScroll(e) {
    scrollTo(window, {
      x: 0,
      y: 0
    }, 1500);
  }
  // Smooth scroll to top ENDS 

}(window, document));