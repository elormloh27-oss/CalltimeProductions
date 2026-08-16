const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar_menu")

menu.addEventListener("click", function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle("active")
  
});

document.querySelectorAll('.video-facade').forEach(facade => {
  facade.addEventListener('click', function() {
    
    const videoUrl = this.getAttribute('data-src'); const iframe = document.createElement('iframe');
    iframe.setAttribute('src', videoUrl + "?autoplay=1");
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy'); // iframe also lazy
  
    this.parentNode.replaceChild(iframe, this);
  });
});
