$(document).ready(function() {

  // The last window "width" value.
  var prevW = $(window).width();


  function clearClass(className) {
    // Strip the "active" class.
    $('#breakpoints-navigation li.device').each(function() {
      $(this).removeClass(className);
    });
  }

  /**
   * Clear the "iframe" breakpoint class (e.g "xs") and the "active" class from
   * the icon that's responsible to display the current breakpoint.
   */
  $(window).resize(function() {

    // In case we change the height only.
    if ($(window).width() == prevW) {
      return;
    }

    // Update the new window "width" value.
    prevW = $(window).width();

    // Strip class from the breakpoints icons.
    clearClass('active');

  });

  /**
   * Change the width of the "iframe" to match a breakpoint range.
   */
  var changeBreakPoint = function() {

    var self = this;

    // Strip class from the breakpoints icons.
    clearClass('active');

    $(self).addClass('active');

    // Alter the "iframe" class.
    var $iframe = $("iframe");
    $iframe.removeClass();
    $iframe.addClass($(self).data("breakpoint"));
  };

  // The on "click" handler.
  $("#breakpoints-navigation li.device").on("click", changeBreakPoint);
});
