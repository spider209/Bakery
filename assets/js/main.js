/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVER MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD CABEÇALHO DE BORRÃO ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //Adiciona uma classe se o deslocamento inferior for maior que 50 da viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW ROLAR PARA CIMA ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Quando a rolagem for superior a 350 altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scrollup
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== LINK ATIVO DAS SEÇÕES DE ROLAGEM ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== ANIMAÇÃO DE REVELAÇÃO DE ROLO ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
   //reset: true, //repetição da animação

})

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`)
sr.reveal(`.home__image, .footer__img-1, footer-img-2`, {rotate: {z: -15} })
sr.reveal(`.home__bread, about__bread`, {rotate: {z: 15} })
sr.reveal(`.home__footer`, {scale: 1, origin: 'bottom' })

sr.reveal(`.new__card:nth-child(1) img`, {rotate: {z: -30}, distance: 0 })
sr.reveal(`.new__card:nth-child(2) img`, {rotate: {z: 15}, distance: 0, delay: 600 })
sr.reveal(`.new__card:nth-child(3) img`, {rotate: {z: -30}, distance: 0, delay: 900 })

sr.reveal(`.favorite__card img`, { interval: 100, rotate: {z: 15}, distance: 0, })

sr.reveal(`.footer__container`, { scale: 1})