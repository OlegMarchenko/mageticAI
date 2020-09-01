document.addEventListener("DOMContentLoaded", () => {


    const aside   = document.querySelector('.aside');
    const openNav  = document.querySelector('.open-navbar');
    const closeBtn = document.querySelector('.close-navbar');
    const logo = document.querySelector('.logo');
    const btnSearch = document.querySelector('.btn-search');
    const vehiclesButtons = Array.from(document.querySelectorAll('.content-nav button'));

    /*Add active class to pen navigation*/
    openNav.addEventListener(('click'), () => {
        aside.classList.add('active')
    })

    /*Remove active class to pen navigation*/
    closeBtn.addEventListener(('click'), () => {
        aside.classList.remove('active')
    })

    /*Activate search bar*/
    btnSearch.addEventListener(('click'), () => {
        document.querySelector('.header .left > input').classList.toggle('active')
    })

    /*Add active class to button in vehicles area*/
    const handleClick = (e) => {
        e.preventDefault();
        vehiclesButtons.forEach(node => {
            node.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    }

    vehiclesButtons.forEach(node => {
        node.addEventListener('click', handleClick)
    });


});