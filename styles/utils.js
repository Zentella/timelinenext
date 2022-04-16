export const addOpacityToColor (color, opacity) {
    const opacityHex = Math.round(opacity * 255).toString(16) // redondear y convertir a hexadecimal
    return `${color}${opacityHex}`
}