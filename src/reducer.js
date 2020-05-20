const initialState={
    ime: 'Ovo je default ime',
    samoDruga: 'Ovo je default koji se referira samo u Druga.js',
    samoPrva: 'Ovo je default koji se referia samo u Prva.js',
    samoGranaBOvoIma: 'ovo je default state koji se referia na samo granaB, sa time da granaB nema svoj disptach za ovo promjenu',
    zaDupliTest: 'default virjednost za dupli test',
    zaReselect:[{a: 'value'},10],
    objekt: {
        nekiKey:{
            unutarnjiKey: 'default'
        }
    }
}

const reducer=(state=initialState,action)=>{
   

    if(action.type==="MATE"){
        return {
            ...state,
            ime: 'sad je ovo mate'
        }
    }

    if(action.type==="PROMJENAUSAMODRUGA"){
        return {
            ...state,
            samoDruga: 'Ovo je PROMJENA PROMJENA koji postoji samo u Druga.js'
        }
    }

    
    if(action.type==="PROMJENAUSAMOPRVA"){
        return {
            ...state,
            samoPrva: 'Ovo je PROMJENA PROMJENA koji postoji samo u Prva.js'
        }
    }

    if(action.type==="OBJEKT"){
        let noviObj={...state.objekt}
        noviObj.nekiKey.unutarnjiKey='ovo je NOVA VRIJEDNOST UNUTARNJEG key'
        return {
            ...state,
            objekt: noviObj
        }
    }

    if(action.type==="BEZPROMJENE"){
        
        return {
            ...state,
            //VAŽNO: kad koristomo samo state i spred opratora nested obejkti unutar state ostanu by reference. Ali ako ih overwirtamo sa istim sadržajem dogodi se re-render.
            // objekt: {
            //     nekiKey:{
            //         unutarnjiKey: 'default'
            //     }
            // }
           }
    }

    
    if(action.type==="GRANAB"){
        
        return {
            ...state,
            samoGranaBOvoIma: 'PROMJENA.PROMJENA SAMO GRANAB, bez vlastiting dispatcha'
           }
    }
    
    if(action.type==="DUPLITEST"){
        
        return {
            ...state,
            zaDupliTest: 'nova vrijednost,nova vrijednost za dupli test'
           }
    }






    return state
}

export default reducer;