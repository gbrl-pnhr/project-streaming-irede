import { reactive } from "vue";

export let favoritesList = reactive({
    item: "",
    list: [] as string[],
    btn: true
})

export function setFavorite() {
    localStorage.setItem("favorites", JSON.stringify(favoritesList.list))
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")!)
}

export function removeFavorite(item: string) {
    alert(favoritesList.list)
    if (favoritesList.list.length > 0) {
        for (let id = 0; id < favoritesList.list.length; id++) {
            if (favoritesList.list[id] === item) {
                favoritesList.list.splice(id, 1)
                localStorage.setItem("favorites", JSON.stringify(favoritesList.list))
            }
        }
    } else {
        localStorage.clear()
    }

}

export function clearFavorites() {
    localStorage.clear()
}

export default { getFavorites, setFavorite, removeFavorite, clearFavorites };