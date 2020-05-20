import React, { Component } from 'react';
import {connect} from 'react-redux';
import withError from './withError'
import {Redirect} from 'react-router-dom';

class Druga extends Component {

    state={
        reDirectAktivan: false,
    }

    componentDidMount() {
        console.log('Druga.js, componetDidMount');
      }
  
      componentDidUpdate(){
          console.log('Druga.js, componentDidUpdate');
          
          //Verzija 2,ovo je dio verzija 2 testa doli:
          
            // this.props.zaDupliTest()
        
       
      }

      reDirectAktivanHandler=()=>{
        //VAŽNO: uključi iskomentirnu referencu(iznad redirecta ovdje) i zaDupliTest u maptStateToProps ovdje da vidiš state batching koji opisujem ovdje doli u idućeoj rečenici. 
          //Ovdje se dogodi state batching imeđu običnog i redux state u verziji 1, dok u verziji 3 se ne dogodi...
         
          //Verzija 1:
        //  this.setState({reDirectAktivan: true})
        //     this.props.zaDupliTest()
  
        //Verzija 2:(vidi gori u componentDidUpdate ostatak verzije 2)
        //VAŽNO: samo ova verzija rezultira da se DupliTest.js re-renda samo jedan put iako mu se promjenio mapStateToProps i mora se aktivirati radi witRouter i Redirecta.
        //I baš takava verzija bude kad kilknemo na Logout NavLink u burger-builderu tj. bude Redirect unutar render metoda i onda u componetDidMount mijenjamo redux state.
          // this.setState({reDirectAktivan: true})
        
        //Verzija 3:
        //   Promise.resolve().then(()=>{
        //     this.setState({reDirectAktivan: true})
        //     this.props.zaDupliTest()
        // })    
       
        //Verzija 4:
        // Promise.resolve().then(()=>{
        //     this.props.zaDupliTest()
        //     this.setState({reDirectAktivan: true})
            
        // })  
       
      }
      
    render() {
        return (
            <div>
                Ovo je Druga.js
                {`Ovo je zajednički state unutar Druga.js---> ${this.props.ime}`}
                <br/>
                {`Ovo je state promjena samo unutar Druga.js---> ${this.props.samoDruga}`}
                <br/>
                {`Ovo je zajednička OBJEKT state promjena unutar Druga.js---> ${this.props.objekt.nekiKey.unutarnjiKey}`}
                <br/>
                <button onClick={this.props.promjeniMate}>Ovo je Druga.js buton, promjeniMate</button>
                <br/>
                <button onClick={this.props.promjeniSamoDruga}>Ovo je Druga.js buton, promjeniSamoDruga</button>
                <br/>
                <button onClick={this.props.promjeniObjekt}>Ovo je Druga.js buton, promjeniOBJEKT</button>
                <br/>
                <button onClick={this.props.bezPromjene}>Ovo je Druga.js buton, bezPromjene, promjena stanje gdje je staro stanje skozr isto kao novo</button>
                <br/>
                <button onClick={this.reDirectAktivanHandler}>Jel se događa dupli re-render kompnte koja ima withRouter i čiji se redux state promjeni.Ovdje u Druga.js samo pokrećemo to
                redux mapStateToProsp se promjeni u komponeti DupliTest tj. komponeti koja ima withRouter</button>
                <br/>
               {/* {`referenca zaDupliTest, da vidimo hoće li biti state batching ovdje-->${this.props.zaDupliTest}`} */}
                <br/>
                {this.state.reDirectAktivan ? <Redirect to='nePostojiAliNijeBitno'/>: null}
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
      ime: state.ime,
      samoDruga:state.samoDruga,
      objekt: state.objekt,
      // zaDupliTest:state.zaDupliTest
       
      //Ovdje sam još bio nešto dodao da testiram onu situaciju kad nam navodno treba redux slektor tj. re-select library. Uglavnom to služi samo da se ne aktivira cijeli ovaj
       //mapDispatchToProps fn. ne da sprijči re-render komponete jer ako se ne promjeni vrijednost ovog objekta ovdje neće se dogoditi re-render. Zanimljivo je bilo staviti Math.random ovdje
       //jer vidimo da će se uvijek dogodti re-render Druga.js jer connect odlučuje hoće li re-rendati komponteu kad usporedi prijašnji ovaj objekt ovdje koji returnamo, ne sami state 
       //parametar kojeg dobijemo od reduxa. 
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        promjeniMate: ()=>dispatch({type: 'MATE'}),
        promjeniSamoDruga: ()=>dispatch({type: 'PROMJENAUSAMODRUGA'}),
        promjeniObjekt: ()=>dispatch({type: 'OBJEKT'}),
        bezPromjene: ()=>dispatch({type: 'BEZPROMJENE'}),
        zaDupliTest: ()=>dispatch({type: 'DUPLITEST'}),
    
    }
}

//Verzija sa withError
//VAŽNO: čini mi se da se događa re-render one anonimne klase koja returna withError jer je to retrun ovdje u drugom connect() i zato se dogodti re-render toga, a re-render
//Druga.js se dogodi jer to to nested unutar te withError i to se treba updatati state.
// export default connect(mapStateToProps,mapDispatchToProps)(withError(Druga))

//Obična verzija
export default connect(mapStateToProps,mapDispatchToProps)(Druga);
