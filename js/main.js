// << ======== Menu ========= >>
let apps = document.getElementById('apps'),
    close = document.getElementById('close'),
    list = document.querySelector('nav ul'); 
function toggele(){
  apps.classList.toggle('toggele');
  close.classList.toggle('toggele');
  list.classList.toggle('toggele');
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


