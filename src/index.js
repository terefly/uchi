import './main.sass'

import favBtn from './elements/canvas/favBtn'
import canvas, { canvasScroll } from './elements/canvas/canvas'
import favCanvas, { favCanvasScroll } from './elements/favCanvas/favCanvas'
import header from './elements/header/header'

favBtn()
header()
if(document.title == 'Все котики'){
    canvas()
    window.addEventListener('scroll', () => {
        if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight * 0.99)) {
            canvas()
        }
    })
}
if(document.title == 'Любимые котики') {
    favCanvas()
    window.addEventListener('scroll', () => {
        if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight * 0.99)) {
            favCanvas()
        }
    })
}