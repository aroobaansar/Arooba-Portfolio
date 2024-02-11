//header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled")
    }
}

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


document.getElementById('downloadButton').addEventListener('click', function() {
    // Create an <a> element
    var link = document.createElement('a');
    // Set its href attribute to the URL of the PDF file
    link.href = '\web\my portfolio\Resume.pdf';
    // Set the download attribute to force download
    link.download = 'Resume.pdf';
    // Programmatically trigger the click event on the link
    document.body.appendChild(link);
    link.click();
    // Cleanup: remove the <a> element after click
    document.body.removeChild(link);
  });


