var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: 0,
  horizontalOrder: true,
  percentPosition: true,
  fitWidth: true,
  transitionDuration: '0.2s',
  stagger: 30,



});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {

});