$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#changeNav");
  var offset = startchange.offset();

  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();

      if (scroll_start > offset.top) {
        $(".navbar-default").css("background-color", "#2E8B57");
        $(".navbar-default").css(
          "box-shadow",
          "0px 1px 10px 0 rgb(0 0 0 / 70%), 0 6px 40px 0 rgb(0 0 0 / 19%)"
        );
      } else {
        $(".navbar-default").css("background-color", "transparent");
        $(".navbar-default").css("box-shadow", "none");
      }
    });
  }
});
