function quitarAcentos(cadena) {
    const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
    return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
}
export const nameFormat = (text = '') => {
    let values = text.split(" ")
    values = values.map(item => item.toLocaleLowerCase())
    return quitarAcentos(values.join("_"))
}

export const arreglarFecha = (fecha) => {
    let numberOfMlSeconds = fecha.getTime();
    let addMlSeconds = (5 * 60) * 60000;
    let newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
    return newDateObj;
}