/*==================== SHOW CASE =====================*/


const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      /*===== Menu show ====*/
      /* validate if constant exist */

      if (navToggle){
        navToggle.addEventListener('click', () =>{
          navMenu.classList.add('show-menu')
        })
      }

       /*===== Menu show ====*/
      /* validate if constant exist */

      if(navClose){
        navClose.addEventListener('click', ()=>{
          navMenu.classList.remove('show-menu')
        })
      }

/*==================== SHOW CASE =====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // when we click on each nav-link we remove the show menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== HOME SWIPER =====================*/
  let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      });

/*============== CHANGE BACKGROUND HEADER ==============*/

function scrollHeader(){
  const header = document.getElementById('header')
  // when the scroll is greater than 50 viewport height add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*================== new swiper ======================*/
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: 'auto',
    spaceBetween: 16,
    loop: 'true',
       
      });

/*========= Scroll section active link ==============*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//   const scrollY = window.pageYOffset

//   sections.forEach(current =>{
//     const sectionHeight = current.offsetHeight
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute('id')

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//       document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//     }else{
//       document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//     }
//   })
// }
//  window.addEventListener('scroll'. scrollActive)  

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scrollup');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 460) scrollUp.classList.add('show-scroll');
     else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


