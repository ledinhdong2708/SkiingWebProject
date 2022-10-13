window.onscroll = function () { scollNavBar() };

function scollNavBar() {

    if(document.body.className == 'light-mode'){
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.querySelector('.header').classList.add('nav-scoll')
            document.querySelectorAll('.nav-items').forEach((items) => {
                items.style.color = 'black'
            })
        }
        else {
            document.querySelector('.header').classList.remove('nav-scoll')
            document.querySelectorAll('.nav-items').forEach((items) => {
                items.style.color = 'white'
            })
        }
    }

    else{
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.querySelector('.header').classList.add('nav-scoll')
            document.querySelectorAll('.nav-items').forEach((items) => {
                items.style.color = 'white'
            })
        }
        else {
            document.querySelector('.header').classList.remove('nav-scoll')
            document.querySelectorAll('.nav-items').forEach((items) => {
                items.style.color = 'black'
            })
        }
    }
}

function changeBackgroundColor() {
    document.body.classList.toggle('light-mode')
    setColor()
}


function setColor(){
    if(document.body.className == 'light-mode'){
        document.querySelectorAll('.nav-items').forEach((items) => {
            items.style.color = 'white'
        })
    }
    else{
        document.querySelectorAll('.nav-items').forEach((items) => {
            items.style.color = 'white'
        })
    }
}

