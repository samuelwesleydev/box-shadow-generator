import { Update } from "./update_display.js";

export let colorSelected = '0, 0, 0'


export const Define ={
    color(event){
        const color = event.target.value

        convertToRGBA(color)
        Update.display()
        
    },
}

export function convertToRGBA(color) {
    let colorRGBA = hexForRGBA(color)
    colorSelected = colorRGBA

  }

export function hexForRGBA(colorHex) {
    colorHex = colorHex.replace(/^#/, '');

    var r = parseInt(colorHex.substring(0, 2), 16);
    var g = parseInt(colorHex.substring(2, 4), 16);
    var b = parseInt(colorHex.substring(4, 6), 16);

    return `${r}, ${g}, ${b}`
  }