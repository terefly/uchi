export default function header() {
    const menuItems = document.querySelectorAll('.page-header_navigation-item')
    if (document.title === 'Все котики')
        menuItems[0].classList.add('nav-active')
    if (document.title === 'Любимые котики')
        menuItems[1].classList.add('nav-active')
}