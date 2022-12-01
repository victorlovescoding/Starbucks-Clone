const navs=Array.from(document.querySelectorAll('header nav ul li a'))
const subMenus=Array.from(document.querySelectorAll('.sub_menu'))
const footers=Array.from(document.querySelectorAll('.footer_main .ul_wrap ul'))
const ul_wraps=Array.from(document.querySelectorAll('.ul_wrap'))
const burgerIcon=document.querySelector('.burger_icon')
const mobileNav=document.querySelector('.mobile_nav')
const angleDown=Array.from(document.querySelectorAll('footer .footer_main .ul_wrap .fa-angle-down'))

burgerIcon.addEventListener('click',()=>{
    mobileNav.classList.toggle('hide_menu')
})
if(window.innerWidth < "768"){
    ul_wraps.forEach((ul_wrap)=>{
        let index=ul_wraps.indexOf(ul_wrap)
        ul_wrap.addEventListener('click',()=>{
            //footers[index].style.display='block'
            if(footers[index].style.display=='none'){
                footers[index].style.display='block'
                
            }else{
                footers[index].style.display='none'
                
            }
        })
    })
}


navs.forEach((nav)=>{
    let index=navs.indexOf(nav)
    nav.addEventListener('mouseover',()=>{
        nav.style.backgroundColor="#1E1E1E"
        nav.style.color="#ffffff"
        subMenus[index].style.display="block"
        subMenus[index].addEventListener('mouseover',()=>{
            nav.style.backgroundColor="#1E1E1E"
            nav.style.color="#ffffff"
            subMenus[index].style.display="block"
        })
    })
    
    nav.addEventListener('mouseout',()=>{
        nav.style.backgroundColor="#F7F7F7"
        nav.style.color="#1E1E1E"
        subMenus[index].style.display="none"
        subMenus[index].addEventListener('mouseout',()=>{
            nav.style.backgroundColor="#F7F7F7"
            nav.style.color="#1E1E1E"
            subMenus[index].style.display="none"
        })  
    })
    
    
})

window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
})