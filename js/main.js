// << ======== Menu ========= >>
let apps = document.getElementById('apps'),
    close = document.getElementById('close'),
    navbar__nav = document.querySelector('.navbar-nav'); 
function toggele(){
  apps.classList.toggle('d-none');
  close.classList.toggle('d-none');
  navbar__nav.classList.toggle('end-0');
}
apps.addEventListener('click',toggele)
close.addEventListener('click',toggele)
// <<========= Swiper Image ========= >>
let swiperShoes = new Swiper('.swiper',{
    loop: true,
    spaceBetween : 32,
    grabCursor : true,
    effect: 'creative',
    creativeEffect:{
        prev:{
          translate : [-100, 0, -500],
          opacity :0,            
        },
        next:{
            translate : [100, 0, -500],
            opacity :0,            
          },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
  })


