
(function () {

    const link = document.querySelectorAll('.hover-this');
    

    const animateit = function (e) {
          const span = this.querySelector('.hover-move');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,

          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;

          span.style.transform = `translate(${xMove}px, ${yMove}px)`;

          if (e.type === 'mouseleave') span.style.transform = '';
    };

    
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    

})();


function showMenu(menu) {

    var angle = "0deg",
      slide = "100vh",
      slide2 = "-100vw";
  
    if (menu) {
      angle = "180deg";
      slide = "0",
      slide2 = "-50vw";
    }
  
    // Slide panel
    $("#menu__panel").css({
      transform: "translateY(" + slide + ")"
    });
    $("#menu__panel_image").css({
        transform: "translateX(" + slide2 + ")"
      });
    $("#menu__panel_social").fadeToggle("slow").css("display", "flex");


    // Rotate icon
    setTimeout(function() {
      $("#menu__close").css({
        transform: "rotate(" + angle + ")"
      });
    }, 300);
  
    // Animate menu items
    $(".menu-item").each(function(i) {
      var row = $(this);
      setTimeout(function() {
        menu && row.addClass("fadeInDown");
        !menu && row.removeClass("fadeInDown");
      }, 100 * i);
    });
  
  }