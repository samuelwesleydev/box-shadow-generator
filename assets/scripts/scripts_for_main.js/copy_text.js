import { textForCopy } from "./update_display.js";
import { buttonCopyText } from "../main.js";



export function copy (event){
    event.preventDefault();
    if (navigator.clipboard) {
    navigator.clipboard.writeText(textForCopy.textContent)
        .then(function () {
            console.log("Texto copiado com sucesso!");
        })
        .catch(function (err) {
            console.error("Erro ao copiar o texto: ", err);
        });
    } else {
        console.error("A API Clipboard não é suportada neste navegador.");
    }

}

export function switchIcon(){
    const symbolCopy = document.querySelector('.button-copy-text .symbol-copy')
    const symbolCorrect = document.querySelector('.button-copy-text .symbol-correct')

    symbolCopy.style.display = 'none'
    symbolCorrect.style.display = 'block'
    buttonCopyText.style.pointerEvents = 'none'

    setTimeout(()=>{
        symbolCopy.style.display = 'block'
        symbolCorrect.style.display = 'none'
        buttonCopyText.style.pointerEvents = 'all'


    }, 3000)
}