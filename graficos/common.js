const getCSS = (VARIAVEL) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(VARIAVEL)
}
const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')

}

export {getCSS, tickConfig}