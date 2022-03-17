jQuery(function($) {
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('ul.menu a').each(function() {
            if (this.href === path) {
                  $(this).addClass('active');
            }
      });
});


const hamburger = document.getElementById('nav-toggle');
const navigation = document.getElementById('menu-container');

hamburger.addEventListener('click', () =>  {
      navigation.classList.toggle('show');
});