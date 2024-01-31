import { FunctionOf } from "./data-processing.js";
import { boxTrap, inset, arrayRange } from "../main.js";
import { colorSelected, convertToRGBA } from "./config_colors.js";

export const textForCopy = document.querySelector('.text-for-copy')

export const Update = {

    display(){
//Pegar os dados das range e verifica se tem inset, prepara um texto para definir a sombra da div, depois atualiza as sombras com o novo texto.
        const {rangeX, rangeY, rangeBlur, rangeSpread, rangeOpacity} = FunctionOf.updateData()
        const isInset = hasInset (inset)

        const boxShadowText = `${isInset} ${rangeX}px ${rangeY}px ${rangeBlur}px ${rangeSpread}px rgba(${colorSelected}, ${rangeOpacity})`

        this.diplayBox(boxShadowText)
        this.displayTextForCopy(boxShadowText)

    },
    diplayBox(boxShadowText){
        boxTrap.style.boxShadow =  boxShadowText
    },
    displayTextForCopy(boxShadowText){
        const boxShadowNewText = `box-shadow:${boxShadowText} ;
-webkit-box-shadow:${boxShadowText} ;
-moz-box-shadow:${boxShadowText} ;`

        textForCopy.textContent =  boxShadowNewText
    },
    reset(event){
        event.preventDefault()

        arrayRange.forEach(range =>{
            if(range.id ==='rangeOpacity' ){
                range.value = 1
            }else if(range.id ==='rangeX' || range.id ==='rangeY'){
                range.value = 10
            }else{
                range.value = 0
                document.querySelector('#buttonColor').value = '#000000'
                convertToRGBA('#000000')
            }
        })
        this.display()
    }
}

function hasInset (value){
    return value
      ?' inset'
      :''
}