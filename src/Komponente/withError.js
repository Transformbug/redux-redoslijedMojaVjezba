import React, { Component } from 'react';



const withError = (WrappedComponent) => {
    
    //Ovakva anonimna class komonenta unutar returna hoc postoji u stvranom withError.
    return (
         class extends Component {
            componentDidMount() {
              console.log(' anonimna u withError.js, componetDidMount');
            }
        
            componentDidUpdate(){
                console.log('anonimna u withError.js, componentDidUpdate');
            }
            
            
            render() {
                return (
                    <div>
                        ovo je withError
                        <WrappedComponent {...this.props}/>
                    </div>
                );
            }
        }
    );
};

export default withError;



