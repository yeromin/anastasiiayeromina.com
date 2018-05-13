  document.querySelector(".hamburger-wrap__box").addEventListener("click", function(){
    this.classList.toggle("checked");
    document.querySelector(".main-nav").classList.toggle("menu-visible");
  });

  // document.querySelector(".hamburger-wrap").addEventListener("mouseover", mouseOver);
  // document.querySelector(".hamburger-wrap").addEventListener("mouseout", mouseOut);

  // function mouseOver() {
  //   document.querySelector(".main-nav__list").classList.add("menu-visible");
  //   this.classList.add("checked");
  // }

  // function mouseOut() {
  //   document.querySelector(".main-nav__list").classList.remove("menu-visible");
  //   this.classList.remove("checked");
  // }
