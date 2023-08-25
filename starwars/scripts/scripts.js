const buttonMenu = document.getElementById('button-menu')

buttonMenu.onclick = () => {
    const modal = document.getElementById('modal')
    modal.style.visibility = "visible"

    const modalContent = document.getElementById('modal-content')
    modalContent.innerHTML = ``

    const menuLogo = document.createElement('div')
    menuLogo.style.backgroundImage = `url(assets/logo.png)`
    menuLogo.className = 'menu-image'

    const menuCharacter = document.createElement('span')
    menuCharacter.innerHTML = `<a href="${'index.html'}" class="menu-list">Characters</a>`

    const menuPlanet = document.createElement('span')
    menuPlanet.innerHTML = `<a href="${'planets.html'}" class="menu-list">Planets</a>`

    const menuShip = document.createElement('span')
    menuShip.innerHTML = `<a href="${'ships.html'}" class="menu-list">Space Ships</a>`

    const socialMedia = document.createElement('span')
    socialMedia.className = "social-media-menu"
    socialMedia.innerHTML = `
        <a href="https://www.instagram.com/brunomoreira_up/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.facebook.com/BrunooMoreira" target="_blank">
            <i class="fa-brands fa-facebook-f"></i>
        </a>

        <a href="https://github.com/xCeif" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/brunoomoreira/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
        </a>
    `

    modalContent.appendChild(menuLogo)
    modalContent.appendChild(menuCharacter)
    modalContent.appendChild(menuPlanet)
    modalContent.appendChild(menuShip)
    modalContent.appendChild(socialMedia)
}
