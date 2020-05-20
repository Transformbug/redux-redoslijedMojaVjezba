import React, { Component } from 'react';
import {connect} from 'react-redux';

class granaB extends Component {
    componentDidMount() {
        console.log('granaB.js, componetDidMount');
      }
  
      componentDidUpdate(){
          console.log('granaB.js, componentDidUpdate');
      }
    render() {
        return (
            <div>
              <br/>
                {`ovo je GranaB ---> ${this.props.samoGranaBOvoIma}`}
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
     samoGranaBOvoIma: state.samoGranaBOvoIma
    }
}



export default connect(mapStateToProps,null)(granaB) 

