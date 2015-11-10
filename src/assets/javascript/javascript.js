$(document).ready(function() {

  /**
   * Change the width of the "iframe" to match a breakpoint range.
   */
  var changeBreakPoint = function() {

    var self = this;

    // Strip class "active" from the breakpoints icons.
    $('#breakpoints-navigation li.breakpoint-icon').each(function() {
      $(this).removeClass('active');
    });

    $(self).addClass('active');

    // Alter the "iframe" class.
    var $iframe = $("iframe");
    $iframe.removeClass();
    $iframe.addClass($(self).data("breakpoint"));
  };

  /**
   * On "click" handler for the "breakpoint-icon".
   */
  $("#breakpoints-navigation li.breakpoint-icon").on("click", changeBreakPoint);
});
