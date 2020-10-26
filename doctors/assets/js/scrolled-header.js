window.addEventListener('scroll', function() {
    var scrolledHeader = document.getElementById('scrolled-header');
    var scrolledLogo = document.getElementById('scrolled-logo');
    var currentSite = document.getElementById('current-site');
    var scrolledHeaderBtn = document.getElementById('scrolled-header-btn');

    if(pageYOffset > 100){
        scrolledHeader.style.display = "block";
        if(pageYOffset > 1000 && pageYOffset < 3200){
            currentSite.innerText = '1. HealthSapiens';
            scrolledLogo.innerHTML = '<img src="assets/images/doctor-logo-1.png">'
            scrolledHeaderBtn.setAttribute('href', 'https://google.com');
        }
        if(pageYOffset > 3400 && pageYOffset < 4900){
            currentSite.innerText = '2. JustAnswer'
            scrolledLogo.innerHTML = '<img src="assets/images/doctor-logo-2.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
        if(pageYOffset > 4900 && pageYOffset < 6400){
            currentSite.innerText = '3. CallonDoc'
            scrolledLogo.innerHTML = '<img src="assets/images/doctor-logo-3.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
        if(pageYOffset > 6400 && pageYOffset < 7900){
            currentSite.innerText = '4. Teladoc'
            scrolledLogo.innerHTML = '<img src="assets/images/doctor-logo-4.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
        if(pageYOffset > 7900){
            currentSite.innerText = '5. Amwell'
            scrolledLogo.innerHTML = '<img src="assets/images/doctor-logo-5.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
    }
    else{
        scrolledHeader.style.display = "none"
    }
});