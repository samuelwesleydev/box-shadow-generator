import { arrayRange } from "../main.js";
import { FunctionOf } from "./data-processing.js";
import { Update } from "./update_display.js";

//Define o modo exagerado para o modo leve
export const Change = {
    toggle(selected){
        const {rangeX, rangeY, rangeBlur, rangeSpread, rangeOpacity} = FunctionOf.destructuringArray(arrayRange)


        selected.id === 'mode-exaggerated'
          ?modeExaggerated(rangeX, rangeY, rangeSpread)
          :modeLight(rangeX, rangeY, rangeSpread)


    }
}

function modeExaggerated(rangeX, rangeY, rangeSpread){
    setLimits(rangeX, -300, 300)
    setLimits(rangeY, -300, 300)
    setLimits(rangeSpread, -100, 100)

    Update.display()

}
function modeLight(rangeX, rangeY, rangeSpread){
    setLimits(rangeX, -100 , 100)
    setLimits(rangeY, -100 , 100)
    setLimits(rangeSpread, -30 , 30)

    Update.display()

}

function setLimits(range, min, max){
    range.min = min
    range.max = max
    range.value = Math.min(Math.max(range.value, min), max)
}