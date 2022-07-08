export default function favCanvas() {
    let links = JSON.parse(localStorage.getItem('favLinks'))
    for (let i = 0; i < links.length; i++) {
        let imgContainer = document.createElement('div')
        imgContainer.classList.add('imgContainer')
        imgContainer.innerHTML = `<img src="${links[i]}"><div class="icon">
        <svg class="addToFavorite" viewBox="0 0 512 512" width="100" title="heart">
          <path class="addTo" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg><div class="icon">
        <svg class="removeFromFavorite" viewBox="0 0 512 512" width="100" title="heart">
          <path class="removeFrom" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>`

        const canvasElem = document.querySelector('.favCanvas')
        canvasElem.appendChild(imgContainer)
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) favCanvas()
    })
}
