console.log('hel')
const body = document.body
const mobileMenu = document.querySelector('.mobile-menu')
const menuBtn = document.querySelector('.menu-btn')

function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('hide');
    if (isOpen) {
        mobileMenu.classList.remove('hide');
        menuBtn.innerHTML = `<span class="material-symbols-outlined">
                    close
                </span>`
        body.classList.add('no-scroll')
    } else {
        mobileMenu.classList.add('hide');
        menuBtn.innerHTML = `<span class="material-symbols-outlined">
                    menu
                </span>`
        body.classList.remove('no-scroll')
    }
}
