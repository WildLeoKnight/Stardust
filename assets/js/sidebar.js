window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("sidebar").classList.add('sidebar-minimised');
    document.getElementById("sidebar").classList.remove('sidebar');
  } else {
    document.getElementById("sidebar").classList.add('sidebar');
    document.getElementById("sidebar").classList.remove('sidebar-minimised');
  }
}
  
var acc = document.getElementsByClassName("mobileSideNav-Accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("mobileSideNav-Accordion-active");
    var accList = this.nextElementSibling;
    if (accList.classList.contains("submenu")) {
        accList.classList.remove("submenu");
        accList.classList.add("submenu-active");
    } else {
        accList.classList.add("submenu");
        accList.classList.remove("submenu-active");
    }
});
}

function OpenCloseMobileNav() {
    let mobileNavBar = document.getElementById("mobileSideNav");
    let body = document.getElementsByTagName("BODY")[0]
    if (mobileNavBar.classList.contains("open")){
        mobileNavBar.classList.remove("open");
        body.classList.remove("mobileSideNav-active")
    }else{
        mobileNavBar.classList.add("open");
        body.classList.add("mobileSideNav-active")
    }
}
