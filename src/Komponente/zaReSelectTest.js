import React, { Component } from 'react';
import {connect} from 'react-redux';
import {pozvaniAktiviran,daPokažemoCreateStructuredSelektor} from './utilityZaReselect';
import {createStructuredSelector} from 'reselect';

class zaReSelectTest extends Component {
 

    componentDidMount() {
        console.log('zaReSelectTest.js, componetDidMount');
      }
  
      componentDidUpdate(){
          console.log('zaReSelectTest.js, componentDidUpdate');
      }
    render() {
        return (
            <div>
                zaReSelectTest.js,ovo je this.props.zaReselect--> {this.props.zaReselect}
                <br/>
                zaReSelectTest.js, ovo je this.props.demoCreateStru--> {this.props.demoCreateStru}
            </div>
        );
    }
}

// const mapStateToProps=state=>{
//     console.log('mapStateToProps unutar zaReselectTest.js');
//     return {
//         zaReselect: pozvaniAktiviran(state)
//     }
// }

//----createStructuredSelector--------

// Ovo je umjesto ovoga doli alternativa.State će ubaciti automatski.
const mapStateToProps=createStructuredSelector({
    zaReselect: pozvaniAktiviran,
    demoCreateStru: daPokažemoCreateStructuredSelektor

})

// const mapStateToProps=state=>{
//     console.log('mapStateToProps unutar zaReselectTest.js');
//     return {
//         zaReselect: pozvaniAktiviran(state),
//         demoCreateStru: daPokažemoCreateStructuredSelektor(state)
//     }
// }


export default connect(mapStateToProps,null)(zaReSelectTest);