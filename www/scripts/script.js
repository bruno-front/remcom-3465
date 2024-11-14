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



  // Табы в контактах
  $('.js-tab-link').on('click', function(event) {
    event.preventDefault();

    $('.js-tab-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tab-link');

    $('.js-contacts-tab').removeClass('active');
    $('.js-contacts-tab').eq(index).addClass('active');
  });

  // Фильтр в работах
  $('.js-filter-link').on('click', function(event) {
    event.preventDefault();

    $('.js-filter-link').removeClass('active');
    $(this).addClass('active');

    let filter = $(this).data('filter');

    if (filter === 'all') {
      $('.js-works-item').show();
      return;
    }

    $('.js-works-item').each(function() {
      let type = $(this).data('type');

      if (filter === type) {
        $(this).show();
        return;
      }

      $(this).hide();
    });
  });


  // Slick slider
  $('.js-slider').slick();


  // Подгрузка отзывов
  $('.js-reviews-more').on('click', function() {
    let btn = this;

    $(btn).attr('disabled', 'disabled')

    $.ajax({
      type: 'POST',
      url: '../jsons/reviews.json',
      data: {
        quantity: 2
      },
      success: function(res) {
        let reviewsHtmlString = createReviewsHtml(res.reviews);
        console.log(reviewsHtmlString);

        $('.js-reviews-wrap').append(reviewsHtmlString);
        $(btn).removeAttr('disabled')
      },
      error: function() {
        console.log('AAAAAAAAAAAAA!! ВСЕ ПРОПАЛО! ГИПС УЕЗЖАЕТ - КЛИЕНТ СНИМАЕТ');
      }
    });
  });

  function createReviewsHtml(reviewsArray) {
    let result = '';

    reviewsArray.forEach(function (review) {
      result += `<div class="reviews_item">
        <img src="${review.avaUrl}" alt="${review.avaAlt}" class="reviews_ava">
        <div class="reviews_text">
          <strong class="reviews_name">${review.name}</strong>
          <blockquote class="reviews_quote">
            “${review.text}”
          </blockquote>
        </div>
      </div>`;
    });

    return result;
  }



});






















