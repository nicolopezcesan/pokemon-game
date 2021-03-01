

export const generateUniqueId = () => {
    const hexaType = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx'
    const createUniqueId = c => {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    }
    const id = hexaType.replace(/[xy]/g, createUniqueId);
    return id
}

export const getPokemonImage = pokemon => {
    const number = pokemon.url.replace(/[^a-zA-Z0-9 ]/g, '').split('pokemon')[1]
    // return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${number}.png`
    return `https://pokeres.bastionbot.org/images/pokemon/${number}.png`
}