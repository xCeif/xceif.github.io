let currentPageUrl = 'https://swapi.dev/api/planets/'

window.onload = async () => {
    try {
        await loadPlanets(currentPageUrl)
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar cards.');
    }

    const nextButton = document.getElementById('next-button')
    const backButton = document.getElementById('back-button')

    nextButton.addEventListener('click', loadNextPage)
    backButton.addEventListener('click', loadPreviousPage)
};

async function loadPlanets(url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = ''; // Limpar os resultados anteriores

    try {

        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach((planet) => {
            const card = document.createElement("div")
            card.style.backgroundImage = `url('https://starwars-visualguide.com/assets/img/planets/${planet.url.replace(/\D/g, "")}.jpg')`
            card.className = "planet-cards"

            const planetNameBG = document.createElement("div")
            planetNameBG.className = "name-bg"

            const planetName = document.createElement("span")
            planetName.className = "name"
            planetName.innerText = `${planet.name}`

            planetNameBG.appendChild(planetName)
            card.appendChild(planetNameBG)

            card.onclick = () => {
                const modal = document.getElementById('modal')
                modal.style.visibility = "visible"

                const modalContent = document.getElementById('modal-content')
                modalContent.innerHTML = ``

                const planetImage = document.createElement('div')
                planetImage.style.backgroundImage = `url('https://starwars-visualguide.com/assets/img/planets/${planet.url.replace(/\D/g, "")}.jpg')`
                planetImage.className = "image"

                const name = document.createElement("span")
                name.className = "details"
                name.innerText = `Nome: ${planet.name}`

                const timeDay = document.createElement("span")
                timeDay.className = "details"
                timeDay.innerText = `Dia: ${planet.rotation_period} horas.`

                const dayYear = document.createElement("span")
                dayYear.className = "details"
                dayYear.innerText = `Ano: ${planet.orbital_period} dias.`

                const planetSize = document.createElement("span")
                planetSize.className = "details"
                planetSize.innerText = `Tamanho: ${planet.diameter} km`

                const population = document.createElement("span")
                population.className = "details"
                population.innerText = `Populacao: ${convertPop(planet.population)}`
                
                modalContent.appendChild(planetImage)
                modalContent.appendChild(name)
                modalContent.appendChild(timeDay)
                modalContent.appendChild(dayYear)
                modalContent.appendChild(planetSize)
                modalContent.appendChild(population)


            }

            mainContent.appendChild(card)
        })

        const nextButton = document.getElementById('next-button')
        const backButton = document.getElementById('back-button')

        nextButton.disabled = !responseJson.next
        backButton.disabled = !responseJson.previous

        backButton.style.visibility = responseJson.previous? "visible" : "hidden"

        currentPageUrl = url

    } catch (error) {
        console.log(error)
        alert('Erro ao carregar os personagens.')
    }
}

async function loadNextPage() {
    if (!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadPlanets(responseJson.next)

    } catch (error) {
        console.log(error)
        alert('Erro ao carregar a proxima pagina.')
    }
}

async function loadPreviousPage() {
    if (!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadPlanets(responseJson.previous)

    } catch (error) {
        console.log(error)
        alert('Erro ao carregar a pagina anterior.')
    }
}

function hideModal() {
    const modal = document.getElementById("modal")
    modal.style.visibility = "hidden"
}

function convertPop(pop) {
    if (pop === "unknown") {
        return "desconhecido"
    }

    return pop
}