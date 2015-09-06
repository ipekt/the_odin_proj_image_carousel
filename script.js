$(function () {

/*

one appear others hidden
set timeout 500 it changes
change is smooth
change can be controlled by arrows
change can be controlled by dots.
dots indicate which image is seen
touch control possible

*/

  var images = Array.prototype.slice.call($('.img_list li'));

  var slide = function(target) {
     var currentElement = $('.active');
    currentElement.removeClass('active fadeIn')
        .addClass('fadeOut');
        target.addClass('active fadeIn');
    currentElement.removeClass('hide fadeOut');
    setTimeout(function() {
      currentElement.addClass('hide');
    }, 2000);

  };

  $('.back').on('click', function() {
    var prevElement = $('li.active').prev();
    if (prevElement.length === 0) {
      prevElement = $('li').last();
    }

    slide(prevElement);

  });

  $('.forward').on('click', function() {
    var nextElement = $('li.active').next();
    if (nextElement.length === 0) {
      nextElement = $('li').first();
    }

    slide(nextElement);
  });



});





