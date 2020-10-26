window.addEventListener('scroll', function() {
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
        if(pageYOffset > 3400 && pageYOffset < 4900){
            currentSite.innerText = '2. EliteSingles'
            scrolledLogo.innerHTML = '<img src="assets/images/eliteSingles-logo.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
        if(pageYOffset > 4900 && pageYOffset < 6400){
            currentSite.innerText = '3. Match'
            scrolledLogo.innerHTML = '<img src="assets/images/match-logo.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
        if(pageYOffset > 6400 && pageYOffset < 7900){
            currentSite.innerText = '4. SilverSingles'
            scrolledLogo.innerHTML = '<img src="assets/images/silver-singels-logo.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
        if(pageYOffset > 7900){
            currentSite.innerText = '5. OurTime'
            scrolledLogo.innerHTML = '<img src="assets/images/ourTime-logo.png">'
            scrolledHeaderBtn.setAttribute('href', '#');
        }
    }
    else{
        scrolledHeader.style.display = "none"
    }
});