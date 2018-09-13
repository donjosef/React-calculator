import React, {Component} from 'react';
import Display from '../../components/Display/Display';
import Commands from '../../components/Commands/Commands';
import * as math from 'mathjs'
class Calculator extends Component {
  state = {
    input: '0',
    result: undefined
  }

  addInputHandler = (type, value) => {
      switch(type) {
        case 'danger':
            this.setState({input: '0', result: undefined});
            break;
        case 'numb':
           if(this.state.input === '0') {
             this.setState({input: value})
           } else {
             this.setState(prevState => ({
               input: prevState.input + value
             }))
            }
            break;
        case 'operator':
        case 'point':
            const lastCharacter = this.state.input[this.state.input.length - 1];
            const isOperator = isNaN(lastCharacter);

            if(!isOperator) {
              this.setState(prevState => ({
                input: prevState.input + value
              }))
            } else {
              let lastIndex = this.state.input.length - 1;
              let newInput = this.state.input.slice(0, lastIndex) + value;
              this.setState({input: newInput})
            }
            break;
        default:
        this.resultHandler(this.state.input);
      }

  }

  resultHandler = (expression) => {
    this.setState({
      result: math.eval(expression)
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.input !== this.state.input || nextState.result !== this.state.result) {
      return true;
    } else {
      return false;
    }
  } //avoid useless rendering

    render() {
        return (
            <div className='Calculator'>
               <Display input={this.state.input} result={this.state.result}/>
               <Commands onAddInput={this.addInputHandler}/>
            </div>
        );
    }
}

export default Calculator;
