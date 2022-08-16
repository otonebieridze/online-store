///////////////////////////////////////////////////////
$('.button__link').click(function() {
    $('.button__link').removeClass('change__button__color');
    $('.change__button__color').addClass('button__link');
    $('.change__button__color').removeClass('change__button__color');
    $(this).removeClass('button__link');
    $(this).addClass('change__button__color');
})

///////////////////////////////////////////////////////

let navMenuEl = document.querySelectorAll(".nav__menu__el")
let navMenuElList = document.querySelectorAll(".nav__menu__el__list")

navMenuEl.forEach((e) => {
    e.addEventListener("mouseover", () => {
        e.style.width = 150 + "px"
        e.style.height = 280 + "px"

        let index = e.id
        console.log(index)

        navMenuElList[index].style.display = 'inherit'
    })

    e.addEventListener("mouseout", () => {
        e.style.minWidth = 60 + "px"
        e.style.height = 20 + "px"

        let index = e.id
        console.log(index)

        navMenuElList[index].style.display = 'none'
    })
})
