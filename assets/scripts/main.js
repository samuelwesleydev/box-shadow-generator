// imports
import { FunctionOf } from "./scripts_for_main.js/data-processing.js";
import { Update } from "./scripts_for_main.js/update_display.js";
import { Change } from "./scripts_for_main.js/change_mode.js";
import { Define } from "./scripts_for_main.js/config_colors.js";
import { copy, switchIcon } from "./scripts_for_main.js/copy_text.js";

//variaveis
export const boxTrap = document.querySelector('.box-trap')
export const inputRangeNodeList = document.querySelectorAll("input[type='range']")
export const selecteMode = document.querySelectorAll("input[type='radio']")
export const insetActive = document.querySelector("#check-inset")
export const buttonChangeColor = document.querySelector('#buttonColor')
export const buttonCopyText = document.querySelector(".button-copy-text")
const buttonForReset = document.querySelector(".button-reset")

export const arrayRange = FunctionOf.convertNodeListToArray(inputRangeNodeList) 

export let inset 


//events
inputRangeNodeList.forEach((input)=>{input.oninput = ()=>{Update.display()}})



selecteMode.forEach((mode)=>{ mode.onclick = ()=>Change.toggle(mode)})

insetActive.onchange = ()=>{
    inset = insetActive.checked
    Update.display()
}

buttonChangeColor.oninput = (event)=>{
    Define.color(event)
}

buttonCopyText.onclick = (event)=>{
    copy(event)
    switchIcon()
}
buttonForReset.onclick = (event)=>{
    Update.reset(event)
}



