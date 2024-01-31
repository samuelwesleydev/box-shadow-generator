import { arrayRange } from "../main.js";
//Aqui processa os dados

export const FunctionOf = {

    convertNodeListToArray(nodeList){
        return Array.from(nodeList)
    },
    
    getValueOfArray (array){
        return array.map(element=> element.value)
    },
    
    destructuringArray(array){
        const [rangeX, rangeY, rangeBlur, rangeSpread, rangeOpacity] = array
        return { rangeX, rangeY, rangeBlur, rangeSpread, rangeOpacity }
    },
    updateData(){
        let valueOfRange = this.getValueOfArray(arrayRange)
        return this.destructuringArray(valueOfRange)
    },
}