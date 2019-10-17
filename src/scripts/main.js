const initDiv = document.querySelector(".initial-div")

const template = () => {
    return `
    <fieldset>
        <label>Favorite thing</label>
        <input type="text" id="favorite">
    </fieldset>
    <fieldset>
        <label>Purchase location</label>
        <input type="text" id="location">
    </fieldset><br>

    <button id="btn">Save to Wishlist</button><br><br>

    <div id="output"></div>
    `
}

initDiv.innerHTML = template()

const btn = document.querySelector("#btn")
const out = document.querySelector("#output")
const fav = document.querySelector("#favorite")
const place = document.querySelector("#location")


btn.addEventListener("click", () => {
    out.innerHTML = `I can purchase ${fav.value} at ${place.value}`
})