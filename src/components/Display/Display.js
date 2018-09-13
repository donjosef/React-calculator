import React from 'react';

const display = props => {
  let label = null;
  if(props.result) {
    label = 'Result: ';
  }
  let result = props.result;
  if(result !== undefined && !Number.isInteger(result)) {
    const resultStr = result.toString();
    const numberOfDecimals = resultStr.slice(resultStr.indexOf('.') + 1).length;
    if(numberOfDecimals > 7) {
      result = result.toFixed(7)
    }
  }
    return (
        <div className='Display'>
            <p>{props.input}</p>
            <p>{label}{result}</p>

        </div>
    );
}

export default display;
