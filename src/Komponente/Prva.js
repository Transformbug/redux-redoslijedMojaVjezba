import React, { Component } from 'react';
import Druga from './Druga';
import BezConnect from './BezConnect';
import ZaReselectTest from './zaReSelectTest';
import {connect} from 'react-redux';
import * as actions  from '../actions';
import {NavLink} from 'react-router-dom'


class Prva extends Component {

    
    componentDidMount() {
        console.log('Prva.js, componetDidMount');
      }
  
      componentDidUpdate(){
          console.log('Prva.js, componentDidUpdate');
      }
    
      render() {
          console.log(this.props.objekt);
        return (
            <div>
                 <NavLink to='/'> Home botun</NavLink>
                 <br/>
                Ovo je Prva.js
                {`Ovo je zajednički state unutar Prva.js--->  ${this.props.ime}`}
                <br/>
                {`Ovo je state promjena samo unutar Prva.js---> ${this.props.samoPrva}`}
                <br/>
                {`Ovo je zajednička OBJEKT state promjena  unutar Prva.js---> ${this.props.objekt.nekiKey.unutarnjiKey}`}
                <br/>
                <button onClick={this.props.promjeniMate}>Ovo je Prva.js buton, promjeniMate</button>
                <br/>
                <button onClick={this.props.promjeniSamoPrva}>Ovo je Prva.js buton, promjeniSamoPrva</button>
                <br/>
                <button onClick={this.props.promjeniObjekt}>Ovo je Prva.js buton, promjeniOBJEKT</button>
                <br/>
                <button onClick={this.props.bezPromjene}>Ovo je Prva.js buton, bezPromjene, promjena stanje gdje je staro stanje skozr isto kao novo</button>
                <br/>
                <button onClick={this.props.zaGranuBDispatch}>Disptach unutar Prva.js koji mijanja redux state kojeg samo GranaB koristi</button>
                <br/>
                <button onClick={this.props. nekaAkcijaThunkAliNijeAsync}>Ovdje me zanima što se dogodi kad korismo action kreator ondaj od thunk,ali nema ništa asnyc nego
                    dva disptach jedan iza drugog. ovo treba gledat u debuggeru
                 </button>
                <br/>

                <br/>
                <Druga/>
                <ZaReselectTest/>
                <BezConnect/>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
      ime: state.ime,
      samoPrva:state.samoPrva,
      objekt: state.objekt
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        promjeniMate: ()=>dispatch({type: 'MATE'}),
        promjeniSamoPrva: ()=>dispatch({type: 'PROMJENAUSAMOPRVA'}),
        promjeniObjekt: ()=>dispatch({type: 'OBJEKT'}),
        bezPromjene: ()=>dispatch({type: 'BEZPROMJENE'}),
        zaGranuBDispatch: ()=>dispatch({type: 'GRANAB'}),
        nekaAkcijaThunkAliNijeAsync: ()=>dispatch(actions.nekaAkcijaThunkAliNijeAsync())
        }
}


export default connect(mapStateToProps,mapDispatchToProps)(Prva) ;