
window.addEventListener('scroll', function() {
    // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    // console.log(pageYOffset)
    var scrolledHeader = document.getElementById('scrolled-header');
    var scrolledLogo = document.getElementById('scrolled-logo')
    var currentSite = document.getElementById('current-site');
    var scrolledHeaderBtn = document.getElementById('scrolled-header-btn');
    if(pageYOffset > 100){
        scrolledHeader.style.display = "block"
        if(pageYOffset > 1000 && pageYOffset < 3200){
            currentSite.innerText = '1. Zoosk';
            scrolledLogo.innerHTML = '<img src="assets/images/zoosk-logo.png">'
            scrolledHeaderBtn.setAttribute('href', 'https://google.com');
        }
        if(pageYOffset > 3400){
            currentSite.innerText = '2. EliteSingles'
            scrolledLogo.innerHTML = '<img src="assets/images/eliteSingles-logo.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
    }
    else{
        scrolledHeader.style.display = "none"
    }
});