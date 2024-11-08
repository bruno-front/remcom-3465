$(document).ready(function() {

  let $menu = $('.js-menu');
  // let isOpen = false;

  $('.js-burger').on('click', function () {
    // if ( isOpen ) {
    //   $menu.slideUp();
    //   isOpen = false;
    // } else {
    //   $menu.slideDown();
    //   isOpen = true;
    // }
    $menu.slideToggle();

  });


  let prevAccordionBtn;
  let openClass = 'open';

  $('.js-accordion-btn').on('click', function() {
    if (this === prevAccordionBtn) {
      $(this).toggleClass(openClass)
      $(this).next().slideToggle();
      return;
    }

    $(prevAccordionBtn).removeClass(openClass);
    $(prevAccordionBtn).next().slideUp();

    $(this).addClass(openClass);
    $(this).next().slideDown();

    prevAccordionBtn = this;
  });


  let $servicesHeading = $('.services_heading');

  $servicesHeading.each(function() {
    console.log( $(this).text() );
  });

});






















