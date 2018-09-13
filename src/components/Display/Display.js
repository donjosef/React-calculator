import React from 'react';

const display = props => {
  let label = null;
  if(props.result) {
    label = 'Result: ';
  }
    return (
        <div className='Display'>
            <p>{props.input}</p>
            <p>{label}{props.result}</p>

        </div>
    );
}

export default display;
