import {createSelector} from 'reselect';

const selectBezveze=(state)=>state.zaReselect

const nePozvani=createSelector(
    [selectBezveze],
     (returnSelectBezveze)=>{
        return returnSelectBezveze[1]+10  
     })

export const pozvaniAktiviran=createSelector(
    [nePozvani],
    (returnNepozvanog)=>{
        return returnNepozvanog + 10  
     }
) 

export const daPokažemoCreateStructuredSelektor=createSelector(
    selectBezveze,
    (returnSelectBezveze)=>{
        return returnSelectBezveze[0].a + ' ' + 'dodana vrijednost'
    }
)
//vidi video obješnjenje...

//nisam mijenja redux state zaReselect array, ovi creatSlekotr su utility i možemo ih stavii bilog gdje u našem code...
