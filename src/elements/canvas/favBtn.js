export default function favBtn() {
    window.addEventListener('pointermove', function(event) {
        if (event.target.matches('.imgContainer') || event.target.matches('img')) {
            //найти контейнер изображения
            let imgContainer
            if (event.target.matches('img')) {
                imgContainer = event.target.closest('.imgContainer')
            } else if (event.target.matches('.imgContainer')) {
                imgContainer = event.target
            }

            //найти кнопки и ссылку на изображения
            const link = imgContainer.querySelector('img').src
            const addButton = imgContainer.querySelector('.addToFavorite')
            const removeButton = imgContainer.querySelector('.removeFromFavorite')

            //запросить сохраненные ссылки
            if (localStorage.getItem('favLinks') == null) {
                localStorage.setItem('favLinks', '[]')
            }
            let old_links = JSON.parse(localStorage.getItem('favLinks'))
            
            //показать нужную кнопку
            if (!old_links.includes(link)) {
                addButton.style.display = "block"
            }
            if (old_links.includes(link)) {
                removeButton.style.display = "block"
            }
            imgContainer.addEventListener('click', function(e) {
                console.log(e.target)
            })
            //обработка нажатий добавить в/убрать из избранного
            imgContainer.addEventListener('click', function(e) {
                if(e.target.matches('.addTo') && (!old_links.includes(link))) {
                    old_links.push(link)
                    localStorage.setItem('favLinks', JSON.stringify(old_links))
                    addButton.style.display = 'none'
                    removeButton.style.display = 'block'
                } else if(e.target.matches('.removeFrom')) {
                    let index = old_links.indexOf(link);
                    if (index != -1) old_links.splice(index, 1);
                    localStorage.setItem('favLinks', JSON.stringify(old_links))
                    removeButton.style.display = 'none'
                    addButton.style.display = 'block'
                }
            })

            //убрать кнопки
            imgContainer.addEventListener('pointerleave', function() {
                addButton.style.display = "none"
                removeButton.style.display = "none"
            })
        }
    })
}