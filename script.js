const navs=Array.from(document.querySelectorAll("header nav ul li a"));
const subMenus=Array.from(document.querySelectorAll(".sub_menu"));
const footers=Array.from(document.querySelectorAll(".footer_main .ul_wrap ul"));
const ul_wraps=Array.from(document.querySelectorAll(".ul_wrap"));
const burgerIcon=document.querySelector(".burger_icon");
const mobileNav=document.querySelector(".mobile_nav");
// 漢堡選單控制表單的CSS來顯示或隱藏表單
burgerIcon.addEventListener("click",()=>{
	mobileNav.classList.toggle("hide_menu");
});
// 螢幕低於768px，點開Footer選單顯示細項
if(window.innerWidth < "768"){
	ul_wraps.forEach((ul_wrap)=>{
		let index=ul_wraps.indexOf(ul_wrap);
		ul_wrap.addEventListener("click",()=>{
			if(footers[index].style.display=="none"){
				footers[index].style.display="block";       
			}else{
				footers[index].style.display="none";
			}
		});
	});
}

// 滑鼠移到哪個選單，就跑出相對應的選單細項
navs.forEach((nav)=>{
	let index=navs.indexOf(nav);
	nav.addEventListener("mouseover",()=>{
		nav.style.backgroundColor="#1E1E1E";
		nav.style.color="#ffffff";
		subMenus[index].style.display="block";
		subMenus[index].addEventListener("mouseover",()=>{
			nav.style.backgroundColor="#1E1E1E";
			nav.style.color="#ffffff";
			subMenus[index].style.display="block";
		});
	});
    
	nav.addEventListener("mouseout",()=>{
		nav.style.backgroundColor="#F7F7F7";
		nav.style.color="#1E1E1E";
		subMenus[index].style.display="none";
		subMenus[index].addEventListener("mouseout",()=>{
			nav.style.backgroundColor="#F7F7F7";
			nav.style.color="#1E1E1E";
			subMenus[index].style.display="none";
		});  
	});
});