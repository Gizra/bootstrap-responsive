$(document).ready(function() {

  /**
   * Change the width of the "iframe" to match a breakpoint range.
   */
  var changeBreakPoint = function() {
    // The class to add to the iframe.
    var _class = $(this).data("breakpoint");

    // Alter the "iframe" class.
    var $iframe = $("iframe");
    $iframe.removeClass();
    $iframe.addClass(_class);
  };

  // The on "click" handler.
  $("#breakpoints-navigation li.device").on("click", changeBreakPoint);

});
