$(document).ready(function(){
       $("#mainViewContainer").html($("#homepage").html())
   
})



function SwitchToAboutUs () {
    document.getElementById('bodyelement').style.backgroundImage="url(img/iskallnew2.png)";
    $("#mainViewContainer").html($("#omoss").html())

}


function SwitchTohome() {
    document.getElementById('bodyelement').style.backgroundImage="url(img/iskallnew.png)";
    $("#mainViewContainer").html($("#homepage").html())
}

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const mainView = document.getElementById('mainViewContainer')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        mainView.classList.toggle('hidden')
        mainView.classList.toggle('flex')
    }

    const toggleMainView = () => {
        mainView.classList.toggle('hidden')
        mainView.classList.toggle('flex')

    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)