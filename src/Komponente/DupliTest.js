import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class DupliTest extends Component {

    componentDidMount() {
        console.log('DupliTest.js, componetDidMount');
      }
  
      componentDidUpdate(){
          console.log('DupliTest.js, componentDidUpdate');
      }

    render() {
        return (
            <div>
                 {`DupliTest.js bitno je vidjeli koliko puta se re-rendala ova komponta kad se ovdje promjeni redux state 
                 i kad bi se withRouter trebao aktivirati---> ${this.props.zaDupliTest}`}
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
      zaDupliTest: state.zaDupliTest
    }
}

// export default connect(mapStateToProps,null)(DupliTest) 
export default withRouter(connect(mapStateToProps,null)(DupliTest));