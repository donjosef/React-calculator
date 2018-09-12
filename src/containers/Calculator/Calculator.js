import React, {Component} from 'react';
import Display from '../../components/Display/Display';
import Commands from '../../components/Commands/Commands';

class Calculator extends Component {
    render() {
        return (
            <div>
               <Display /> 
               <Commands /> 
            </div>
        );
    }
}

export default Calculator;