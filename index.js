window.onscroll = function () { scollNavBar() };


function scollNavBar() {

    if(document.body.className == 'dark-mode'){
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
    document.body.classList.toggle('dark-mode')
    setColor()
    setColorNavscoll()
}


function setColor(){
    if(document.body.className == 'dark-mode'){
        document.querySelectorAll('.nav-items').forEach((items) => {
            items.style.color = 'white'
        })
    }
    else{
        document.querySelectorAll('.nav-items').forEach((items) => {
            items.style.color = 'black'
        })
    }
}

function setColorNavscoll() {
    var header = document.querySelector('.header')
    if(header.className == 'header nav-scoll'){
        if(document.body.className == 'dark-mode'){
            document.querySelectorAll('.nav-items').forEach((items) => {
                items.style.color = 'black'
            })
        }
        else{
            document.querySelectorAll('.nav-items').forEach((items) => {
                items.style.color = 'white'
            })
        }
    }
}



