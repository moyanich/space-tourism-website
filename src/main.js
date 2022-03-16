
/*
$( 'ul.menu a' ).on( 'click', function () {
      console.log('clicked');
	$( 'ul.menu' ).find( 'li a.active' ).removeClass( 'active' );
	$( this ).parent( 'li a' ).addClass( 'active' );
});
var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
$("ul.menu > li > a").each(function(){
      if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
      $(this).addClass("active");
      // $(this).parent("li").addClass("active");
}) 

*/

jQuery(function($) {
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('ul.menu a').each(function() {
            if (this.href === path) {
                  $(this).addClass('active');
            }
      });
});






