(function () {

  var auto = true,
    images = Array.prototype.slice.call($('.img_list li'));

  var slide = function (target) {
    var currentElement = $('.active');
    currentElement.removeClass('active fadeIn')
      .addClass('fadeOut');
    target.addClass('active fadeIn');

    currentElement.removeClass('hide fadeOut');
    currentElement.addClass('hide');
  };

  var slider_control = function (target) {
    var currentElement = $('.current');
    currentElement.removeClass('current')
      .addClass('inactive');
    target.addClass('current');

    currentElement.removeClass('inactive');
  };

  var nextElement = function (arg1, arg2) {
    var nextElement = $(arg1).next();
    if (nextElement.length === 0) {
      nextElement = $(arg2).first();
    }
    return nextElement;
  };

  var prevElement = function (arg1, arg2) {
    var prevElement = $(arg1).prev();
    if (prevElement.length === 0) {
      prevElement = $(arg2).last();
    }
    console.log(prevElement);
    return prevElement;
  };

  var autoSlide = function () {
    slide(nextElement('li.active', '.img_list  li'));
    slider_control(nextElement('li.current', '.slider_control li'));
  };

  function timeout() {
    setTimeout(function () {
      if (auto) {
        autoSlide();
        timeout();
      } else {
        return;
      }
    }, 3000);
  }


  $(function () {

    $('.back').on('click', function () {

      slide(prevElement('li.active', '.img_list li'));
      slider_control(prevElement('li.current', '.slider_control li'));

    });

    $('.forward').on('click', function () {
      auto = false;
      slide(nextElement('li.active', '.img_list  li'));
      slider_control(nextElement('li.current', '.slider_control li'));

    });

    $('.slider_control_item').on('click', function () {
      auto = false;
      var target = $(this).attr('data-imgref');
      slide($(target));
    });

    timeout();

  });

})();