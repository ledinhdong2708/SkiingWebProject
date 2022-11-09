window.onscroll = function () { scollNavBar() };


function scollNavBar() {


    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.querySelector('.header').classList.add('nav-scoll')
    }
    else {
        document.querySelector('.header').classList.remove('nav-scoll')
    }
}



function openNav() {
    document.querySelector('.nav-center-reponsive').classList.toggle('d-block-nav-center')
}

