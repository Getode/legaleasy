document.addEventListener("DOMContentLoaded", () => {
    // faq
    const wraps = document.querySelectorAll(".faq__item");
  
    wraps.forEach((wrap, idx) => {
      if (idx !== 0) wrap.classList.remove("active");
    });
  
    wraps.forEach((wrap) => {
      const title = wrap.querySelector("h3");
  
      title.addEventListener("click", () => {
        wraps.forEach((otherWrap) => {
          if (otherWrap !== wrap) otherWrap.classList.remove("active");
        });
  
        wrap.classList.toggle("active");
      });
    });
    
    // burger
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".nav-list");
  
    if (burger && menu) {
      burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
      });
  
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !burger.contains(e.target)) {
          burger.classList.remove("active");
          menu.classList.remove("active");
        }
      });
  
      const menuLinks = menu.querySelectorAll("a");
      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          burger.classList.remove("active");
          menu.classList.remove("active");
        });
      });
    }
  
  });