var elem = document.querySelector('.grid');

var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  horizontalOrder: true,
  percentPosition: true,
  fitWidth: false,
  transitionDuration: '0.2s',
  stagger: 30
  // fitWidth: true
});

// element argument can be a selector string for an individual element
var msnry = new Masonry( '.grid', {
  
});