
let botonBuscar = document.querySelector("#boton-busqueda")

botonBuscar.addEventListener("click", buscar)

function buscar() {
    let texto = document.querySelector("#input-busqueda").value.toLowerCase()

    // const apiKey = "1cf496bec1294afb93bb885351ea44a8"
    const apiKey = "e1a1056a0a904d569e1a7cae36d6aab1"

    const APIURL = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1&tags=${texto}&includeNutrition=false`

    fetch(APIURL)
        .then(res => res.json())
        .then(res => {
            let elementos = ""
            elementos += `
                <h3>${res.recipes[0].title}</h3>
                <image src="${res.recipes[0].image}" alt="${res.recipes[0].title}" />
                <a href="${res.recipes[0].sourceUrl}"  target="_blank">
                    <button>
                        Ver receta en <span class="nombre-fuente">${res.recipes[0].sourceName}<span>
                    </button>
                </a>
            `
            let resultado = document.querySelector("#resultado-receta-random")
            resultado.innerHTML = elementos
        }).catch(error => {
            console.log("Error al buscar receta.", error)
            const mensaje1 = "Error en la búsqueda. Probá con otra palabra."
            const mensaje2 = "( Puede que se haya alcanzado el límite diario de búsquedas gratuitas de la API )"
            let resultado = document.querySelector("#resultado-receta-random")
            resultado.innerHTML = `
                <p id="error-busqueda">${mensaje1}</p>
                <p id="error-busqueda">${mensaje2}</p>`
        })
}