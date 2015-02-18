(function(){
  var navIcon = document.getElementById('navIcon');
  var menu = document.getElementById('menu');

  navIcon.addEventListener("click", function(){
    if(menu.classList.contains('shown')) {
      menu.classList.remove('shown')
    } else {
      menu.classList.add('shown')
    }
  });

})();
